'use strict'

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'
// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err
})

// const assetManifest = require('../build/client/asset-manifest.json')
// if (!assetManifest) {
//   console.error('No assets-manifest.json found. Did you run the build-client script?.\n')
// }
// It'd be more efficient to set different process env to avoid JSON.stringify
// and later JSON.parse(process.env.REACT_APP_ASSET_MANIFEST || '{}').
// process.env.REACT_APP_ASSET_MANIFEST = JSON.stringify(assetManifest)

// Ensure environment variables are read.
require('../config/env')

const path = require('path')
const chalk = require('chalk')
const fs = require('fs-extra')
const webpack = require('webpack')
const config = require('../config/webpack.config.server')
const paths = require('../config/paths')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
// const printHostingInstructions = require('react-dev-utils/printHostingInstructions')
const FileSizeReporter = require('react-dev-utils/FileSizeReporter')
const printBuildError = require('react-dev-utils/printBuildError')
const getClientEnvironment = require('../config/env')
const env = getClientEnvironment('')

// set defaults to node env
config.plugins.push(
  new webpack.DefinePlugin(
    Object.keys(env.stringified['process.env']).reduce((obj, key) => {
      const name = 'process.env.' + key
      obj[name] = `(${name} || (${env.stringified['process.env'][key]}))`
      return obj
    }, {})
  )
)

const measureFileSizesBeforeBuild =
  FileSizeReporter.measureFileSizesBeforeBuild
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild
// const useYarn = fs.existsSync(paths.yarnLockFile)

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appServerIndexJs])) {
  process.exit(1)
}

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(paths.serverBuild)
  .then(previousFileSizes => {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    fs.emptyDirSync(paths.serverBuild)
    // Start the webpack build
    return build(previousFileSizes)
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'))
        console.log(warnings.join('\n\n'))
        console.log(
          '\nSearch for the ' +
          chalk.underline(chalk.yellow('keywords')) +
          ' to learn more about each warning.'
        )
        console.log(
          'To ignore, add ' +
          chalk.cyan('// eslint-disable-next-line') +
          ' to the line before.\n'
        )
      } else {
        console.log(chalk.green('Compiled successfully.\n'))
      }
      copyFiles()

      console.log('File sizes after gzip:\n')
      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        paths.serverBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      )
      console.log()
    },
    err => {
      console.log(chalk.red('Failed to compile.\n'))
      printBuildError(err)
      process.exit(1)
    }
  )

// Create the production build and print the deployment instructions.
function build (previousFileSizes) {
  console.log('Creating an optimized production build...')

  let compiler = webpack(config)
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }
      const messages = formatWebpackMessages(stats.toJson({}, true))
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1
        }
        return reject(new Error(messages.errors.join('\n\n')))
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
            'Most CI servers set it automatically.\n'
          )
        )
        return reject(new Error(messages.warnings.join('\n\n')))
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings
      })
    })
  })
}

function copyFiles () {
  const indexServer = path.parse(paths.indexServer)
  const appWebpackStats = path.parse(paths.appWebpackStats)
  fs.copySync(paths.indexServer, path.join(paths.serverBuild, `${indexServer.name}${indexServer.ext}`))
  fs.copySync(paths.appWebpackStats, path.join(paths.serverBuild, `${appWebpackStats.name}${appWebpackStats.ext}`))
}

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import withSizes from 'react-sizes'
import stringToNumber from 'utils/stringToNumber'
import { isServer } from 'utils/index'
import { ViewContext } from 'HOC/ViewContext'
import toJS from 'HOC/toJS'

const ElasticAdaptive = ({
  elasticConfig,
  children,
  currentSize,
  currentWindowWidth,
  ...context
}) => {
  useEffect(
    () => {
      if (!isServer) {
        // changeSize()
      }
    },
    [currentWindowWidth]
  )

  // const changeSize = () => {
  //   const html = document.documentElement
  //   const { baseSize, baseWidth, widthLimit } = elasticConfig[currentSize]
  //   let width = currentWindowWidth
  //   if (widthLimit) {
  //     width = Math.min(width, widthLimit)
  //   }
  //   const currentFontSize = width / baseWidth * baseSize
  //
  //   html.style.fontSize = currentFontSize + 'px'
  // }

  return <ViewContext.Provider value={context}>{children}</ViewContext.Provider>
}

ElasticAdaptive.propTypes = {
  children: PropTypes.node,
  currentSize: PropTypes.string,
  currentWindowWidth: PropTypes.number,
  elasticConfig: PropTypes.object
}

export default compose(
  toJS,
  withSizes(({ width: currentWindowWidth }) => {
    const isMobile = currentWindowWidth < stringToNumber('768px')
    const isDesktop = currentWindowWidth > stringToNumber('1024px')
    const currentSize = isDesktop ? 'desktop' : 'mobile'

    return {
      currentSize,
      currentWindowWidth,
      sizes: {
        isDesktop,
        isMobile
      }
    }
  }),
  React.memo
)(ElasticAdaptive)

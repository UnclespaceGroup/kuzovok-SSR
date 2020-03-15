import React from 'react'
// packages
import universal from 'react-universal-component'
import logo from 'static/logo/colored-logo.png'

const Loading = ({ error, retry: handleRetry }) => {
  if (error) {
    return (
      <div>
        Error! {error}
        <button onClick={handleRetry}
          type={'button'}
        >
          Retry
        </button>
      </div>
    )
  } else {
    return (
      <div
        style={{
          position: 'relative'
        }}
      >
        <img
          src={logo}
          alt={'Кузовок'}
          style={{
            height: '300px',
            left: 0,
            margin: '0 auto',
            position: 'absolute',
            right: 0,
            top: 'calc(50vh - 150px)'
          }}
        />
      </div>
    )
  }
}

const LoadableApp = universal(import('../App/AppDesktop'), { loading: Loading })

export default LoadableApp

import React from 'react'
import universal from 'react-universal-component'

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
          src={''}
          style={{
            height: '60px',
            left: 0,
            margin: '0 auto',
            position: 'absolute',
            right: 0,
            top: 'calc(50vh - 30px)'
          }}
        />
      </div>
    )
  }
}

const LoadableApp = universal(import('../App/AppMobile'), { loading: Loading })

export default LoadableApp

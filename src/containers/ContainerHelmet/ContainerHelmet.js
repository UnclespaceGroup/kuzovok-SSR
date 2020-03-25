import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet/es/Helmet'

const ContainerHelmet = ({ title, description }) => (
  <Helmet>
    {title && <title>{title}</title>}
    {description && <meta
      name='description'
      content={description}
    />}
  </Helmet>
)
ContainerHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
export default React.memo(ContainerHelmet)

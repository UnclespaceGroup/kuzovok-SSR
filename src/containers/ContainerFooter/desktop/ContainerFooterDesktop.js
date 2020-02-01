import React from 'react'
import FooterDesktop from 'components/Footer/desktop/FooterDesktop'
import useFooter from 'containers/ContainerFooter/useFooter'

const ContainerFooterDesktop = () => {
  const data = useFooter()
  return (
    <FooterDesktop {...data} />
  )
}
export default ContainerFooterDesktop

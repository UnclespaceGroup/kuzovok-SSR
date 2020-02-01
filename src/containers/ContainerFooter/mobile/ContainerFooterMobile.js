import React from 'react'
import useFooter from 'containers/ContainerFooter/useFooter'
import FooterMobile from 'components/Footer/mobile/FooterMobile'

const ContainerFooterMobile = () => {
  const data = useFooter()
  return (
    <FooterMobile {...data} />
  )
}
export default ContainerFooterMobile

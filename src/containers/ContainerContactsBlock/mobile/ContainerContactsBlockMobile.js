import React from 'react'
import SectionContactsMobile from 'components/SectionContacts/mobile/SectionContactsMobile'
import useContactsBlock from 'containers/ContainerContactsBlock/useContactsBlock'

const ContainerContactsBlockMobile = () => {
  const props = useContactsBlock()
  return (
    <SectionContactsMobile
      {...props}
    />
  )
}

export default React.memo(ContainerContactsBlockMobile)

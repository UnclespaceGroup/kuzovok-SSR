import React from 'react'
import SectionContacts from 'components/SectionContacts/desktop/SectionContacts'
import useContactsBlock from 'containers/ContainerContactsBlock/useContactsBlock'

const ContainerContactsBlock = () => {
  const props = useContactsBlock()
  return (
    <SectionContacts
      {...props}
    />
  )
}

export default React.memo(ContainerContactsBlock)

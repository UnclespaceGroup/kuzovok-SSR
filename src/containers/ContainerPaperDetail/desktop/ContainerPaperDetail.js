import React from 'react'
import Layout from 'components/Layout/Layout'
import Padding from 'components/Padding/Padding'
import Banner from 'components/Banner/desktop/Banner'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'
import usePaperDetail from 'containers/ContainerPaperDetail/usePaperDetail'
import { PAGE_PAPER } from 'constants/ROUTES'
import ContainerContactsBlock from 'containers/ContainerContactsBlock/desktop/ContainerContactsBlock'
import ContainerHelmet from 'containers/ContainerHelmet/ContainerHelmet'
import Section404Desktop from 'components/Section404/desktop/Section404Desktop'

const ContainerPaperDetail = () => {
  const { bannerData, content, helmetData, isEmpty } = usePaperDetail()
  if (isEmpty) return <Section404Desktop />
  return (
  <>
    <ContainerHelmet {...helmetData} />
    <Banner backLink={PAGE_PAPER} {...bannerData} />
    <Padding value={60} />
    <Layout withAside>
      <Wysiwyg>
        {content}
      </Wysiwyg>
      <div />
    </Layout>
    <Padding value={120} />
    <ContainerContactsBlock />
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerPaperDetail)

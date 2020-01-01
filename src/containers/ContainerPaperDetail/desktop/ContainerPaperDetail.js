import React from 'react'
import Layout from 'components/Layout/Layout'
import Padding from 'components/Padding/Padding'
import SectionContacts from 'components/SectionContacts/desktop/SectionContacts'
import Banner from 'components/Banner/desktop/Banner'
import Wysiwyg from 'components/Wysiwyg/desktop/Wysiwyg'
import usePaperDetail from 'containers/ContainerPaperDetail/usePaperDetail'

const ContainerPaperDetail = () => {
  const { bannerData, content } = usePaperDetail()
  return (
  <>
    <Banner {...bannerData} />
    <Padding value={60} />
    <Layout withAside>
      <Wysiwyg>
        {content}
      </Wysiwyg>
      <div />
    </Layout>
    <Padding value={120} />
    <SectionContacts />
    <Padding value={120} />
  </>
  )
}

export default React.memo(ContainerPaperDetail)

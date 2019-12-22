import React from 'react'
import PropTypes from 'prop-types'
import BannerMobile from '../../../components/Banner/mobile/BannerMobile'
import Padding from '../../../components/Padding/Padding'
import useWorks from '../useWorks'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import ContainerWorksSpecificLimited from 'containers/ContainerWorks/ContainerWorksSpecificLimited'
import SectionCardsRowMobile from 'components/SectionCardsRow/mobile/SectionCardsRowMobile'
import { slugs } from 'constants/workSlugs'
import { PAGE_WORK_DETAIL, PAGE_WORKS } from 'constants/ROUTES'
import _ from 'lodash'

const ContainerWorksMobile = ({ match }) => {
  const { header } = useWorks({ ...match })
  return (
  <>
    <BannerMobile withoutTabs {...header} />
    <Padding value={24} />
    {
      _.map(slugs, (slug, key) => (
        <ContainerWorksSpecificLimited
          title={slug.title}
          key={key}
          params={slug.params}
        >
          <SectionCardsRowMobile
            url={PAGE_WORK_DETAIL}
            moreButtonUrl={PAGE_WORKS + slug.slug}
          />
        </ContainerWorksSpecificLimited>
      ))
    }
    <Padding value={40} />
  </>
  )
}
ContainerWorksMobile.propTypes = {
  match: PropTypes.object
}

export default compose(
  withRouter,
  React.memo
)(ContainerWorksMobile)

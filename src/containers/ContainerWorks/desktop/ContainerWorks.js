import React from 'react'
import PropTypes from 'prop-types'
import Banner from 'components/Banner/desktop/Banner'
import Padding from 'components/Padding/Padding'
import useWorks from '../useWorks'
import _ from 'lodash'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import ContainerWorksSpecificLimited from 'containers/ContainerWorks/ContainerWorksSpecificLimited'
import SectionCardsRow from 'components/SectionCardsRow/desktop/SectionCardsRow'
import { slugs } from 'constants/workSlugs'
import { PAGE_WORKS, PAGE_WORK_DETAIL } from 'constants/ROUTES'

const ContainerWorks = () => {
  const { header } = useWorks()
  return (
  <>
    <Banner withoutTabs {...header} />
    <Padding value={80} />
    {
      _.map(slugs, (slug, key) => (
        <ContainerWorksSpecificLimited
          key={key}
          title={slug.title}
          params={slug.params}
        >
          <SectionCardsRow
            url={PAGE_WORK_DETAIL}
            moreButtonUrl={PAGE_WORKS + slug.slug}
          />
        </ContainerWorksSpecificLimited>
      ))
    }
    <Padding value={120} />
  </>
  )
}
ContainerWorks.propTypes = {
  match: PropTypes.object
}

export default compose(
  withRouter,
  React.memo
)(ContainerWorks)

import React from 'react'
import SectionTopBanner from '../../components/SectionTopBanner/SectionTopBanner'
import SectionSimplePost from '../../components/SectionSimplePost/SectionSimplePost'
import List from '../../components/List/List'
import ContainerLastWorks from '../ContainerLastWorks/ContainerLastWorks'
import IconCount from '../../components/IconCount/IconCount'
import useWorksCurrent from './useWorksCurrent'

const ContainerWorksCurrent = () => {
  const { items = [], headerData } = useWorksCurrent()

  return (
  <>
    <SectionTopBanner
      {...headerData}
      addIcon={
        <IconCount
          count={items.length}
          texts={['запись', 'записи', 'записей']}
        />
      }
    />
    <List
      items={items}
    >
      <SectionSimplePost withUrl />
    </List>
    <ContainerLastWorks />
  </>
  )
}

export default React.memo(ContainerWorksCurrent)

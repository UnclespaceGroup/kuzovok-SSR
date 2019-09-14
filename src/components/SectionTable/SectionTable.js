import React from 'react'
import PropTypes from 'prop-types'
import css from './SectionTable.module.scss'
import Layout from '../Layout/Layout'
import _ from 'lodash'

const SectionTable = ({ table }) => (
  <Layout className={css.container}>
    <table>
      <thead>
        <tr>
          {
            _.map(table.titles, (item, key) => <th key={key}>{item}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          _.map(table.body, (item, key) => (
            <tr key={key}>
              {
                _.map(item, (i, k) => <td key={k} dangerouslySetInnerHTML={{ __html: i }} />)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  </Layout>
)
SectionTable.propTypes = {
  table: PropTypes.shape({
    titles: PropTypes.array,
    body: PropTypes.array
  })
}

export default React.memo(SectionTable)

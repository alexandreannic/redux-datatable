import CustomDatatable from './CustomDatatable'
import * as React from 'react'
import {Page} from 'react-components'
import {Demo} from '../../shared/Demo/Demo'
import preval from 'babel-plugin-preval/macro'

export const CustomDatatableDoc = () => {
  return (
    <Page>
      <Demo
        fileName="CustomDatatable"
        constName="EXPENDABLE_DATATABLE"
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./CustomDatatable.tsx'), 'utf8')`}
        component={CustomDatatable}/>
    </Page>
  )
}

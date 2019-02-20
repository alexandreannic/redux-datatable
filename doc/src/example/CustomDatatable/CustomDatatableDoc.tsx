import CustomDatatable from './CustomDatatable'
import * as React from 'react'
import {Page} from 'mui-extension'
import {Demo} from '../../shared/Demo/Demo'
import preval from 'babel-plugin-preval/macro'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

export const CustomDatatableDoc = () => {
  return (
    <Page>
      <PageTitle>Custom Datatable</PageTitle>
      <Demo
        fileName="CustomDatatable"
        constName="EXPENDABLE_DATATABLE"
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./CustomDatatable.tsx'), 'utf8')`}
        component={CustomDatatable}/>
    </Page>
  )
}

import ExpendableDatatable from './ExpendableDatatable'
import * as React from 'react'
import {Page} from 'react-components'
import {Demo} from '../../shared/Demo/Demo'
import preval from 'babel-plugin-preval/macro'

export const ExpendableDatatableDoc = () => {
  return (
    <Page>
      <h1>Expendable DataTable</h1>
      <p>This example shows how to add an expendable content to a row showing on click.</p>
      <Demo
        constName="EXPENDABLE_DATATABLE"
        fileName="ExpendableDatatable"
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ExpendableDatatable.tsx'), 'utf8')`}
        component={ExpendableDatatable}/>
    </Page>
  )
}

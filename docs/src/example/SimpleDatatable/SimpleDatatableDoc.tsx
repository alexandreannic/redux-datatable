import * as React from 'react'
import {Page} from 'react-components'
import {Demo} from '../../shared/Demo/Demo'
import SimpleDatatable from './SimpleDatatable'
import preval from 'babel-plugin-preval/macro'

export const SimpleDatatableDoc = () => {
  return (
    <Page>
      <Demo
        fileName="SimpleDatatable"
        constName="SIMPLE_DATATABLE"
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./SimpleDatatable.tsx'), 'utf8')`}
        component={SimpleDatatable}/>
    </Page>
  )
}

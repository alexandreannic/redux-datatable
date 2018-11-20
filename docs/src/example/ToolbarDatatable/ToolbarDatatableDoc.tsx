import * as React from 'react'
import {Page} from 'react-components'
import ToolbarDatatable from './ToolbarDatatable'
import {Demo} from '../../shared/Demo/Demo'
import preval from 'babel-plugin-preval/macro'

export const ToolbarDatatableDoc = () => {
  return (
    <Page>
      <Demo
        fileName="ToolbarDatatable"
        constName="TOOLBAR_DATATABLE"
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ToolbarDatatable.tsx'), 'utf8')`}
        component={ToolbarDatatable}/>
    </Page>
  )
}

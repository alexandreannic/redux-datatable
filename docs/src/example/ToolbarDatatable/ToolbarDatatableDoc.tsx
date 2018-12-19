import * as React from 'react'
import {Page} from 'mui-extension'
import ToolbarDatatable from './ToolbarDatatable'
import {Demo} from '../../shared/Demo/Demo'
import preval from 'babel-plugin-preval/macro'

export const ToolbarDatatableDoc = () => {
  return (
    <Page>
      <h1>Toolbar Datatable</h1>
      <p>
        This example introduce new component <code>DatatableToolbar</code>.
        It takes a string parameter (<code>globalSearch</code> in this example) via the
        props <code>search</code> associated to an input. When this input change, the action <code>fetchUsers</code> is
        triggered and a entry is added to the criterias with the string parameter as key and the input value as value.
      </p>
      <p>
        This example also shows the responsiveness of the <code>Datatable</code>.
      </p>
      <Demo
        fileName="ToolbarDatatable"
        constName="TOOLBAR_DATATABLE"
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ToolbarDatatable.tsx'), 'utf8')`}
        component={ToolbarDatatable}/>
    </Page>
  )
}

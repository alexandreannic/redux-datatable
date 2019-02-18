import * as React from 'react'
import {Page} from 'mui-extension'
import ToolbarDatatable from './ToolbarDatatable'
import {Demo} from '../../shared/Demo/Demo'
import preval from 'babel-plugin-preval/macro'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

export const ToolbarDatatableDoc = () => {
  return (
    <Page>
      <PageTitle>Toolbar Datatable</PageTitle>
      <p>
        This example introduce new component <Code>DatatableToolbar</Code>.
        It takes a string parameter (<Code>globalSearch</Code> in this example) via the
        props <Code>search</Code> associated to an input. When this input change, the action <Code>fetchUsers</Code> is
        triggered and a entry is added to the criterias with the string parameter as key and the input value as value.
      </p>
      <p>
        This example also shows the responsiveness of the <Code>Datatable</Code>.
      </p>
      <Demo
        fileName="ToolbarDatatable"
        constName="TOOLBAR_DATATABLE"
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ToolbarDatatable.tsx'), 'utf8')`}
        component={ToolbarDatatable}/>
    </Page>
  )
}

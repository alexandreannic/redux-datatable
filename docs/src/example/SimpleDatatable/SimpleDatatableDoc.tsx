import * as React from 'react'
import {Page} from 'react-components'
import {Demo} from '../../shared/Demo/Demo'
import SimpleDatatable from './SimpleDatatable'
import preval from 'babel-plugin-preval/macro'
import {Code} from '../../shared/Code/Code'

export const SimpleDatatableDoc = () => {
  return (
    <Page>
      <h1>Simple DataTable</h1>
      <p>
        Simplest example introducing the following features:
      </p>
      <ul>
        <li>Pagination</li>
        <li>Sort</li>
      </ul>
      <h2>Pagination</h2>
      <p>
        It trigger the <code>action</code> handling the parameters <code>limit</code> and <code>offset</code>
      </p>
      <h2>Sort</h2>
      <p>
        To make a column sortable, simply define the props <code>name</code> as follows:
        <Code raw={`<DatatableSort name="createdAt">Date</DatatableSort>`}/>
        When clicking on it, it will trigger the <code>action</code> including <code>sortBy</code> with&nbsp;
        <b>createdAt</b> and&nbsp; <code>orderBy</code> toggling between <b>asc</b> and <b>desc</b>.
        <br/>
        If <code>name</code> is not defined, <code>{`<DatatableSort/>`}</code> will behave as
        <code>{`<TableCell/>`}</code> from Material-UI.
      </p>

      <Demo
        fileName="SimpleDatatable"
        constName="SIMPLE_DATATABLE"
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./SimpleDatatable.tsx'), 'utf8')`}
        component={SimpleDatatable}/>
    </Page>
  )
}

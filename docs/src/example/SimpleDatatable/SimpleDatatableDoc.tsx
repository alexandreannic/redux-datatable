import * as React from 'react'
import {Page} from 'mui-extension'
import {Demo} from '../../shared/Demo/Demo'
import SimpleDatatable from './SimpleDatatable'
import preval from 'babel-plugin-preval/macro'
import {Code} from '../../shared/Code/Code'
import {PageTitle} from '../../shared/PageTitle/PageTitle'

export const SimpleDatatableDoc = () => {
  return (
    <Page>
      <PageTitle>Simple DataTable</PageTitle>
      <p>
        Simplest example introducing the following features:
      </p>
      <ul>
        <li>Pagination</li>
        <li>Sort</li>
      </ul>
      <h2>Pagination</h2>
      <p>
        It trigger the <Code>action</Code> handling the parameters <Code>limit</Code> and <Code>offset</Code>
      </p>
      <h2>Sort</h2>
      <p>
        To make a column sortable, simply define the props <Code>name</Code> as follows:
        <Code>{'<DatatableSort name="createdAt">Date</DatatableSort>'}</Code>
        When clicking on it, it will trigger the <Code>action</Code> including <Code>sortBy</Code> with&nbsp;
        <b>createdAt</b> and&nbsp; <Code>orderBy</Code> toggling between <b>asc</b> and <b>desc</b>.
        <br/>
        If <Code>name</Code> is not defined, <Code>{`<DatatableSort/>`}</Code> will behave as
        <Code>{`<TableCell/>`}</Code> from Material-UI.
      </p>

      <Demo
        fileName="SimpleDatatable"
        constName="SIMPLE_DATATABLE"
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./SimpleDatatable.tsx'), 'utf8')`}
        component={SimpleDatatable}/>
    </Page>
  )
}

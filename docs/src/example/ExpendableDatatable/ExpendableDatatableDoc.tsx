import ExpendableDatatable from './ExpendableDatatable'
import * as React from 'react'
import {Page} from 'react-components'
import {Demo} from '../../shared/Demo/Demo'
import preval from 'babel-plugin-preval/macro'

export const ExpendableDatatableDoc = () => {
  return (
    <Page>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./ExpendableDatatable.tsx'), 'utf8')`}
        component={ExpendableDatatable}/>
    </Page>
  )
}

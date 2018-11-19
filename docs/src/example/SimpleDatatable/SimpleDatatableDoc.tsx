import * as React from 'react'
import {Page} from 'react-components'
import preval from 'babel-plugin-preval/macro'
import 'prismjs/themes/prism.css'
import {Demo} from '../../shared/Demo/Demo'
import SimpleDatatable from './SimpleDatatable'

export const SimpleDatatableDoc = () => {
  return (
    <Page>
      <Demo
        raw={preval`module.exports = require('fs').readFileSync(require.resolve('./SimpleDatatable.tsx'), 'utf8')`}
        component={SimpleDatatable}/>
    </Page>
  )
}

import * as React from 'react'
import prism from '../../core/prism'
import classNames from 'classnames'

interface IProps {
  raw: string
  style?: object
  className?: string
}

export const Pre = ({raw, style, className}: IProps) => {
  return (
    <pre className={classNames('language-javascript', className)} style={{whiteSpace: 'pre-wrap', margin: '1em 0', fontSize: 13, borderRadius: 4, ...style}}>
      <code style={{padding: 0}} className="markdown-body"
            dangerouslySetInnerHTML={{__html: prism.highlight(raw, prism.languages.javascript, 'typescript')}}
      />
    </pre>
  )
}

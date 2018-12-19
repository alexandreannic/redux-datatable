import React from 'react'
import prism from 'prismjs'
import 'prismjs/themes/prism.css'

interface IProps {
  raw: string
  style?: object
}

export const Code = ({raw, style}: IProps) => {
  return (
    <pre className="language-javascript" style={{margin: '1em 0', fontSize: 13, borderRadius: 4, ...style}}>
      <code className="markdown-body"
            dangerouslySetInnerHTML={{__html: prism.highlight(raw, prism.languages.javascript, 'typescript')}}
      />
    </pre>
  )
}

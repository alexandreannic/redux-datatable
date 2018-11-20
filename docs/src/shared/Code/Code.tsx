import React from 'react'
import prism from 'prismjs'
import 'prismjs/themes/prism.css'

interface IProps {
  raw: string
}

export const Code = ({raw}: IProps) => {
  return (
    <pre className="language-javascript" style={{margin: 0, fontSize: 13}}>
      <code className="markdown-body"
            dangerouslySetInnerHTML={{__html: prism.highlight(raw, prism.languages.javascript, 'typescript')}}
      />
    </pre>
  )
}

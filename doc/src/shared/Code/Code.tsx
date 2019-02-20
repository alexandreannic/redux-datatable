import * as React from 'react'
import {ReactNode} from 'react'
import {Theme} from '@material-ui/core'
// import {makeStyles} from '@material-ui/styles'

// const useStyles = makeStyles((t: Theme) => ({
//   root: {
//     background: t.palette.background.default,
//     color: t.palette.text.secondary,
//     borderRadius: 3,
//     padding: '.2em .4em',
//   }
// }))

interface IProps {
  children: ReactNode
}

export const Code = ({children}: IProps) => {
  // @ts-ignore
  const classes = {} as any
  return (
    <>
      {' '/*https://github.com/facebook/react/issues/1643*/}
      <code className={classes.root}>{children}</code>
      {' '}
    </>
  )
}

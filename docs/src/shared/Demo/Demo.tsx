// @ts-ignore
import React, {useState} from 'react'
import prism from 'prismjs'
import {Collapse, createStyles, Icon, IconButton, Theme, withStyles, WithStyles} from '@material-ui/core'

const styles = (t: Theme) => createStyles({
  root: {
    boxShadow: t.shadows[1],
    borderRadius: 4,
    background: t.palette.background.default,
    overflow: 'auto',
  },
  head: {
    margin: `${t.spacing.unit}px ${t.spacing.unit* 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  wrapper: {
    margin: t.spacing.unit * 2,
    background: 'white',
  }
})

interface IProps extends WithStyles<typeof styles> {
  component: any
  raw: string
}

export const Demo = withStyles(styles)(({component: Component, raw, classes}: IProps) => {
  const [codeOpened, setCodeOponed] = useState<boolean>(false)
  return (
    <section className={classes.root}>
      <div className={classes.head}>
        <IconButton color={codeOpened ? 'primary' : undefined} onClick={() => setCodeOponed(!codeOpened)}>
          <Icon>code</Icon>
        </IconButton>
      </div>
      <Collapse in={codeOpened} unmountOnExit>
        <pre className="language-javascript" style={{margin: 0, fontSize: 13}}>
          <code className="markdown-body"
                dangerouslySetInnerHTML={{__html: prism.highlight(raw, prism.languages.javascript, 'typescript')}}
          />
        </pre>
      </Collapse>
      <div className={classes.wrapper}>
        <Component/>
      </div>
    </section>
  )
})

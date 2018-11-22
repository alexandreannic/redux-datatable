// @ts-ignore
import React, {useState} from 'react'
import {Collapse, createStyles, Icon, IconButton, Tab, Tabs, Theme, withStyles, WithStyles} from '@material-ui/core'
import {Code} from '../Code/Code'
import SwipeableViews from 'react-swipeable-views'
import {actionCode, parseComponentCode, storeCode} from './demo-snippets'

const styles = (t: Theme) => createStyles({
  root: {
    boxShadow: t.shadows[1],
    borderRadius: 4,
    background: t.palette.background.default,
    overflow: 'auto',
    marginTop: t.spacing.unit * 3,
    marginBottom: t.spacing.unit * 3,
  },
  head: {
    margin: `${t.spacing.unit}px ${t.spacing.unit * 2}px ${t.spacing.unit / 2}px ${t.spacing.unit * 2}px`,
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
  fileName: string
  constName: string
  component: any
  raw: string
}

export const Demo = withStyles(styles)(({component: Component, fileName, constName, raw, classes}: IProps) => {
  const [codeOpened, setCodeOponed] = useState<boolean>(false)
  const [tabIndex, setTabIndex] = useState<number>(0)
  return (
    <section className={classes.root}>
      <div className={classes.head}>
        <IconButton color={codeOpened ? 'primary' : undefined} onClick={() => setCodeOponed(!codeOpened)}>
          <Icon>code</Icon>
        </IconButton>
      </div>
      <Collapse in={codeOpened} unmountOnExit>
        <Tabs value={tabIndex} onChange={(e, i) => setTabIndex(i)} indicatorColor="primary" textColor="primary">
          <Tab label={fileName + '.jsx'}/>
          <Tab label="action.js"/>
          <Tab label="store.js"/>
        </Tabs>
        <SwipeableViews index={tabIndex} onChangeIndex={setTabIndex}>
          <Code raw={parseComponentCode(raw)} style={{margin: 0, borderRadius: 0}}/>
          <Code raw={actionCode(fileName, constName)} style={{margin: 0, borderRadius: 0}}/>
          <Code raw={storeCode(fileName, constName)} style={{margin: 0, borderRadius: 0}}/>
        </SwipeableViews>
      </Collapse>
      <div className={classes.wrapper}>
        <Component/>
      </div>
    </section>
  )
})

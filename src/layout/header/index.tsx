import React from 'react'

import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import Link from 'components/link'

import Logo from './logo'

const useStyles = makeStyles((theme: Theme) => ({
  topSpacer: theme.mixins.toolbar,
}))

export default function Header() {
  const styles = useStyles()

  return (
    <>
      <AppBar elevation={3} color="inherit">
        <Toolbar>
          <Link to="/" color="inherit" underline="none">
            <Box display="flex">
              <Logo />
              <Box mx={2}>
                <Typography variant="h6" component="h1">
                  React Costa Rica
                </Typography>
              </Box>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>

      <div className={styles.topSpacer} />
    </>
  )
}

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { makeStyles } from '@material-ui/core'

import useViewport from 'hooks/viewport'

import Theme from './theme'
import Header from './header'
import Footer from './footer'

interface LayoutProps {
  path: string
  children: React.ReactNode
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    flex: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))

export default function Layout({ path, children }: LayoutProps) {
  const styles = useStyles()
  const { vh } = useViewport()
  const viewportHeight = vh(100)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const headerVariants = {
    hidden: { y: -10 },
    visible: { y: 0 },
  }

  const footerVariants = {
    hidden: { y: 10 },
    visible: { y: 0 },
  }

  return (
    <Theme>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={!viewportHeight ? 'hidden' : 'visible'}
        className={styles.container}
        style={{ minHeight: viewportHeight }}
      >
        <motion.div variants={headerVariants}>
          <Header />
        </motion.div>

        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={path}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={styles.content}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <motion.div variants={footerVariants}>
          <Footer />
        </motion.div>
      </motion.div>
    </Theme>
  )
}

import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const HomePage = () => {
  const classes = useStyles()

  console.log('adwadaw')
  return (
    <div className={classes.root}>
      awdaawd
    </div>
  )
}

const useStyles = makeStyles<Theme>((/* theme */) => ({ root: {} }), { name: 'HomePage' })

export default HomePage

import { CircularProgress, useTheme } from '@mui/material'
import React from 'react'

const Loader = ({color}) => {
  const theme = useTheme();

  return (
    <CircularProgress  sx={{color:color?color:theme.palette.primary.dark}} />
  )
}

export default Loader
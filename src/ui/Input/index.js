import React from 'react'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  root: {
    border: '1px solid #ddd',
    fontSize: 14,
    padding: '6px 15px'
  }
})


const InputComponent = ({ type, onChange, value }) => {
  const classes = useStyles()
  return (
    <input 
    className={classes.root}
    {...{
      value,
      onChange,
      type
    }}/>
  )
}

InputComponent.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
}


export default InputComponent

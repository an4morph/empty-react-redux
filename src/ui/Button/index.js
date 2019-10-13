import React from 'react'
import PropTypes from 'prop-types'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  root: {
    cursor: 'pointer',
    fontSize: 14,
    backgroundColor: '#ddd',
    padding: '7px 25px',
    border: 'none',
    transition: '0.5s',
    '&:hover': {
      transition: '0.5s',
      backgroundColor: '#d5d5d5',
    }
  }
})


const Button = ({ type, onClick, children }) => {
  const classes = useStyles()
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      className={classes.root}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
}


export default Button

import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ type, onClick, children }) => (
  <button
    type={type || 'button'}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
}


export default Button

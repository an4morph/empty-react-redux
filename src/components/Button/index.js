import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'


class Button extends React.Component {
  state = {}

  render() {
    const {
      children, onClick, type, className, icon,
    } = this.props
    return (
      <button
        className={`${className} ${icon ? 'icon' : ''}`}
        type={type || 'button'}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
}


Button.defaultProps = {
  className: '',
}
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.bool,
}


export default Button

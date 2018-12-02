import React from 'react'
import PropTypes from 'prop-types'
import withDevice from '../../deviceWrapper'
import './styles.scss'


class Modal extends React.Component {
  state = {}

  render() {
    const {
      children, show, onClose, className, overlayClassName,
    } = this.props
    return show ? (
      <div
        className={`modal-overlay ${overlayClassName || ''}`}
        onClick={onClose}
      >
        <div className={`modal ${className || ''}`}>
          {children}
        </div>
      </div>
    ) : null
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
}


export default withDevice(Modal)

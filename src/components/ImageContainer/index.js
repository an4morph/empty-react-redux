import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'


class ImageContainer extends React.Component {
  state = {}

  handleClick = () => {
    const { imageUrl, onClick } = this.props
    if (onClick) onClick({ imageUrl })
  }

  render() {
    const {
      imageUrl, className, placeholderUrl, styles,
    } = this.props

    const containerStyles = {
      backgroundImage: `url(${imageUrl || placeholderUrl})`,
      ...styles,
    }

    return (
      <div
        role="presentation"
        className={`image-container ${className}`}
        style={containerStyles}
        onClick={this.handleClick}
      />
    )
  }
}

ImageContainer.defaultProps = {
  imageUrl: '/img/avatar-placeholder.svg',
  className: '',
}
ImageContainer.propTypes = {
  imageUrl: PropTypes.string,
  styles: PropTypes.object,
  className: PropTypes.string,
  placeholderUrl: PropTypes.string,
  onClick: PropTypes.func,
}


export default ImageContainer

import React from 'react'

const MOBILE_WIDTH = 768

const withDevice = WrappedComponent => class DeviceWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth,
    }
  }


  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }


  render() {
    const { width } = this.state
    const isMobile = width <= MOBILE_WIDTH

    return <WrappedComponent {...this.props} isMobile={isMobile} />
  }
}

export default withDevice

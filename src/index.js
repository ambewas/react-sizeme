// import sizeMe from './sizeMe'
import { Component } from 'react'

const sizeMe = () => WrappedComponent => {
  class Enhancer extends Component { // eslint-disable-line
    render() {
      const props = {
        ...this.props,
        size: {},
      }
      return <WrappedComponent {...props} />
    }
  }
  return Enhancer
}
export { sizeMe }

// Backward compat
export default sizeMe

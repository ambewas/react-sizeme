// import sizeMe from './sizeMe'
const sizeMe = () => WrappedComponent => class Enhancer extends Component { // eslint-disable-line
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
export { sizeMe }

// Backward compat
export default sizeMe

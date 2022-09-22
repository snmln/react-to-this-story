import PropTypes from "prop-types"
const css = require('./icon.css')

function Icon({iconName, className}) {
  return (
    <i className={`iconComponent ${iconName} ${className}`}>
    </i>
  )
}

Icon.propTypes = {
  iconName: PropTypes.string,
className: PropTypes.string,

}

export default Icon
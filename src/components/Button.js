import PropTypes from "prop-types"
import Icon from '../components/Icon'
const css = require('./styles/ExitStyles.css')
import './Icon/icon.css'

function Button({ label, buttonColor = "red", size = "md", handleClick, shape = "square", outline = true, iconName}) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "md") scale = 1
  if (size === "lg") scale = 1.5

  let Radius = 5
  if(shape === "square") Radius = 5 
  if(shape === "pill") Radius = 30 

const outlineStyle = {
  padding: `${scale * 0.5}rem ${scale * 1}rem`,
  border: `2px solid ${buttonColor}`,
  borderRadius: `${Radius}px`,
  backgroundColor: 'transparent',
  color: buttonColor,
  fontSize: `${scale * 1}rem`
}

  const style = {
    backgroundColor: buttonColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: `${Radius}px`,
    color: 'white',
    fontSize: `${scale * 1}rem`
  }

  const IconStyle = {
    verticalAlign: 'middle'
  }
  
  return (
    <button onClick={handleClick} style={outline ? outlineStyle :style}>
      {iconName === "settings" ? <Icon iconName={'equalizer'} className='mrm align-middle'/> : null}
        {label}
      {iconName !== "settings" ? <Icon iconName={iconName} className='mlm align-middle'/> : null}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  buttonColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  shape: PropTypes.oneOf(["square", "pill"]),
  outline: PropTypes.bool,
  iconName: PropTypes.oneOf(["arrow-right", "arrow-down", "exit", "settings"])
}

export default Button
import PropTypes from "prop-types"
import Icon from '../components/Icon'
const css = require('./styles/ExitStyles.css')
import './Icon/icon.css'


function Alerts({ label, color, iconName}) {
  
  const style = {
    backgroundColor: `${color}10`,
    color: color,
    padding: '16px',
    border: `1px solid ${color}`,
    borderRadius: "10px",
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, .1)',
    display: 'inline-block',
    width: '100%',
    maxWidth: '900px'
  }
  const exiStyle = {
    display:'inline-block',
  }
  return (
    <div style={style}>
      <div className="cardLabel display-inline" >
      <Icon iconName={iconName} className={'mrm'} />
{label}
</div>
      <div className='display-inline float-right'>
        <Icon iconName={'cross'}  style={exiStyle} />
      </div>
    </div>
  )
}

Alerts.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  iconName: PropTypes.string,
}

export default Alerts
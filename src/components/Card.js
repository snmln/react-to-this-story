import PropTypes from "prop-types"
const css = require('./styles/CardStyles.css')
import Icon from '../components/Icon'
import './styles/ExitStyles.css'
import './Icon/icon.css'


function Card({ label, handleClick, IconBackgroundColor= '#4F72F0', IconName="home", Orientation}) {
  
  const style = {
    padding: '20px',
    border: "none",
    borderRadius: "10px",
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, .25)',
    maxWidth: '300px',
    width: ( Orientation === 'horizantal' ? null : '160px'),
    height: ( Orientation === 'horizantal' ? null : '180px'
    )
  }

  const IconStyle ={
    padding:'10px', 
    width: '50px',
    height: '50px',
    fontSize: '2rem',
    backgroundColor: IconBackgroundColor, 
    display: 'inline', 
    color: '#FFFFFF',
    borderRadius: "10px",
}

const LabelStyle ={
  fontWeight: '700',
  fontSize: '1.25rem',
  paddingBottom: ( Orientation === 'horizantal' ? null : '20px'
  )
}

  return (
    <div className="card relative" onClick={handleClick} style={style}>
      <div style={IconStyle} className="align-middle ">
      <Icon iconName={IconName}/>
      </div>
      <div className={`cardLabel ${Orientation ==='horizantal' ? 'display-inline plm' : 'absolute bottom'}`} style={LabelStyle}>{label}</div>
    </div>
  )
}

Card.propTypes = {
  IconBackgroundColor: PropTypes.string,
  IconName: PropTypes.oneOf(["arrow-right", "arrow-down", "exit", "settings"]),
  label: PropTypes.string,
  handleClick: PropTypes.func,
  Orientation: PropTypes.oneOf(["vertical", "horizantal"])
}

export default Card
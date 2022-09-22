import PropTypes from "prop-types"
import './styles/ProgressIndicator.css'

function ProgressIndicator({ children, spacing = 2, direction = "row", wrap = false }) {

  const style = {
    display: "flex",
    // gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
    justifyContent: 'space-between'
  }

  return <div className={'circle'} style={style}>{children}</div>
}

ProgressIndicator.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(["row", "column"]),
  StepColor: PropTypes.string
}

export default ProgressIndicator
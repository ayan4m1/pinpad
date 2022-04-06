import PropTypes from 'prop-types';

export default function PinFunction({
  x,
  y,
  width,
  height,
  color,
  textColor,
  name
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={0} y={0} width={width} height={height} rx={4} fill={color} />
      <text
        x={width / 2}
        y={10}
        font="DejaVu Sans Mono"
        fontSize="10px"
        fill={textColor}
        style={{ textAnchor: 'middle' }}
      >
        {name}
      </text>
    </g>
  );
}

PinFunction.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

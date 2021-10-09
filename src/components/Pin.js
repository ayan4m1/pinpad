import PropTypes from 'prop-types';

import { SizeType } from 'types/pin';
import { mmToPx } from 'utils/units';

export default function Pin({ index, size }) {
  const { height, width } = size;

  return (
    <g>
      <rect
        x={0}
        y={0}
        height={mmToPx(height)}
        width={mmToPx(width)}
        fill="#FFD700"
        stroke="#262323"
        strokeWidth={2}
      />
      <text x={3} y={10} fontFamily="DejaVu Sans Mono" fontSize="12px">
        {index}
      </text>
    </g>
  );
}

Pin.propTypes = {
  index: PropTypes.number.isRequired,
  size: SizeType.isRequired
};

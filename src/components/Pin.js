import PropTypes from 'prop-types';

import { SizeType } from 'types/pin';
import { mmToPx } from 'utils/units';

export default function Pin({ size }) {
  const { height, width } = size;

  return (
    <rect
      x={0}
      y={0}
      height={mmToPx(height)}
      width={mmToPx(width)}
      fill="#FFD700"
      stroke="#262323"
      strokeWidth={2}
    />
  );
}

Pin.propTypes = {
  index: PropTypes.number.isRequired,
  size: SizeType.isRequired
};

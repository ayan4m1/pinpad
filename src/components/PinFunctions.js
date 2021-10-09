import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { FunctionsType, PositionType } from 'types/pin';
import { getColorForFunction } from 'utils/colors';
import { mmToPx } from 'utils/units';

export default function PinFunctions({
  functions,
  height,
  labelPosition,
  name,
  position
}) {
  return (
    <g transform={`translate(${mmToPx(position.x)} 0)`}>
      <rect width={40} height={height} rx={4} fill="black" />
      <text
        x={20}
        y={10}
        font="DejaVu Sans Mono"
        fontSize="10px"
        fill="white"
        style={{ textAnchor: 'middle' }}
      >
        {name}
      </text>
      {functions.map((fn, i) => {
        let x = 0,
          y = 0;

        switch (labelPosition) {
          case 'left':
            x -= 40 * (i + 1);
            break;
          case 'right':
            x += 40 * (i + 1);
            break;
          case 'top':
            y -= 40 * (i + 1);
            break;
          case 'bottom':
            y += 40 * (i + 1);
            break;
        }

        const color = getColorForFunction(fn.toUpperCase());
        let textColor = '#000000';

        if (color === '#000000') {
          textColor = '#ffffff';
        }

        return (
          <Fragment key={i}>
            <rect x={x} y={y} width={40} height={height} rx={4} fill={color} />
            <text
              x={x + 20}
              y={y + 10}
              font="DejaVu Sans Mono"
              fontSize="10px"
              fill={textColor}
              style={{ textAnchor: 'middle' }}
            >
              {fn.toUpperCase()}
            </text>
          </Fragment>
        );
      })}
    </g>
  );
}

PinFunctions.propTypes = {
  functions: FunctionsType.isRequired,
  height: PropTypes.number.isRequired,
  labelPosition: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PositionType.isRequired
};

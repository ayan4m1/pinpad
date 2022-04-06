import PropTypes from 'prop-types';

import { FunctionsType, PositionType } from 'types/pin';
import { getColorForFunction } from 'utils/colors';
import { useTextWidth } from 'utils/units';
import PinFunction from './PinFunction';

export default function PinFunctions({
  functions,
  height,
  labelPosition,
  name
}) {
  const omitName =
    functions.length === 1 && functions[0].toLowerCase() === name.toLowerCase();
  const nameWidth = useTextWidth(name) + 4;

  let nameX = 0,
    offset = 0;

  switch (labelPosition) {
    case 'left':
      nameX = -nameWidth - 12;
      break;
    case 'right':
      nameX = nameWidth / 2 + 6;
      break;
  }

  if (!omitName) {
    offset += nameWidth + 12;
  } else {
    offset += 12;
  }

  return (
    <g transform={`translate(0 0)`}>
      {!omitName && (
        <PinFunction
          x={nameX}
          y={0}
          width={nameWidth}
          height={height}
          color="#dbebf9"
          textColor="black"
          name={name}
        />
      )}
      {functions.map((fn, i) => {
        let x = 0,
          y = 0,
          width = 40;

        const functionName = fn.toUpperCase();
        width = useTextWidth(functionName) + 4;

        const offsetIndex = omitName ? i : i + 1;
        switch (labelPosition) {
          case 'left':
            offset += width;
            x -= offset;
            break;
          case 'right':
            offset += width / 2;
            x += offset;
            break;
          case 'top':
            y -= height * offsetIndex;
            break;
          case 'bottom':
            y += height * offsetIndex;
            break;
        }

        const color = getColorForFunction(functionName);
        let textColor = '#000000';

        if (color === '#000000') {
          textColor = '#ffffff';
        }

        return (
          <PinFunction
            key={i}
            x={x}
            y={y}
            height={height}
            width={width}
            color={color}
            textColor={textColor}
            name={functionName}
          />
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

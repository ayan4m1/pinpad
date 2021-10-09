import PropTypes from 'prop-types';

import Pin from 'components/Pin';
import PinFunctions from 'components/PinFunctions';
import { PositionType, SizeType } from 'types/pin';
import { mmToPx, pxToMm } from 'utils/units';

export default function PinRow({
  orientation,
  labelPosition,
  pins,
  pinSize,
  pitch,
  position
}) {
  return (
    <g transform={`translate(${mmToPx(position.x)} ${mmToPx(position.y)})`}>
      {pins.map((pin) => {
        const pinPos = {
          x: orientation === 'horizontal' ? pin.position * pitch : 0,
          y: orientation === 'vertical' ? pin.position * pitch : 0
        };
        const functionPos = {
          x: pinPos.x,
          y: pinPos.y
        };
        const linePos = {
          x1: pinSize.width,
          y1: pinSize.height / 2,
          x2: pinSize.width,
          y2: pinSize.height / 2
        };

        switch (labelPosition) {
          case 'left':
            functionPos.x -= pxToMm(50);
            linePos.x1 *= -1;
            linePos.x2 = 0;
            break;
          case 'right':
            functionPos.x += pxToMm(22);
            linePos.x2 += pinSize.width;
            break;
          case 'top':
            functionPos.y -= pxToMm(12);
            linePos.y1 *= -1;
            linePos.y2 = 0;
            break;
          case 'bottom':
            functionPos.y += pxToMm(12);
            linePos.y2 += pinSize.height;
            break;
        }

        return (
          <g
            key={pin.id}
            transform={`translate(${mmToPx(pinPos.x)} ${mmToPx(pinPos.y)})`}
          >
            <Pin index={pin.position} size={pinSize} />
            <line
              x1={mmToPx(linePos.x1)}
              x2={mmToPx(linePos.x2)}
              y1={mmToPx(linePos.y1)}
              y2={mmToPx(linePos.y2)}
              stroke="red"
            />
            <PinFunctions
              labelPosition={labelPosition}
              height={mmToPx(pinSize.height)}
              position={functionPos}
              name={pin.name}
              functions={pin.functions}
            />
          </g>
        );
      })}
    </g>
  );
}

PinRow.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
  labelPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  pins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      position: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  pitch: PropTypes.number.isRequired,
  position: PositionType.isRequired,
  pinSize: SizeType.isRequired
};

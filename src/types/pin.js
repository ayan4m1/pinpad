import PropTypes from 'prop-types';

export const PositionType = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
});

export const SizeType = PropTypes.shape({
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
});

export const FunctionsType = PropTypes.arrayOf(PropTypes.string.isRequired);

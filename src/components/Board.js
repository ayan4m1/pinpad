import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';

import Layout from 'components/Layout';
import PinRow from 'components/PinRow';
import { mmToPx } from 'utils/units';
import { centerPoint } from 'utils/translate';

export default function Board({ data }) {
  const { color, name, manufacturer, pinRows, size } = data.boardsJson;

  const paddingTop = 40;
  const paddingLeft = 240;
  const [height, width] = [mmToPx(size.height), mmToPx(size.width)];
  const [containerHeight, containerWidth] = [
    paddingTop * 2 + height,
    paddingLeft * 2 + width
  ];
  const { y: offsetTop, x: offsetLeft } = centerPoint(
    containerWidth,
    containerHeight,
    width,
    height
  );

  return (
    <Layout title={`${manufacturer} ${name}`}>
      <h1>
        {manufacturer} {name}
      </h1>
      <Row className="justify-content-center pp-board">
        <Col md={6}>
          <svg height={containerHeight} width={containerWidth}>
            <g transform={`translate(${offsetLeft} ${offsetTop})`}>
              <rect
                fill={color}
                strokeWidth="4"
                stroke="#666"
                height={height}
                width={width}
              />
              {pinRows.map((pinRow) => (
                <PinRow key={pinRow.name} {...pinRow} pinSize={pinRow.size} />
              ))}
            </g>
          </svg>
        </Col>
      </Row>
    </Layout>
  );
}

Board.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
  query ($manufacturer: String!, $name: String!) {
    boardsJson(manufacturer: { eq: $manufacturer }, name: { eq: $name }) {
      color
      manufacturer
      name
      pinRows {
        name
        orientation
        labelPosition
        position {
          x
          y
        }
        size {
          height
          width
        }
        pitch
        pins {
          functions
          id
          name
          position
        }
      }
      size {
        height
        width
      }
    }
  }
`;

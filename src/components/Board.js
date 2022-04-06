import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';

import Layout from 'components/Layout';
import PinRow from 'components/PinRow';
import { mmToPx } from 'utils/units';
import { centerPoint } from 'utils/translate';

export default function Board({ data }) {
  const { image: bgImage, name, manufacturer, pinRows, size } = data.boardsJson;
  const images = data.allFile.nodes;
  const image = images.find((image) =>
    image.relativePath.endsWith(bgImage.substring(bgImage.lastIndexOf('/') + 1))
  ).publicURL;
  const paddingTop = 20;
  const paddingLeft = 200;
  const [height, width] = [
    mmToPx(size.height) * size.scale,
    mmToPx(size.width) * size.scale
  ];
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
          <svg
            height={containerHeight}
            width={containerWidth}
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: `${offsetLeft}px ${offsetTop}px`,
              backgroundSize: `${width}px ${height}px`
            }}
          >
            <g
              transform={`translate(${offsetLeft} ${offsetTop}) scale(${size.scale} ${size.scale})`}
            >
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
    allFile {
      nodes {
        publicURL
        relativePath
      }
    }

    boardsJson(manufacturer: { eq: $manufacturer }, name: { eq: $name }) {
      color
      image
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
        scale
      }
    }
  }
`;

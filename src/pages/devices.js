import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import Layout from 'components/Layout';
import { getDevicePath } from 'utils/slug';

export default function Devices({ data }) {
  const devices = data.allBoardsJson.edges;

  return (
    <Layout>
      <h1>Devices</h1>
      <ListGroup>
        {devices.map(({ node: device }) => (
          <ListGroupItem key={`${device.manufacturer}-${device.name}`}>
            <Link to={getDevicePath(device)}>{device.name}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Layout>
  );
}

Devices.propTypes = {
  data: PropTypes.object
};

export const pageQuery = graphql`
  query {
    allBoardsJson {
      edges {
        node {
          manufacturer
          name
        }
      }
    }
  }
`;

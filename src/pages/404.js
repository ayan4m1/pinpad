import { Container, Row, Col } from 'react-bootstrap';

import Layout from 'components/Layout';

export default function NotFoundPage() {
  return (
    <Layout title="Not Found">
      <Container>
        <Row>
          <Col md="12">
            <h1>Not Found</h1>
            <p>Sorry, this URL is not valid.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

import { Link } from 'gatsby';
import { format } from 'date-fns';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBill,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = format(Date.now(), 'yyyy');

  return (
    <footer className="my-md-4 pt-md-4 border-top pp-footer m-auto">
      <Container>
        <Row>
          <Col md={9}>
            <Button as={Link} variant="info" to="/about" className="me-2">
              <FontAwesomeIcon icon={faQuestionCircle} /> About
            </Button>
            <Button as={Link} variant="success" to="/donate" className="me-2">
              <FontAwesomeIcon icon={faMoneyBill} /> Donate
            </Button>
            <Button
              href="https://github.com/ayan4m1/pinpad"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </Button>
            <ul className="list-unstyled text-small text-center">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Col>
          <Col md={3} className="text-center">
            Copyright &copy; {currentYear} pinpad.cc
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

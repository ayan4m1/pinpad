import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { Helmet } from 'react-helmet';

export default function Layout({ children, title }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Helmet titleTemplate="Pinpad :: %s" title={title} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container className="mt-4">{children}</Container>
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

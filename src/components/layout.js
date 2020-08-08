import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../scss/bootstrap.scss'

const Layout = ({ siteTitle, pageTitle, hideNavbar, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            meta {
              description
              keywords
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={
            (pageTitle ? pageTitle + ' - ' : '') + data.site.siteMetadata.title
          }
          meta={Object.entries(
            data.site.siteMetadata.meta
          ).map(([name, content]) => ({ name, content }))}
        >
          <html lang="en" />
        </Helmet>
        {!hideNavbar && (
          <Header siteTitle={siteTitle || data.site.siteMetadata.title} />
        )}
        <section className="container-fluid">{children}</section>
        <footer className="container-fluid text-center">
          <hr className="mt-5" />
          <p>
            <small>
              Copyright &copy; 2020 by Richard Joseph Barber. All Rights
              Reserved.
            </small>
          </p>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

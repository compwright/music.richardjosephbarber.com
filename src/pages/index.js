import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout hideNavbar>
    <aside className="text-center mt-5 mb-5">
      <Image className="rounded mb-3" />
      <h1 className="display-4">Music by Richard Joseph Barber</h1>
      <p className="lead">
        Complete index of works for choir, solo, and instrumental performance
      </p>
    </aside>

    <section className="my-5">
      <nav className="text-center mb-5">
        <ul className="nav justify-content-center flex-column flex-sm-row">
          <li className="nav-item">
            <Link className="nav-link m-2 btn btn-link" to="/songs">
              Browse Songs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link m-2 btn btn-outline-primary"
              to="/songs/categories"
            >
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link m-2 btn btn-outline-primary"
              to="/songs/occasions"
            >
              Occasions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link m-2 btn btn-outline-primary"
              to="/songs/vocal"
            >
              Vocal
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link m-2 btn btn-outline-primary"
              to="/songs/instrumental"
            >
              Instrumental
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link m-2 btn btn-outline-primary"
              to="/songs/alphabetical"
            >
              Alphabetical
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link m-2 btn btn-outline-primary"
              to="/songs/chronological"
            >
              Chronological
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  </Layout>
)

export default IndexPage

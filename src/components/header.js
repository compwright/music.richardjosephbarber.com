import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      {siteTitle && (
        <Link className="px-2 navbar-brand" to="/">
          <b>{siteTitle}</b>
        </Link>
      )}

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassName="active"
              to="/songs/categories"
            >
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassName="active"
              to="/songs/occasions"
            >
              Occasions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassName="active"
              to="/songs/vocal"
            >
              Vocal
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassName="active"
              to="/songs/instrumental"
            >
              Instrumental
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassName="active"
              to="/songs/alphabetical"
            >
              Alphabetical
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClassName="active"
              to="/songs/chronological"
            >
              Chronological
            </Link>
          </li>
        </ul>
        {/*
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        */}
      </div>
    </nav>
  </header>
)

export default Header

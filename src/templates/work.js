import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Authorship from '../components/authorship'
import DetailsList from '../components/details'
import Copyright from '../components/copyright'
import Links from '../components/links'
import RecordingEmbed from '../components/recording'

export const pageQuery = graphql`
  query($id: Int) {
    airtable(table: { eq: "Compositions" }, data: { Number: { eq: $id } }) {
      data {
        Title
        Category
        Occasion
        Words
        Scripture
        Music
        Arrangement
        Voices
        Accompaniment
        Difficulty
        Dedication
        Copyright_Year
        Copyright_Owner
        Type
        Instruments
        Key
        Publications {
          data {
            Distributor
            URL
          }
        }
        Recordings {
          data {
            ID
            Type
            URL
          }
        }
      }
    }
  }
`

const DetailPage = ({
  pageContext: { id },
  data: {
    airtable: {
      data: {
        Title,
        Category,
        Occasion,
        Words,
        Scripture,
        Music,
        Arrangement,
        Voices,
        Accompaniment,
        Difficulty,
        Dedication,
        Copyright_Year,
        Copyright_Owner,
        Type,
        Instruments,
        Key,
        Publications,
        Recordings,
      },
    },
  },
}) => (
  <Layout pageTitle={Title}>
    <h1 className="display-3 mt-5">{Title}</h1>

    <ul className="breadcrumb">
      {Difficulty && <li className="breadcrumb-item">{Difficulty}</li>}

      <li className="breadcrumb-item">
        {Type === 'Instrumental' && [
          <Links to="/songs/instrumental" items={Instruments} />,
          ' ',
          Voices,
        ]}
        {Type === 'Vocal' && <Links to="/songs/vocal" items={[Voices]} />}
      </li>

      {Occasion && (
        <li className="breadcrumb-item">
          <Links to="/songs/occasions" items={Occasion} />
        </li>
      )}
    </ul>

    <p className="lead">
      <Authorship
        Words={Words}
        Scripture={Scripture}
        Music={Music}
        Arrangement={Arrangement}
      />
    </p>

    {Recordings &&
      Recordings.find(({ data }) => data.Type === 'SoundCloud') && (
        <RecordingEmbed
          {...Recordings.find(({ data }) => data.Type === 'SoundCloud').data}
          className="my-3"
          style={{ maxWidth: '600px' }}
        />
      )}

    <nav className="mb-4">
      {/*
      <div className="mr-2 btn btn-primary btn-soundcloud">
        <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522423084&color=%23a8a8a8&inverse=true&auto_play=false&show_user=false"></iframe>
      </div>
      */}
      {(Publications || []).map(({ data }, i) => (
        <a
          key={i}
          href={data.URL}
          target="_blank"
          className="btn btn-primary mr-2"
        >
          Buy at {data.Distributor}
        </a>
      ))}
    </nav>

    {Dedication && (
      <Fragment>
        <h2>Dedication</h2>
        <p>
          <i>{Dedication}</i>
        </p>
      </Fragment>
    )}

    {/*
    <h2>Description</h2>
    <p>...</p>

    <h2>Words</h2>
    <blockquote className="blockquote">
      <pre>{`In the bleak mid-winter
Frosty wind made moan;
Earth stood hard as iron,
Water like a stone;
Snow had fallen, snow on snow,
Snow on snow,
In the bleak mid-winter
Long ago.

Our God, heaven cannot hold Him
Nor earth sustain,
Heaven and earth shall flee away
When He comes to reign:
In the bleak mid-winter
A stable-place sufficed
The Lord God Almighty —
Jesus Christ.`}</pre>
      <footer className="blockquote-footer">
        Richard Joseph Barber, copyright &copy; 2008
      </footer>
    </blockquote>
*/}

    <h2>Details</h2>
    <DetailsList
      items={{
        Words: Scripture || Words,
        Music,
        Composed: Copyright_Year && (
          <Link
            to={`/songs/chronological#${encodeURIComponent(Copyright_Year)}`}
          >
            {Copyright_Year}
          </Link>
        ),
        Category: Category && <Links to="/songs/categories" items={Category} />,
        Type,
        Voices: Voices && <Links to="/songs/vocal" items={[Voices]} />,
        Instruments: Instruments && (
          <Links to="/songs/instrumental" items={Instruments} />
        ),
        Accompaniment,
        Difficulty,
        Key,
        Copyright: Copyright_Owner && Copyright_Year && (
          <Copyright holder={Copyright_Owner} year={Copyright_Year} />
        ),
      }}
    />

    {/*
    <h2>Reviews</h2>
    <p>There are no reviews yet.</p>
    
    <h2>Recordings</h2>
    <p>There are no recordings yet.</p>
*/}
  </Layout>
)

export default DetailPage

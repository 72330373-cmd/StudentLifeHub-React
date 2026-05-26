import { Link } from 'react-router-dom'

function Home() {

  return (

    <div>

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="container text-center">

          <h1 className="main-title">
            Student Life Hub
          </h1>

          <p className="main-subtitle">
            Modern Student Management Platform
          </p>

          <Link
            to="/dashboard"
            className="btn btn-light btn-lg mt-4"
          >
            Explore Dashboard
          </Link>

        </div>

      </section>

      {/* PAGES SECTION */}

      <section className="main-section container">

        <h1 className="section-title">
          Explore The Platform
        </h1>

        {/* ABOUT */}

        <Link
          to="/about"
          className="page-link-card"
        >

          <div className="feature-card">

            <h2>
              📘 About
            </h2>

            <p>
              Learn more about the platform,
              goals, and technologies used.
            </p>

          </div>

        </Link>

        {/* EVENTS */}

        <Link
          to="/events"
          className="page-link-card"
        >

          <div className="feature-card">

            <h2>
              📅 Events
            </h2>

            <p>
              Register for events and
              explore university activities.
            </p>

          </div>

        </Link>

        {/* DASHBOARD */}

        <Link
          to="/dashboard"
          className="page-link-card"
        >

          <div className="feature-card">

            <h2>
              📊 Dashboard
            </h2>

            <p>
              Track completed tasks,
              productivity, and schedules.
            </p>

          </div>

        </Link>

        {/* STUDY */}

        <Link
          to="/study"
          className="page-link-card"
        >

          <div className="feature-card">

            <h2>
              📚 Study
            </h2>

            <p>
              Manage study tasks, assignments,
              and improve productivity.
            </p>

          </div>

        </Link>

        {/* CONTACT */}

        <Link
          to="/contact"
          className="page-link-card"
        >

          <div className="feature-card">

            <h2>
              📩 Contact
            </h2>

            <p>
              Send messages and communicate
              with administration.
            </p>

          </div>

        </Link>

      </section>

    </div>

  )
}

export default Home
function Events() {

  const events = [

    {
      title: 'React Workshop',
      date: 'June 5, 2026'
    },

    {
      title: 'Cyber Security Seminar',
      date: 'June 12, 2026'
    },

    {
      title: 'Career Fair',
      date: 'June 20, 2026'
    }
  ]

  return (
    <div className="container py-5">

      <h2 className="text-center mb-5">
        Upcoming Events
      </h2>

      <div className="row">

        {events.map((event, index) => (

          <div className="col-md-4 mb-4" key={index}>

            <div className="event-card">

              <h4>{event.title}</h4>

              <p>{event.date}</p>

              <button className="btn btn-outline-primary">
                Register
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Events
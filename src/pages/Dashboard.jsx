function Dashboard() {

  return (
    <div className="container py-5">

      <h1 className="mb-5">
        Student Dashboard
      </h1>

      <div className="feature-card mb-4">
        <h3>📚 Tasks Completed</h3>
        <p>12 Tasks</p>
      </div>

      <div className="feature-card mb-4">
        <h3>📅 Upcoming Events</h3>
        <p>3 Events</p>
      </div>

      <div className="feature-card">
        <h3>⭐ Productivity Score</h3>
        <p>85%</p>
      </div>

    </div>
  )
}

export default Dashboard
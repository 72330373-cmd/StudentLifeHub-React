function Contact() {

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">
        Contact Us
      </h2>

      <div className="contact-box">

        <form>

          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="form-control mb-3"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="form-control mb-3"
          ></textarea>

          <button className="btn btn-success w-100">
            Send Message
          </button>

        </form>

      </div>

    </div>
  )
}

export default Contact
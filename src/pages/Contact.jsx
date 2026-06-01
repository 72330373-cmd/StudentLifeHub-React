import { useState } from "react";

function Contact() {

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    setSent(true); // show "Done"
  };

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">
        Contact Us
      </h2>

      <div className="contact-box">

        <form onSubmit={handleSubmit}>

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

          <button type="submit" className="btn btn-success w-100">
            Send Message
          </button>

        </form>

        {sent && (
          <p className="text-success text-center mt-3">
            Done ✔ Message sent
          </p>
        )}

      </div>

    </div>
  );
}

export default Contact;
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: '#2487ce' }}>Contact</h2>
          <p className="text-muted">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="row gy-4">
          {/* Left Side: Contact Info */}
          <div className="col-lg-5">
            <div className="p-4 shadow-sm rounded h-100 bg-light">
              
              <div className="mb-4 d-flex align-items-start gap-3">
                <div className="icon-box text-primary fs-4 bg-white p-3 rounded-circle shadow-sm">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Address</h5>
                  <p className="text-muted mb-0">A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start gap-3">
                <div className="icon-box text-primary fs-4 bg-white p-3 rounded-circle shadow-sm">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email Us</h5>
                  <p className="text-muted mb-0">info@example.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="icon-box text-primary fs-4 bg-white p-3 rounded-circle shadow-sm">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Call Us</h5>
                  <p className="text-muted mb-0">+1 5589 55488 55</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-lg-7">
            <div className="p-4 shadow-sm rounded bg-light h-100">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control py-2" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control py-2" placeholder="Your Email" required />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control py-2" placeholder="Subject" required />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-primary px-4 py-2 rounded-pill text-white" style={{ backgroundColor: '#2487ce', border: 'none' }}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
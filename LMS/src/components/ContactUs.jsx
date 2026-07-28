import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="container mt-4">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold text-dark mb-2">Get in Touch</h2>
        <p className="text-muted fs-5">Have questions or need support with the Library Management System?</p>
      </div>

      <div className="row g-4 justify-content-center">
        {/* Contact Info Cards */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm p-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', fontSize: '20px' }}>
                📍
              </div>
              <div>
                <h6 className="fw-bold mb-0">Library Address</h6>
                <small className="text-muted">Central Library Campus, University Road</small>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm p-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', fontSize: '20px' }}>
                📧
              </div>
              <div>
                <h6 className="fw-bold mb-0">Email Us</h6>
                <small className="text-muted">support@librarymanagement.com</small>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm p-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '45px', height: '45px', fontSize: '20px' }}>
                📞
              </div>
              <div>
                <h6 className="fw-bold mb-0">Call Us</h6>
                <small className="text-muted">+1 (555) 019-2834 / +1 (555) 012-9988</small>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm p-4">
            <div className="card-body">
              <h4 className="fw-bold mb-4">Send Us a Message</h4>

              {submitted ? (
                <div className="alert alert-success p-4 text-center role='alert'">
                  <h5 className="alert-heading fw-bold">Thank You!</h5>
                  <p className="mb-0">Your message has been sent successfully. Our library administration team will respond within 24 hours.</p>
                  <button className="btn btn-outline-success mt-3 btn-sm" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Inquiry / Feedback / Technical Support"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-success px-4 py-2 fw-semibold">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

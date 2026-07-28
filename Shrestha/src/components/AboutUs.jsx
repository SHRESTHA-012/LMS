import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mt-4">
      {/* Hero Banner */}
      <div className="p-5 mb-4 rounded-3 text-white" style={{ background: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)' }}>
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold mb-3">About LibraryManagement</h1>
          <p className="col-md-9 fs-5">
            Empowering students, educators, and librarians with an all-in-one digital library management suite designed for seamless resource sharing, circulation, and learning.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm p-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <span className="badge bg-success p-2 me-3 fs-6">🎯 Our Mission</span>
              </div>
              <h4 className="fw-bold mb-3">Accessible Knowledge for Everyone</h4>
              <p className="text-muted">
                To simplify library management by providing clean, fast, and automated systems for tracking books, periodicals, membership details, and borrowing activities across academic and public libraries.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm p-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <span className="badge bg-primary p-2 me-3 fs-6">🌟 Our Vision</span>
              </div>
              <h4 className="fw-bold mb-3">Modernizing Library Infrastructures</h4>
              <p className="text-muted">
                Transforming traditional libraries into smart digital hubs with real-time analytics, instant search, search & pagination, and complete record automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Stats */}
      <div className="row text-center g-4 mb-5">
        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h2 className="display-6 fw-bold text-success mb-1">10,000+</h2>
            <p className="text-muted small mb-0">Cataloged Books</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h2 className="display-6 fw-bold text-primary mb-1">2,500+</h2>
            <p className="text-muted small mb-0">Registered Students</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h2 className="display-6 fw-bold text-warning mb-1">50+</h2>
            <p className="text-muted small mb-0">Newspapers & Magazines</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h2 className="display-6 fw-bold text-info mb-1">99.9%</h2>
            <p className="text-muted small mb-0">Uptime & Reliability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

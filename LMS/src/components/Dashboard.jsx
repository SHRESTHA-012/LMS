import React from 'react';

export default function Dashboard({ totalStudents, totalBooks, totalLibrarians, totalBorrowings, loginMessage, onClearMessage }) {
  return (
    <div className="container mt-5">
      {loginMessage && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          {loginMessage}
          <button 
            type="button" 
            className="btn-close" 
            onClick={onClearMessage} 
            aria-label="Close"
          ></button>
        </div>
      )}

      {/* Header Title */}
      <div className="row mb-4">
        <div className="col-12 text-center text-md-start">
          <h2 className="fw-bold border-bottom pb-2 text-dark">Admin Dashboard</h2>
        </div>
      </div>

      {/* Dashboard Stat Cards Grid */}
      <div className="row g-4">
        {/* Total Students */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm text-white" style={{ backgroundColor: '#4e73df' }}>
            <div className="card-body d-flex flex-column justify-content-between p-4">
              <div>
                <h6 className="text-uppercase fw-semibold opacity-75 mb-1">Total Students</h6>
                <h2 className="display-6 fw-bold mb-0">{totalStudents}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Total Books */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm text-white" style={{ backgroundColor: '#1cc88a' }}>
            <div className="card-body d-flex flex-column justify-content-between p-4">
              <div>
                <h6 className="text-uppercase fw-semibold opacity-75 mb-1">Total Books</h6>
                <h2 className="display-6 fw-bold mb-0">{totalBooks}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Total Librarians */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm text-white" style={{ backgroundColor: '#36b9cc' }}>
            <div className="card-body d-flex flex-column justify-content-between p-4">
              <div>
                <h6 className="text-uppercase fw-semibold opacity-75 mb-1">Total Librarians</h6>
                <h2 className="display-6 fw-bold mb-0">{totalLibrarians}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Total Borrowings */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 border-0 shadow-sm text-white" style={{ backgroundColor: '#f6c23e' }}>
            <div className="card-body d-flex flex-column justify-content-between p-4">
              <div>
                <h6 className="text-uppercase fw-semibold opacity-75 mb-1">Total Borrowings</h6>
                <h2 className="display-6 fw-bold mb-0">{totalBorrowings}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

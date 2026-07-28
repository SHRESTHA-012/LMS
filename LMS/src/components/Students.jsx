import React, { useState } from 'react';

export default function Students({ students, onAddStudent, onEditStudent, onDeleteStudent }) {
  const [view, setView] = useState('list'); // 'list' | 'create' | 'edit'
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Form State
  const [formData, setFormData] = useState({ id: null, studentId: '', studentName: '', email: '', phone: '', gender: 'Male', address: '' });

  const handleOpenCreate = () => {
    setFormData({ id: null, studentId: '', studentName: '', email: '', phone: '', gender: 'Male', address: '' });
    setView('create');
  };

  const handleOpenEdit = (student) => {
    setFormData(student);
    setView('edit');
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.studentName.trim() || 
        !formData.email || !formData.email.trim() || 
        !formData.phone || !formData.phone.trim()) {
      alert('All fields are required: StudentName, Email, and Phone.');
      return;
    }
    onAddStudent({
      ...formData,
      id: Date.now(),
      studentId: students.length > 0 ? Math.max(...students.map(s => Number(s.studentId || s.id) || 0)) + 1 : 1
    });
    setView('list');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.studentName.trim() || 
        !formData.email || !formData.email.trim() || 
        !formData.phone || !formData.phone.trim()) {
      alert('All fields are required: StudentName, Email, and Phone.');
      return;
    }
    onEditStudent(formData);
    setView('list');
  };

  // Search & Pagination Logic
  const filteredStudents = students.filter(
    (s) =>
      (s.studentName && s.studentName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (s.email && s.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (s.phone && String(s.phone).includes(searchTerm))
  );

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {view === 'list' && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button className="btn btn-primary" onClick={handleOpenCreate}>
              Add New Student
            </button>
            <div style={{ width: '280px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <table className="table table-bordered mt-3 align-middle">
            <thead className="table-light">
              <tr>
                <th>StudentID</th>
                <th>StudentName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedStudents.length > 0 ? (
                paginatedStudents.map((item) => (
                  <tr key={item.id || item.studentId}>
                    <td>{item.studentId || item.id}</td>
                    <td>{item.studentName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => handleOpenEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          if (window.confirm('Are you sure?')) {
                            onDeleteStudent(item.id || item.studentId);
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-muted">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="text-muted small">
                Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredStudents.length)} to {Math.min(currentPage * itemsPerPage, filteredStudents.length)} of {filteredStudents.length} students
              </span>
              <div>
                <button
                  className="btn btn-outline-secondary btn-sm me-1"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => prev - 1)}
                >
                  Previous
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* CREATE VIEW */}
      {view === 'create' && (
        <div>
          <h2>Add Student</h2>
          <form onSubmit={handleCreateSubmit}>
            <div className="mb-3">
              <label className="form-label">StudentName</label>
              <input
                type="text"
                name="StudentName"
                className="form-control"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="Email"
                className="form-control"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="Phone"
                className="form-control"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-success me-2">Add</button>
            <button type="button" className="btn btn-secondary" onClick={() => setView('list')}>Cancel</button>
          </form>
        </div>
      )}

      {/* EDIT VIEW */}
      {view === 'edit' && (
        <div>
          <h2>Edit Student</h2>
          <form onSubmit={handleEditSubmit}>
            <input type="hidden" name="StudentId" value={formData.studentId || formData.id || ''} />
            <div className="mb-3">
              <label className="form-label">StudentName</label>
              <input
                type="text"
                name="StudentName"
                className="form-control"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="Email"
                className="form-control"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="Phone"
                className="form-control"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary me-2">Update</button>
            <button type="button" className="btn btn-secondary" onClick={() => setView('list')}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

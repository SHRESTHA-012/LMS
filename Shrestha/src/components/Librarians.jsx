import React, { useState } from 'react';

export default function Librarians({ librarians, onAddLibrarian, onEditLibrarian, onDeleteLibrarian }) {
  const [view, setView] = useState('list'); // 'list' | 'create' | 'edit'
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Form State
  const [formData, setFormData] = useState({ id: null, librarianId: '', name: '', age: '', phone: '' });

  const handleOpenCreate = () => {
    setFormData({ id: null, librarianId: '', name: '', age: '', phone: '' });
    setView('create');
  };

  const handleOpenEdit = (librarian) => {
    setFormData(librarian);
    setView('edit');
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.age || !formData.phone.trim()) {
      alert('All fields are required: Name, Age, Phone.');
      return;
    }
    onAddLibrarian({
      ...formData,
      id: Date.now(),
      librarianId: librarians.length > 0 ? Math.max(...librarians.map(l => l.librarianId || l.id)) + 1 : 1,
      age: Number(formData.age)
    });
    setView('list');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.age || !formData.phone.trim()) {
      alert('All fields are required: Name, Age, Phone.');
      return;
    }
    onEditLibrarian({
      ...formData,
      age: Number(formData.age)
    });
    setView('list');
  };

  // Search & Pagination Logic
  const filteredLibrarians = librarians.filter(
    (l) =>
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.phone.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredLibrarians.length / itemsPerPage) || 1;
  const paginatedLibrarians = filteredLibrarians.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {view === 'list' && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button className="btn btn-primary" onClick={handleOpenCreate}>
              Add New Librarian
            </button>
            <div style={{ width: '280px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search librarians..."
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
                <th>LibrarianID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedLibrarians.length > 0 ? (
                paginatedLibrarians.map((item) => (
                  <tr key={item.id || item.librarianId}>
                    <td>{item.librarianId || item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
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
                            onDeleteLibrarian(item.id || item.librarianId);
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
                    No librarians found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="text-muted small">
                Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredLibrarians.length)} to {Math.min(currentPage * itemsPerPage, filteredLibrarians.length)} of {filteredLibrarians.length} librarians
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
          <h2>Add Librarian</h2>
          <form onSubmit={handleCreateSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="Name"
                className="form-control"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="Age"
                className="form-control"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
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
          <h2>Edit Library</h2>
          <form onSubmit={handleEditSubmit}>
            <input type="hidden" name="LibrarianId" value={formData.librarianId || formData.id || ''} />
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="Name"
                className="form-control"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="Age"
                className="form-control"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
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

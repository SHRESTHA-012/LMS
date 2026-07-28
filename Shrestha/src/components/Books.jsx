import React, { useState } from 'react';

export default function Books({ books, onAddBook, onEditBook, onDeleteBook, onToggleBorrow }) {
  const [view, setView] = useState('list'); // 'list' | 'create' | 'edit' | 'details'
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [formData, setFormData] = useState({ id: null, title: '', author: '', isbn: '978-0201616224', publishedDate: '2026-07-27', availability: 'Available' });

  const handleOpenCreate = () => {
    setFormData({ id: Date.now(), title: '', author: '', isbn: '978-0201616224', publishedDate: '2026-07-27', availability: 'Available' });
    setView('create');
  };

  const handleOpenEdit = (book) => {
    setFormData(book);
    setView('edit');
  };

  const handleOpenDetails = (book) => {
    setSelectedBook(book);
    setView('details');
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.author.trim()) {
      alert('Title and Author are required.');
      return;
    }
    onAddBook(formData);
    setView('list');
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.author.trim()) {
      alert('Title and Author are required.');
      return;
    }
    onEditBook(formData);
    setView('list');
  };

  // Search & Pagination
  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.isbn.includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage) || 1;
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <h2 className="fw-bold mb-3">Books List</h2>

      {view === 'list' && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button className="btn btn-primary" onClick={handleOpenCreate}>
              Add New Book
            </button>
            <div style={{ width: '280px' }}>
              <input
                type="text"
                className="form-control"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>

          <table className="table table-bordered align-middle mt-3">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>Published Date</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedBooks.length > 0 ? (
                paginatedBooks.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.isbn}</td>
                    <td>{item.publishedDate}</td>
                    <td>
                      <span className={`badge ${item.availability === 'Available' ? 'bg-success' : 'bg-warning text-dark'}`}>
                        {item.availability}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-info btn-sm text-white me-1"
                        onClick={() => handleOpenDetails(item)}
                      >
                        Details
                      </button>
                      <button
                        className="btn btn-warning btn-sm me-1"
                        onClick={() => handleOpenEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm me-1"
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this book?')) {
                            onDeleteBook(item.id);
                          }
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className={`btn btn-sm ${item.availability === 'Available' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => onToggleBorrow(item.id)}
                      >
                        {item.availability === 'Available' ? 'Borrow' : 'Return'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-muted">
                    No books found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="text-muted small">
                Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredBooks.length)} to {Math.min(currentPage * itemsPerPage, filteredBooks.length)} of {filteredBooks.length} books
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
          <h3>Add Book</h3>
          <form onSubmit={handleCreateSubmit} className="mt-3" style={{ maxWidth: '500px' }}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">ISBN</label>
              <input
                type="text"
                className="form-control"
                value={formData.isbn}
                onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Published Date</label>
              <input
                type="date"
                className="form-control"
                value={formData.publishedDate}
                onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
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
          <h3>Edit Book</h3>
          <form onSubmit={handleEditSubmit} className="mt-3" style={{ maxWidth: '500px' }}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">ISBN</label>
              <input
                type="text"
                className="form-control"
                value={formData.isbn}
                onChange={(e) => setFormData({ ...formData, isbn: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Published Date</label>
              <input
                type="date"
                className="form-control"
                value={formData.publishedDate}
                onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary me-2">Update</button>
            <button type="button" className="btn btn-secondary" onClick={() => setView('list')}>Cancel</button>
          </form>
        </div>
      )}

      {/* DETAILS VIEW */}
      {view === 'details' && selectedBook && (
        <div className="card shadow-sm mt-3" style={{ maxWidth: '500px' }}>
          <div className="card-header bg-dark text-white">
            <h4 className="mb-0">Book Details</h4>
          </div>
          <div className="card-body">
            <p><strong>Title:</strong> {selectedBook.title}</p>
            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>ISBN:</strong> {selectedBook.isbn}</p>
            <p><strong>Published Date:</strong> {selectedBook.publishedDate}</p>
            <p><strong>Availability:</strong> <span className={`badge ${selectedBook.availability === 'Available' ? 'bg-success' : 'bg-warning text-dark'}`}>{selectedBook.availability}</span></p>
            <button className="btn btn-secondary mt-2" onClick={() => setView('list')}>Back to List</button>
          </div>
        </div>
      )}
    </div>
  );
}

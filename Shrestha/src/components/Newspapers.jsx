import React, { useState } from 'react';

export default function Newspapers({ newspapers, onAddNewspaper, onDeleteNewspaper }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', publisher: '', date: '2026-07-27', language: 'English', copies: 10 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.publisher.trim()) {
      alert('Name and Publisher are required.');
      return;
    }
    onAddNewspaper({ ...formData, id: Date.now() });
    setFormData({ name: '', publisher: '', date: '2026-07-27', language: 'English', copies: 10 });
    setShowAddForm(false);
  };

  const filteredNewspapers = newspapers.filter(
    (n) =>
      n.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.publisher.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold mb-0">Newspapers Archive</h2>
        <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancel' : 'Add Newspaper'}
        </button>
      </div>

      {showAddForm && (
        <div className="card card-body mb-4 shadow-sm" style={{ maxWidth: '500px' }}>
          <h4 className="mb-3">Add New Newspaper Record</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Newspaper Name</label>
              <input
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Publisher</label>
              <input
                type="text"
                className="form-control"
                value={formData.publisher}
                onChange={(e) => setFormData({ ...formData, publisher: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Language</label>
              <input
                type="text"
                className="form-control"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Available Copies</label>
              <input
                type="number"
                className="form-control"
                value={formData.copies}
                onChange={(e) => setFormData({ ...formData, copies: Number(e.target.value) })}
              />
            </div>
            <button type="submit" className="btn btn-success me-2">Save</button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowAddForm(false)}>Cancel</button>
          </form>
        </div>
      )}

      <div className="mb-3" style={{ maxWidth: '300px' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search newspapers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Newspaper Name</th>
            <th>Publisher</th>
            <th>Date</th>
            <th>Language</th>
            <th>Copies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredNewspapers.length > 0 ? (
            filteredNewspapers.map((item) => (
              <tr key={item.id}>
                <td className="fw-bold">{item.name}</td>
                <td>{item.publisher}</td>
                <td>{item.date}</td>
                <td><span className="badge bg-info text-dark">{item.language}</span></td>
                <td>{item.copies}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      if (window.confirm('Delete this newspaper entry?')) {
                        onDeleteNewspaper(item.id);
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
              <td colSpan="6" className="text-center py-4 text-muted">
                No newspapers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

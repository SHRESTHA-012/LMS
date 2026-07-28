import React, { useState } from 'react';

export default function Magazines({ magazines, onAddMagazine, onDeleteMagazine }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', issueNo: '', category: 'Technology', frequency: 'Monthly', status: 'Available' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.issueNo.trim()) {
      alert('Title and Issue Number are required.');
      return;
    }
    onAddMagazine({ ...formData, id: Date.now() });
    setFormData({ title: '', issueNo: '', category: 'Technology', frequency: 'Monthly', status: 'Available' });
    setShowAddForm(false);
  };

  const filteredMagazines = magazines.filter(
    (m) =>
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold mb-0">Magazines Directory</h2>
        <button className="btn btn-primary" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancel' : 'Add Magazine'}
        </button>
      </div>

      {showAddForm && (
        <div className="card card-body mb-4 shadow-sm" style={{ maxWidth: '500px' }}>
          <h4 className="mb-3">Add New Magazine</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Magazine Title</label>
              <input
                type="text"
                className="form-control"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Issue Number / Volume</label>
              <input
                type="text"
                className="form-control"
                value={formData.issueNo}
                onChange={(e) => setFormData({ ...formData, issueNo: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Frequency</label>
              <select
                className="form-select"
                value={formData.frequency}
                onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
              >
                <option value="Weekly">Weekly</option>
                <option value="Bi-Weekly">Bi-Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
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
          placeholder="Search magazines..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Issue / Volume</th>
            <th>Category</th>
            <th>Frequency</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMagazines.length > 0 ? (
            filteredMagazines.map((item) => (
              <tr key={item.id}>
                <td className="fw-bold">{item.title}</td>
                <td>{item.issueNo}</td>
                <td>{item.category}</td>
                <td>{item.frequency}</td>
                <td><span className="badge bg-success">{item.status}</span></td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      if (window.confirm('Delete this magazine?')) {
                        onDeleteMagazine(item.id);
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
                No magazines found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

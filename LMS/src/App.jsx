import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Students from './components/Students';
import Librarians from './components/Librarians';
import Books from './components/Books';
import Newspapers from './components/Newspapers';
import Magazines from './components/Magazines';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import {
  initialLoginUsers,
  initialStudents,
  initialLibrarians,
  initialBooks,
  initialNewspapers,
  initialMagazines
} from './data';

function AppContent() {
  const navigate = useNavigate();

  // Application State
  const [users] = useState(initialLoginUsers);
  const [currentUser, setCurrentUser] = useState(null);
  const [loginMessage, setLoginMessage] = useState('');

  const [students, setStudents] = useState(initialStudents);
  const [librarians, setLibrarians] = useState(initialLibrarians);
  const [books, setBooks] = useState(initialBooks);
  const [newspapers, setNewspapers] = useState(initialNewspapers);
  const [magazines, setMagazines] = useState(initialMagazines);

  // Authentication Handlers
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setLoginMessage('Login Success for Admin');
    navigate('/Dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setLoginMessage('');
    navigate('/Login');
  };

  // Student CRUD
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleEditStudent = (updatedStudent) => {
    setStudents(
      students.map((s) =>
        (s.id === updatedStudent.id || s.studentId === updatedStudent.studentId)
          ? updatedStudent
          : s
      )
    );
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id && s.studentId !== id));
  };

  // Librarian CRUD
  const handleAddLibrarian = (newLibrarian) => {
    setLibrarians([...librarians, newLibrarian]);
  };

  const handleEditLibrarian = (updatedLibrarian) => {
    setLibrarians(
      librarians.map((l) =>
        (l.id === updatedLibrarian.id || l.librarianId === updatedLibrarian.librarianId)
          ? updatedLibrarian
          : l
      )
    );
  };

  const handleDeleteLibrarian = (id) => {
    setLibrarians(librarians.filter((l) => l.id !== id && l.librarianId !== id));
  };

  // Book CRUD & Borrow
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleEditBook = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const handleToggleBorrow = (id) => {
    setBooks(
      books.map((b) =>
        b.id === id
          ? { ...b, availability: b.availability === 'Available' ? 'Borrowed' : 'Available' }
          : b
      )
    );
  };

  // Newspaper CRUD
  const handleAddNewspaper = (item) => setNewspapers([...newspapers, item]);
  const handleDeleteNewspaper = (id) => setNewspapers(newspapers.filter((n) => n.id !== id));

  // Magazine CRUD
  const handleAddMagazine = (item) => setMagazines([...magazines, item]);
  const handleDeleteMagazine = (id) => setMagazines(magazines.filter((m) => m.id !== id));

  const totalBorrowings = books.filter((b) => b.availability === 'Borrowed').length;

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar isAuthenticated={!!currentUser} onLogout={handleLogout} />

      <main className="flex-grow-1 container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Navigate to={currentUser ? "/Dashboard" : "/Login"} replace />} />
          
          <Route
            path="/Login"
            element={
              <Login users={users} onLoginSuccess={handleLoginSuccess} />
            }
          />

          <Route
            path="/Dashboard"
            element={
              <Dashboard
                totalStudents={students.length}
                totalBooks={books.length}
                totalLibrarians={librarians.length}
                totalBorrowings={totalBorrowings}
                loginMessage={loginMessage}
                onClearMessage={() => setLoginMessage('')}
              />
            }
          />

          <Route
            path="/Books"
            element={
              <Books
                books={books}
                onAddBook={handleAddBook}
                onEditBook={handleEditBook}
                onDeleteBook={handleDeleteBook}
                onToggleBorrow={handleToggleBorrow}
              />
            }
          />

          <Route
            path="/Student"
            element={
              <Students
                students={students}
                onAddStudent={handleAddStudent}
                onEditStudent={handleEditStudent}
                onDeleteStudent={handleDeleteStudent}
              />
            }
          />

          <Route
            path="/Librarian"
            element={
              <Librarians
                librarians={librarians}
                onAddLibrarian={handleAddLibrarian}
                onEditLibrarian={handleEditLibrarian}
                onDeleteLibrarian={handleDeleteLibrarian}
              />
            }
          />

          <Route
            path="/Newspapers"
            element={
              <Newspapers
                newspapers={newspapers}
                onAddNewspaper={handleAddNewspaper}
                onDeleteNewspaper={handleDeleteNewspaper}
              />
            }
          />

          <Route
            path="/Magazines"
            element={
              <Magazines
                magazines={magazines}
                onAddMagazine={handleAddMagazine}
                onDeleteMagazine={handleDeleteMagazine}
              />
            }
          />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </main>

      <footer className="footer mt-auto py-3 bg-dark text-light border-top border-secondary">
        <div className="container text-center">
          <span className="text-secondary">
            &copy; {new Date().getFullYear()} - LibraryManagement. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

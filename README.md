# 📚 Library Management System

A modern, web-based Library Management System for managing books, students, librarians, newspapers, and magazines — built with **Vite** for a fast development experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen.svg)

---

## 🖼️ Overview

LibraryManagement is a single-page application that lets library staff manage their catalog and members through a clean, dark-themed admin interface. It covers the core operations of a college/university library — cataloging books, tracking students and librarians, and maintaining periodicals like newspapers and magazines.

---

## ✨ Features

- **🔐 Authentication** — Secure login screen with username/email and password fields, plus a "Remember me" option.
- **📖 Book Management** — Add, edit, delete, view details, search, and borrow books. Each entry tracks Title, Author, ISBN, Published Date, and Availability status.
- **🎓 Student Management** — Maintain student records (ID, Name, Email, Phone) with quick edit/delete actions.
- **🧑‍💼 Librarian Management** — Manage librarian profiles (ID, Name, Age, Phone) with the same CRUD-style controls.
- **📰 Newspapers** — Dedicated section for tracking newspaper records.
- **📗 Magazines Directory** — Manage magazine issues/volumes with Category, Frequency (Monthly/Bi-Weekly), and Availability status.
- **ℹ️ About Us** — Informational page about the library system.
- **✉️ Contact Us** — A "Get in Touch" page with library address, email, and phone contact details, plus a message form (Name, Email, Subject, Message).
- **🔍 Search** — Live search bars available across Books, Students, Librarians, and Magazines lists.
- **📱 Responsive Navbar** — Persistent top navigation across all pages for quick access to every module.

---

## 🛠️ Tech Stack

- **[Vite](https://vitejs.dev/)** — Build tool & dev server
- **JavaScript** — Application logic
- **[oxlint](https://oxc.rs/docs/guide/usage/linter.html)** — Fast linting via `.oxlintrc.json`
- **HTML5 / CSS3** — Markup and styling

> ℹ️ Update this section with the exact framework (React, Vue, or vanilla JS) and any UI library used, based on your `package.json`.

---

## 📂 Project Structure

```
LMS/
├── dist/                # Production build output
├── node_modules/        # Installed dependencies
├── public/              # Static assets served as-is
├── src/                 # Application source code
├── .gitignore            # Git ignore rules
├── .oxlintrc.json        # Linter configuration
├── index.html            # App entry HTML
├── package.json           # Project metadata & dependencies
├── package-lock.json      # Dependency lock file
├── vite.config.js         # Vite build/dev configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm (comes bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd LMS

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

This starts the Vite dev server. Open the printed local URL (typically `http://localhost:5173`) in your browser.

### Build for Production

```bash
npm run build
```

The optimized output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npx oxlint
```

> ℹ️ Confirm these script names against your `package.json` — update if they differ (e.g., custom script names).

---

## 🖥️ Pages / Modules

| Page | Description |
|---|---|
| **Login** | Authenticate with username/email and password |
| **Books** | Browse, search, add, edit, delete, and borrow books |
| **Students** | View and manage registered students |
| **Librarians** | View and manage librarian staff records |
| **Newspapers** | Manage newspaper listings |
| **Magazines** | Browse and manage magazine issues by category and frequency |
| **About Us** | Learn more about the library system |
| **Contact Us** | Reach out via address, email, phone, or a contact form |

---

## 📌 Roadmap Ideas

- [ ] Backend API integration for persistent data storage
- [ ] Role-based access (Admin / Librarian / Student)
- [ ] Book reservation & due-date reminders
- [ ] Pagination for large catalogs
- [ ] Dashboard with borrowing analytics

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the repo and open a pull request.

---

## 📄 License

This project is licensed under the MIT License — feel free to use and modify it for your own projects.

---

## 👤 Author

**Shrestha**
Built as part of a personal/academic project portfolio.

© 2026 - LibraryManagement. All rights reserved.

// Mock Data Store for LMS Application matching libManagement PDF

export const initialLoginUsers = [
  { id: 1, username: 'admin', password: '12345' },
  { id: 2, username: 'mycodingproject', password: 'myc546' },
  { id: 3, username: 'my', password: 'myc' }
];

export const initialStudents = [
  { id: 1, studentId: 1, studentName: 'Alice Johnson', gender: 'Female', email: 'alice.j@email.com', phone: '555-0101', address: '123 Maple Street' },
  { id: 2, studentId: 2, studentName: 'Bob Smith', gender: 'Male', email: 'bob.smith@email.com', phone: '555-0102', address: '456 Oak Avenue' },
  { id: 3, studentId: 3, studentName: 'Charlie Brown', gender: 'Male', email: 'charlie.b@email.com', phone: '555-0103', address: '789 Pine Road' },
  { id: 4, studentId: 4, studentName: 'Diana Prince', gender: 'Female', email: 'diana.p@email.com', phone: '555-0104', address: '101 Bay Drive' },
  { id: 5, studentId: 5, studentName: 'Evan Wright', gender: 'Male', email: 'evan.w@email.com', phone: '555-0105', address: '202 Cedar Lane' }
];

export const initialLibrarians = [
  { id: 1, librarianId: 1, name: 'Sarah Connor', age: 34, phone: '555-0201' },
  { id: 2, librarianId: 2, name: 'John Doe', age: 28, phone: '555-0202' },
  { id: 3, librarianId: 3, name: 'Michael Scott', age: 45, phone: '555-0203' },
  { id: 4, librarianId: 4, name: 'Ellen Ripley', age: 39, phone: '555-0204' },
  { id: 5, librarianId: 5, name: 'James Bond', age: 40, phone: '555-0205' }
];

export const initialBooks = [
  { id: 1, title: 'databse', author: 'helbert', isbn: '978-0201616224', publishedDate: '2026-07-21', availability: 'Available' },
  { id: 2, title: 'bootstrap', author: 'raju', isbn: '978-0201616224', publishedDate: '2026-07-08', availability: 'Available' },
  { id: 3, title: 'angular', author: 'rajat', isbn: '978-0201616224', publishedDate: '2026-07-03', availability: 'Available' },
  { id: 4, title: 'c programming', author: 'rajat', isbn: '978-0201616224', publishedDate: '2026-07-22', availability: 'Available' }
];

export const initialNewspapers = [
  { id: 1, name: 'The Daily Times', publisher: 'Times Media', date: '2026-07-27', language: 'English', copies: 15 },
  { id: 2, name: 'Financial Express', publisher: 'Express Group', date: '2026-07-27', language: 'English', copies: 10 },
  { id: 3, name: 'Dainik Jagran', publisher: 'Jagran Prakashan', date: '2026-07-27', language: 'Hindi', copies: 25 },
  { id: 4, name: 'The Hindu', publisher: 'Kasturi & Sons', date: '2026-07-27', language: 'English', copies: 12 }
];

export const initialMagazines = [
  { id: 1, title: 'Tech Monthly', issueNo: 'Issue #142', category: 'Technology', frequency: 'Monthly', status: 'Available' },
  { id: 2, title: 'National Geographic', issueNo: 'Vol. 204', category: 'Science & Nature', frequency: 'Monthly', status: 'Available' },
  { id: 3, title: 'Business Today', issueNo: 'Issue #88', category: 'Business & Economy', frequency: 'Bi-Weekly', status: 'Available' },
  { id: 4, title: 'Reader Digest', issueNo: 'Vol. 95', category: 'General Interest', frequency: 'Monthly', status: 'Available' }
];

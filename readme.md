# 📝 Description

I have created minimal library management system using React, Redux Toolkit Query (RTK Query), and TypeScript. The system will allow users to view a list of books, perform CRUD operations, borrow books, and view a simple borrow summary—all without authentication, category filters, or payment integration.
The main goal is to build a functional and clean client-side application that interacts with a RESTful API, demonstrating proper state management, and core functionality.

# 📒 Featchers

🚀 Public Routes
✅ All pages of this project are accessible without login or authentication. The focus is on essential book and borrowing features only.

## 📚 Book Management 📚

✅ Show all books in a table format.
✅ Edit Book: Opens a form with existing book data to edit book info.

## 🛠️ Business logic:

✅ Quantity cannot exceed available copies.
✅ If quantity reaches 0, the book is marked unavailable.
✅ Delete Book: Opens a confirmation dialog before removal.
✅ Borrow Book: Opens a simple form to borrow a book.
✅ Add New Book:

## 📚 Borrow Book 📚

✅ Open from “Borrow” button in the book list.

## 🛠️ Business logic:

✅ Quantity cannot exceed available copies.
✅ If quantity reaches 0, the book is marked unavailable
✅ Submit via API and show success message.
✅ Redirect to borrow summary page.

## 📚 Borrow Summary 📚

✅ Displays a list of books that have been borrowed, along with the total quantity borrowed for each book.

⚙️ Technologies Uses

✅ React,
✅ Redux Toolkit Query (RTK Query)
✅ TypeScript
✅ Tailwind Css
✅ Shadcn
✅ Node Js
✅ Express Js
✅ Mongoose
✅ MongoDB

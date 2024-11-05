# Movie App

This is a **Movie App** built using **Node.js**, **Express.js**, **EJS**, and **Tailwind CSS**. The app allows users to explore movies, view details, and perform various operations. This README provides an overview of the project's structure, setup, and usage.
![Movie Page](https://github.com/user-attachments/assets/f1fa9958-55bd-4bb1-b583-a7f0180af506)
![Login Page](https://github.com/user-attachments/assets/b11d4041-dcdc-4a0c-b353-917f108bf942)
![Register Page](https://github.com/user-attachments/assets/dd287cf6-6d91-46b1-81ac-139a6835f4f2)
![Add Movie Page](https://github.com/user-attachments/assets/54976e08-83c3-40dd-b205-91128a79cc7f)
![Update Movie Page](https://github.com/user-attachments/assets/e65ec723-6f38-4a77-bc17-5c5a133c7a9a)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This Movie App is a web application that enables users to search and view movie information. It is designed to be fast, responsive, and user-friendly. The frontend is styled with **Tailwind CSS**, while the backend logic is powered by **Express.js** and **EJS** for templating.

## Features

- **Responsive Design**: Styled with Tailwind CSS to be mobile and desktop-friendly.
- **Dynamic Views**: EJS is used for server-side rendering of views.
- **Movie Details**: Users can view detailed information for each movie.
- **Session Management**: Sessions are managed using `express-session` and `cookie-parser` for a smooth user experience.
- **Image Upload**: Integrated file uploads using `Multer` for handling images.

## Tech Stack

- **Node.js** - Backend server runtime
- **Express.js** - Web framework for routing and middleware
- **EJS** - Templating engine for rendering HTML
- **Tailwind CSS** - Utility-first CSS framework for styling
- **PostCSS** - Used with `autoprefixer` and `tailwindcss` plugins to process CSS
- **Multer** - Middleware for handling `multipart/form-data` for image uploads

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rajdeep777/Movie-App.git
   cd movie-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build Tailwind CSS**:
   Run the following script to process Tailwind CSS with PostCSS:
   ```bash
   npm run build:css
   ```

4. **Run the app**:
   Start the server:
   ```bash
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the app.
- Search for movies, view details, and explore other functionalities.

## Scripts

- **Build Tailwind CSS**:
  ```bash
  npm run build:css
  ```
  Processes the Tailwind CSS file located at `public/styles/tailwind.css` and outputs the final CSS to `public/css/tailwind.css`.

- **Start the Server**:
  ```bash
  npm start
  ```
  Starts the server using `nodemon` for automatic reloading during development.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the **ISC License**.

---

> Created by Rajdeep Singh
```

This README covers essential aspects of the app, including setup, dependencies, and usage. Let me know if you need further customization!

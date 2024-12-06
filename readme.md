# Agency Blog Assignment

A full-stack blogging platform where users can create, read, update, and delete blogs. This application consists of a **frontend** built with React and Tailwind CSS, and a **backend** built with Express.js and MongoDB.

---

## Features

### Frontend
- Built with React and Tailwind CSS.
- Includes dynamic routing using React Router DOM.
- Fully responsive UI with modern design.
- Allows interaction with the backend API.

### Backend
- Built with Express.js and MongoDB.
- Implements security features with **Helmet**, **CORS**, **xss-clean**, and **express-mongo-sanitize**.
- Image upload support using **Cloudinary**.
- Rate limiting to prevent abuse.
- JWT-based authentication for secure API access.

---

## Tech Stack

### Frontend
- **React**: For building user interfaces.
- **React Router DOM**: For routing.
- **Tailwind CSS**: For styling.
- **Axios**: For API requests.

### Backend
- **Express.js**: Framework for building APIs.
- **MongoDB**: Database for storing blog data.
- **Cloudinary**: For image hosting.
- **JWT**: For authentication.
- **Nodemon**: For development server monitoring.

---

## Installation and Setup

### Prerequisites
- Node.js (>= 16.x)
- npm or yarn
- MongoDB instance (local or Atlas)

### Backend Setup
1. Clone the repository.
   ```bash
   git clone <repo-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following:
   ```env
   PORT=5000
   MONGO_URL=<your-mongo-db-url>
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=<your-secret-key>
   CLOUDINARY_NAME=<your-cloudinary-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173`.

---

## API Endpoints

### Base URL
`http://localhost:5000/api/v1`

### Blog Routes
- **Create Blog**: `POST /blogs/create`
- **Get All Blogs**: `GET /blogs`
- **Get Single Blog**: `GET /blogs/:id`
- **Update Blog**: `PUT /blogs/:id`
- **Delete Blog**: `DELETE /blogs/:id`

---

## Scripts

### Frontend
| Command        | Description                   |
|----------------|-------------------------------|
| `npm run dev`  | Start the development server  |
| `npm run build`| Build the project for production |
| `npm run lint` | Run the linter                |
| `npm run preview` | Preview the production build |

### Backend
| Command        | Description                   |
|----------------|-------------------------------|
| `npm run dev`  | Start the backend server with nodemon |

---

## Deployment

### Frontend
- Hosted on [Vercel](https://www.vercel.com/).

### Backend
- Hosted on [Vercel](https://vercel.com/).

---

## Project Structure

### Frontend
```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── App.jsx
└── package.json
```

### Backend
```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── index.js
└── package.json
```

---

## Contributions
Feel free to contribute to this project by submitting a pull request.

---

## License
This project is licensed under the **MIT License**.

---

## Author
**Istiak Ahammad**  
[MERN Stack Developer](https://github.com/mhistiak3)

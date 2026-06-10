# 🎨 Online Auction Frontend

A modern frontend for an online auction platform built with **React 19**, **TypeScript**, and **Vite**. Provides auction browsing, bidding, favorites management, authentication, and user profile functionality through a responsive and multilingual user interface.

---

## Tech Stack

| Layer                | Technology              |
| -------------------- | ----------------------- |
| Framework            | React 19                |
| Language             | TypeScript              |
| Build Tool           | Vite                    |
| Routing              | React Router            |
| Styling              | Tailwind CSS            |
| HTTP Client          | Axios                   |
| Internationalization | i18next + react-i18next |
| State Management     | React Hooks             |
| Quality              | ESLint                  |
| CI/CD                | GitHub Actions          |
| Container            | Docker + Nginx          |

---

## Features

- JWT authentication support
- Protected routes
- Login and registration pages
- Browse active auctions
- Auction details page
- Place bids
- Favorites management
- User profile dashboard
- Active bids tracking
- Won auctions tracking
- Search auctions
- Filter auctions by category
- Sort auctions
- Countdown timer for active auctions
- English / Hungarian language support
- Responsive design

---

## Getting Started

### 1. Run the application

#### Development Mode

Install dependencies:

```bash
npm install
```

Start Vite development server:

```bash
npm run dev
```

Application starts on:

```text
http://localhost:5173
```

---

#### Docker Mode

Build and run the application:

```bash
docker compose up --build
```

Application starts on:

```text
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file:

```properties
VITE_API_URL=http://localhost:8080
```

Example usage:

```typescript
const API_URL = import.meta.env.VITE_API_URL;
```

---

## Application Pages

### Public Pages

| Route          | Description       |
| -------------- | ----------------- |
| `/`            | Auction listing   |
| `/auction/:id` | Auction details   |
| `/login`       | Login page        |
| `/register`    | Registration page |

### Protected Pages

| Route           | Description       |
| --------------- | ----------------- |
| `/profile`      | User profile      |
| `/favorites`    | Favorite auctions |
| `/my-bids`      | Active bids       |
| `/won-auctions` | Won auctions      |

---

## Backend Integration

The frontend communicates with the Online Auction API.

Expected backend URL:

```text
http://localhost:8080
```

Main integrations:

- Authentication
- Auctions
- Bidding
- Favorites
- User statistics

---

## Docker

### Build Image

```bash
docker build -t online-auction-frontend .
```

### Run Container

```bash
docker run -p 5173:80 online-auction-frontend
```

---

## CI/CD

GitHub Actions automatically:

- Install dependencies
- Run lint checks
- Build the application

Workflow:

```bash
npm ci
npm run lint
npm run build
```

---

## Project Structure

```text
src/
├── api/             # API communication
├── assets/          # Images and static assets
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── i18n/            # Translation configuration
├── pages/           # Application pages
├── routes/          # Route definitions
├── services/        # Business/API services
├── types/           # TypeScript types
├── utils/           # Utility functions
└── App.tsx
```

---

## Screenshots

### Auction List

_Add screenshot here_

### Auction Details

_Add screenshot here_

### User Profile

_Add screenshot here_

### Favorites

_Add screenshot here_

### Login

_Add screenshot here_

---

## Future Improvements

- Real-time bidding with WebSockets
- Push notifications
- Dark / Light theme switch
- Auction creation UI
- Image upload support
- User avatar management
- Admin dashboard

---

## Author

**Gergő Erdős**

Full Stack Developer

Frontend:

- React
- TypeScript
- Tailwind CSS

Backend:

- Java
- Spring Boot
- PostgreSQL
- Liquibase
- Docker

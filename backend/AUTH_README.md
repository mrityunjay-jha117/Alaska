# Metro Lines API - Authentication & Authorization

This backend API provides authentication and authorization features using JWT tokens and Google OAuth.

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
# Database
DATABASE_URL="your_postgresql_database_url"

# JWT Configuration
JWT_SECRET="your_super_secret_jwt_key_here"
JWT_EXPIRE="7d"

# Session Secret
SESSION_SECRET="your_session_secret_key_here"

# Google OAuth
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
GOOGLE_CALLBACK_URL="http://localhost:3000/api/auth/google/callback"

# Frontend URL
FRONTEND_URL="http://localhost:5173"

# Server Configuration
PORT=3000
NODE_ENV="development"
```

### 3. Database Setup

```bash
npx prisma migrate dev
```

### 4. Start Server

```bash
npm run dev
```

## Authentication Endpoints

### Register

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "about": "About me text (optional)",
  "bio": "Bio text (optional)"
}
```

### Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Google OAuth

```http
GET /api/auth/google
```

Redirects to Google OAuth consent screen.

### Get Profile (Protected)

```http
GET /api/auth/profile
Authorization: Bearer <jwt_token>
```

### Update Profile (Protected)

```http
PUT /api/auth/profile
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "Updated Name",
  "username": "newusername",
  "about": "Updated about",
  "bio": "Updated bio",
  "image": "image_url"
}
```

### Change Password (Protected)

```http
POST /api/auth/change-password
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword"
}
```

### Verify Token (Protected)

```http
GET /api/auth/verify
Authorization: Bearer <jwt_token>
```

### Logout

```http
POST /api/auth/logout
Authorization: Bearer <jwt_token>
```

## Protected Routes

All routes now require authentication except for:

- `GET /api/users` (optional auth for user context)
- `GET /api/users/:id` (optional auth for user context)
- `GET /api/users/username/:username` (optional auth)
- `GET /api/trips` (optional auth for user context)
- `GET /api/trips/:id` (optional auth)
- `GET /api/trips/station/:station` (optional auth)
- Auth routes (register, login, etc.)

### Authorization Rules

1. **Users**: Can only update/delete their own profile
2. **Trips**: Users can only access/modify their own trips
3. **Chats**: Users can only access chats they're involved in (as sender or receiver)

## Using the API

### Include JWT Token in Headers

```javascript
const response = await fetch("/api/users/me", {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
```

### Client-side Token Management

```javascript
// Store token after login/register
localStorage.setItem("token", response.data.token);

// Include in API requests
const token = localStorage.getItem("token");

// Remove on logout
localStorage.removeItem("token");
```

## Error Responses

### 401 Unauthorized

```json
{
  "success": false,
  "message": "Access token required"
}
```

### 403 Forbidden

```json
{
  "success": false,
  "message": "You can only access your own data"
}
```

### 400 Bad Request

```json
{
  "success": false,
  "message": "Username is already taken"
}
```

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/google/callback` (development)
   - `https://yourdomain.com/api/auth/google/callback` (production)

## Security Features

- ✅ JWT token authentication
- ✅ Password hashing with bcrypt
- ✅ Google OAuth integration
- ✅ Route protection middleware
- ✅ User authorization checks
- ✅ Token expiration
- ✅ Secure session management
- ✅ Input validation
- ✅ CORS configuration

## API Structure

```
/api
├── /auth
│   ├── POST /register
│   ├── POST /login
│   ├── POST /logout
│   ├── GET /google
│   ├── GET /google/callback
│   ├── GET /profile (protected)
│   ├── PUT /profile (protected)
│   ├── POST /change-password (protected)
│   └── GET /verify (protected)
├── /users (protected/optional auth)
├── /trips (protected/optional auth)
├── /chats (protected)
└── /utils
```

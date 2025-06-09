
# Task Manager Pro

A modern full-stack task management application built with React, TypeScript, and Node.js. This application allows you to manage users and their tasks efficiently with a clean, responsive interface.

## 🚀 Features

### Frontend (React + TypeScript)
- **User Management**: Create and view users with a clean interface
- **Task Management**: Add, view, and toggle task completion for each user
- **Weather Integration**: Real-time weather widget using external API
- **Responsive Design**: Mobile-friendly interface with modern styling
- **Professional UI**: Built with shadcn/ui components and Tailwind CSS

### Backend (Node.js + Express + TypeScript)
The backend API provides the following endpoints:

```
GET    /users           - List all users
POST   /users           - Create a new user
GET    /users/:id/tasks - List all tasks for a specific user
POST   /users/:id/tasks - Create a new task for a user
```

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Lucide React** for icons
- **React Router** for navigation
- **Vite** for build tooling

### Backend (To be implemented)
- **Node.js** with Express
- **TypeScript** for type safety
- **SQLite** database
- **Business logic separation**

## 📋 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── UserList.tsx    # User listing component
│   ├── TaskList.tsx    # Task listing component
│   ├── UserForm.tsx    # User creation form
│   ├── TaskForm.tsx    # Task creation form
│   ├── WeatherWidget.tsx # Weather integration
│   └── ui/             # shadcn/ui components
├── types/              # TypeScript type definitions
│   └── index.ts        # User, Task, and WeatherData types
├── pages/              # Page components
│   └── Index.tsx       # Main application page
└── hooks/              # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task-manager-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Backend Setup (To be implemented)

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup the database**
   ```bash
   npm run setup-db
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3000`

## 📱 Usage

1. **Create Users**: Use the user form to add new users to the system
2. **Select Users**: Click on any user to view their tasks
3. **Manage Tasks**: Add new tasks and toggle completion status
4. **Weather**: View current weather information in the widget
5. **Responsive**: The app works seamlessly on desktop and mobile devices

## 🔧 Development Considerations

### Frontend Architecture
- **Component Separation**: Each component has a single responsibility
- **Type Safety**: Full TypeScript coverage with proper interfaces
- **State Management**: React hooks for local state management
- **Performance**: Efficient re-rendering with proper dependency arrays

### API Integration
The frontend is designed to work with RESTful APIs:
- Mock data is used for demonstration
- Easy to replace with actual API calls
- Error handling and loading states included

### Styling Approach
- **Design System**: Consistent theming through Tailwind CSS
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Modern UI**: Clean, professional interface

## 🌟 Extra Features

### Weather Integration
- Real-time weather data display
- Responsive weather widget
- Error handling for API failures
- Refresh functionality

### Professional Documentation
- Comprehensive README
- Code comments and documentation
- Type definitions for all data structures
- Clear project structure

### Development Best Practices
- TypeScript for type safety
- Component-based architecture
- Separation of concerns
- Error boundaries and loading states

## 🔮 Future Enhancements

- **Backend Implementation**: Complete Node.js + Express API
- **Database Integration**: SQLite with proper migrations
- **Authentication**: User login and session management
- **Real-time Updates**: WebSocket integration for live updates
- **Testing**: Unit and integration tests
- **Deployment**: Docker containerization and CI/CD

## 📝 API Documentation

### User Endpoints

#### GET /users
Returns a list of all users.

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### POST /users
Creates a new user.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com"
}
```

### Task Endpoints

#### GET /users/:id/tasks
Returns all tasks for a specific user.

#### POST /users/:id/tasks
Creates a new task for a user.

**Request Body:**
```json
{
  "title": "Complete project",
  "description": "Finish the task management project"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- shadcn/ui for the beautiful component library
- Lucide React for the icon set
- Tailwind CSS for the utility-first styling approach
- The React and TypeScript communities for excellent tooling

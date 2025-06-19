# 🤖 AI-Powered Software Development Chatbot

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://software-dev-chatbot-9042puy3d-rajdipcollege-gmailcoms-projects.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/Rajdip2511/AI_Chat_bot)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18+-orange?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Mistral AI](https://img.shields.io/badge/Mistral%20AI-API-purple?style=for-the-badge)](https://mistral.ai/)

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Live Demo](#live-demo)
- [Local Setup](#local-setup)
- [Environment Configuration](#environment-configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Docker Deployment](#docker-deployment)
- [Deployment Options](#deployment-options)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

The **AI-Powered Software Development Chatbot** is an intelligent assistant designed to help developers with comprehensive programming support. Built with modern web technologies and powered by Mistral AI, this chatbot provides expert-level assistance across multiple domains including algorithms, system design, modern frameworks, and emerging technologies.

This project demonstrates full-stack development skills, API integration, responsive design, and professional deployment practices - perfect for showcasing technical capabilities to potential employers and clients.

## ✨ Features

### 🧠 Intelligent AI Assistance
- **Advanced Programming Support**: Python, JavaScript, TypeScript, Go, Rust, and more
- **Data Structures & Algorithms**: Detailed explanations, time complexity analysis, optimization strategies
- **System Design**: Microservices, scalability patterns, database design, architecture best practices
- **AI/ML Expertise**: RAG models, LLMs, vector databases, machine learning frameworks
- **Modern Tech Stacks**: React, Next.js, Node.js, cloud platforms, DevOps tools

### 💻 Technical Features
- **Real-time Chat Interface**: Smooth, responsive UI with typing indicators and animations
- **Error Handling**: Comprehensive error management with user-friendly messages
- **Health Monitoring**: Built-in health check endpoints for production monitoring
- **Environment Configuration**: Secure API key management with environment variables
- **Cross-platform Support**: Works on desktop, tablet, and mobile devices

### 🚀 Production Ready
- **Docker Support**: Containerized deployment with security best practices
- **CI/CD Pipeline**: Automated deployment workflows with GitHub Actions
- **Multiple Deployment Options**: Vercel, Railway, Render, DigitalOcean support
- **Performance Optimized**: Efficient API calls, caching, and response optimization

## 🛠 Tech Stack

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox, animations, and responsive design
- **Vanilla JavaScript**: Clean, efficient client-side functionality

### Backend
- **Node.js**: Runtime environment for server-side JavaScript
- **Express.js**: Fast, minimalist web framework
- **Mistral AI API**: Advanced language model for intelligent responses

### DevOps & Deployment
- **Docker**: Containerization for consistent deployments
- **GitHub Actions**: Automated CI/CD workflows
- **Vercel**: Production hosting with global CDN
- **Environment Variables**: Secure configuration management

## 🌐 Live Demo

Experience the chatbot live: **[https://software-dev-chatbot-9042puy3d-rajdipcollege-gmailcoms-projects.vercel.app](https://software-dev-chatbot-9042puy3d-rajdipcollege-gmailcoms-projects.vercel.app)**

### Try These Sample Questions:
- "Explain the time complexity of merge sort"
- "What is RAG in machine learning?"
- "Design a scalable microservices architecture"
- "Differences between React and Next.js"
- "How do vector databases work?"

## 🚀 Local Setup

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **Mistral AI API Key** - [Get yours here](https://console.mistral.ai/)

### Step-by-Step Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/Rajdip2511/AI_Chat_bot.git
cd AI_Chat_bot
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Environment Configuration
Create a `.env` file in the root directory:
```bash
# Windows
echo MISTRAL_API_KEY=your_actual_api_key_here > .env

# macOS/Linux
echo "MISTRAL_API_KEY=your_actual_api_key_here" > .env
```

**Or manually create `.env` file:**
```env
MISTRAL_API_KEY=your_actual_api_key_here
PORT=3000
```

#### 4. Start the Development Server
```bash
npm start
```

#### 5. Access the Application
Open your browser and navigate to:
```
http://localhost:3000
```

### 🎉 You're Ready!
The chatbot should now be running locally. Test it with programming questions!

## ⚙️ Environment Configuration

### Required Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `MISTRAL_API_KEY` | Your Mistral AI API key | Yes | `m3fRFcSdjfvDfOZP9KyMXdTuOG55Ubtz` |
| `PORT` | Server port number | No | `3000` (default) |

### Getting Your Mistral AI API Key

1. Visit [Mistral AI Console](https://console.mistral.ai/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy and use it in your `.env` file

## 💡 Usage

### Basic Chat Interaction
1. Type your programming question in the input field
2. Press **Enter** or click the **Send** button
3. Wait for the AI response (indicated by typing animation)
4. View the comprehensive answer with code examples and explanations

### Supported Query Types

#### Programming & Development
```
"How do I implement a binary search tree in Python?"
"Explain async/await in JavaScript"
"What are React hooks and how do they work?"
```

#### Algorithms & Data Structures
```
"Compare time complexity of different sorting algorithms"
"Explain dynamic programming with examples"
"How does a hash table handle collisions?"
```

#### System Design & Architecture
```
"Design a scalable chat application"
"Explain microservices vs monolithic architecture"
"How to implement load balancing?"
```

#### AI & Machine Learning
```
"What is the difference between supervised and unsupervised learning?"
"Explain how transformers work in NLP"
"How do vector databases improve search?"
```

## 🔌 API Endpoints

### Health Check
```http
GET /health
```
**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600.123
}
```

### Chat Endpoint
```http
POST /api/chat
Content-Type: application/json
```

**Request Body:**
```json
{
  "message": "Explain binary search algorithm"
}
```

**Response:**
```json
{
  "response": "Binary search is an efficient algorithm...",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Static Files
```http
GET /              # Serves index.html
GET /style.css     # Serves CSS styles
GET /main.js       # Serves JavaScript
```

## 🐳 Docker Deployment

### Build and Run with Docker

#### 1. Build the Docker Image
```bash
docker build -t ai-chatbot .
```

#### 2. Run the Container
```bash
docker run -p 3000:3000 -e MISTRAL_API_KEY=your_api_key_here ai-chatbot
```

#### 3. Using Docker Compose
```bash
docker-compose up -d
```

### Docker Configuration
The application includes production-ready Docker configuration:
- **Multi-stage build** for optimized image size
- **Non-root user** for security
- **Health checks** for container monitoring
- **Environment variable** support

## 🌐 Deployment Options

### 1. Vercel (Recommended)
```bash
npm install -g vercel
vercel
# Follow the prompts and add MISTRAL_API_KEY in environment variables
```

### 2. Railway
1. Connect your GitHub repository to Railway
2. Add `MISTRAL_API_KEY` environment variable
3. Deploy automatically

### 3. Render
1. Connect repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variable: `MISTRAL_API_KEY`

### 4. DigitalOcean App Platform
1. Create new app from GitHub repository
2. Configure environment variables
3. Deploy with automatic scaling

## 📁 Project Structure

```
AI_Chat_bot/
├── public/
│   ├── index.html          # Main HTML file
│   ├── style.css           # Responsive CSS styles
│   └── main.js             # Frontend JavaScript
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline
├── .dockerignore           # Docker ignore patterns
├── .gitignore              # Git ignore patterns
├── config.js               # Configuration management
├── DEPLOYMENT.md           # Deployment guide
├── docker-compose.yml      # Docker Compose config
├── Dockerfile              # Docker configuration
├── healthcheck.js          # Health monitoring
├── mistral.js              # Mistral AI integration
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
├── server.js               # Express.js server
└── vercel.json             # Vercel deployment config
```

## 📊 Performance & Monitoring

### Health Monitoring
The application includes built-in health checks:
- **Endpoint**: `GET /health`
- **Docker Health Check**: Automatic container monitoring
- **Uptime Tracking**: Server uptime statistics

### Performance Features
- **Efficient API Calls**: Optimized request/response handling
- **Error Recovery**: Automatic retry mechanisms
- **Resource Management**: Memory and CPU optimized

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 1. Fork the Repository
```bash
git fork https://github.com/Rajdip2511/AI_Chat_bot.git
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/amazing-feature
```

### 3. Make Your Changes
- Follow existing code style
- Add comments for complex logic
- Test your changes locally

### 4. Commit and Push
```bash
git commit -m "Add amazing feature"
git push origin feature/amazing-feature
```

### 5. Open a Pull Request
Submit a pull request with a clear description of your changes.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🎯 Professional Highlights

This project demonstrates:

### Technical Skills
- **Full-Stack Development**: Frontend and backend integration
- **API Integration**: External service integration with error handling
- **Modern JavaScript**: ES6+ features, async/await, modular code
- **Responsive Design**: Mobile-first, cross-browser compatibility
- **DevOps Practices**: Containerization, CI/CD, multiple deployment strategies

### Software Engineering Practices
- **Clean Code**: Well-structured, documented, maintainable codebase
- **Security**: Environment variable management, input validation
- **Testing**: Health checks, error handling, monitoring
- **Documentation**: Comprehensive README, inline comments, deployment guides
- **Version Control**: Git best practices, meaningful commit messages

### Problem-Solving Approach
- **User Experience**: Intuitive interface, real-time feedback, error messaging
- **Scalability**: Docker support, cloud deployment, performance optimization
- **Maintainability**: Modular architecture, configuration management, logging

---

## 🚀 Ready to Explore?

**Live Demo**: [https://software-dev-chatbot-9042puy3d-rajdipcollege-gmailcoms-projects.vercel.app](https://software-dev-chatbot-9042puy3d-rajdipcollege-gmailcoms-projects.vercel.app)

**Questions?** Feel free to reach out or open an issue on GitHub!

---

*Built with ❤️ for the developer community*
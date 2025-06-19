# Software Development Chatbot

A modern, interactive chatbot built with Node.js, Express.js, and OpenAI's API, specifically designed to answer software development-related questions.

## Features

- 🤖 AI-powered responses using OpenAI's GPT-3.5 Turbo
- 💻 Specialized in software development topics
- 🎨 Modern, responsive UI with beautiful gradient design
- ⚡ Real-time chat interface with loading indicators
- 🔍 Focus on programming languages, frameworks, and best practices
- 📱 Mobile-friendly responsive design

## Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher) installed
- An OpenAI API key (get one from [OpenAI Platform](https://platform.openai.com/api-keys))

## Setup Instructions

### 1. Clone or Download the Project
Make sure you have all the project files in your `software-dev-chatbot` directory.

### 2. Install Dependencies
The dependencies are already installed based on your package.json, but if needed:
```bash
npm install
```

### 3. Configure Your OpenAI API Key

**IMPORTANT**: You need to add your OpenAI API key to make the chatbot work.

1. Open the `config.js` file
2. Replace `'YOUR_API_KEY'` with your actual OpenAI API key:

```javascript
module.exports = {
    OpenAIAPIKey: 'sk-your-actual-api-key-here'
};
```

⚠️ **Security Note**: Never commit your API key to version control. For production, use environment variables.

### 4. Start the Server
Run the following command in your terminal:

```bash
node server.js
```

Or use the npm script:

```bash
npm start
```

### 5. Open in Browser
Once the server is running, you'll see:
```
🚀 Software Dev Chatbot server is running on port 3000
📱 Open your browser and go to: http://localhost:3000
💡 Make sure to set your OpenAI API key in config.js
```

Open your browser and navigate to: `http://localhost:3000`

## Usage

1. **Ask Questions**: Type any software development-related question in the input field
2. **Press Enter or Click Send**: Submit your question to the chatbot
3. **Get Answers**: The AI will provide detailed, helpful responses about:
   - Programming languages (JavaScript, Python, Java, C#, etc.)
   - Web development (HTML, CSS, React, Angular, Node.js, etc.)
   - Backend development (APIs, databases, server architecture)
   - Software engineering best practices
   - Development tools and frameworks
   - Code optimization and debugging
   - Architecture patterns and design principles

## Example Questions

Try asking questions like:
- "What's the difference between React and Angular?"
- "How do I optimize database queries?"
- "Explain microservices architecture"
- "What are the SOLID principles?"
- "How to implement authentication in Node.js?"
- "Best practices for REST API design"

## Project Structure

```
software-dev-chatbot/
├── public/
│   ├── index.html      # Main HTML file
│   ├── style.css       # CSS styling
│   └── main.js         # Frontend JavaScript
├── server.js           # Express server
├── openai.js          # OpenAI API wrapper
├── config.js          # Configuration file
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## Troubleshooting

### Common Issues:

1. **"OpenAI API key not configured"**
   - Make sure you've replaced `'YOUR_API_KEY'` in `config.js` with your actual API key

2. **"Invalid OpenAI API key"**
   - Check that your API key is correct and has sufficient credits
   - Ensure there are no extra spaces or characters in the key

3. **"Rate limit exceeded"**
   - You've made too many requests. Wait a moment and try again
   - Consider upgrading your OpenAI plan if needed

4. **Server won't start**
   - Make sure port 3000 is not being used by another application
   - Check that all dependencies are installed with `npm install`

### Getting an OpenAI API Key:

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and paste it in your `config.js` file

## Contributing

Feel free to improve this chatbot by:
- Adding new features
- Improving the UI/UX
- Adding conversation history
- Implementing user authentication
- Adding more specialized development topics

## License

This project is licensed under the ISC License. 
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const express = require('express');
const path = require('path');
const { MistralAPI } = require('./mistral');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/getChatbotResponse', async (req, res) => {
    try {
        const { userMessage } = req.body;

        // Validate input
        if (!userMessage || typeof userMessage !== 'string') {
            return res.status(400).json({ 
                error: 'Invalid input. Please provide a valid message.' 
            });
        }

        console.log('User message:', userMessage);

        // Use Mistral AI API to generate a response
        const chatbotResponse = await MistralAPI.generateResponse(userMessage);

        console.log('Chatbot response:', chatbotResponse);

        // Send the response back to the client
        res.json({ chatbotResponse });

    } catch (error) {
        console.error('Error in /getChatbotResponse:', error);
        res.status(500).json({ 
            error: 'Failed to generate response. Please try again later.',
            chatbotResponse: 'Sorry, I encountered an error while processing your request. Please try again later.'
        });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Handle 404
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.listen(port, () => {
    console.log(`🚀 Software Dev Chatbot server is running on port ${port}`);
    console.log(`📱 Open your browser and go to: http://localhost:${port}`);
    console.log(`💡 Make sure to set your Mistral AI API key in config.js`);
}); 
const { MistralAPIKey } = require('./config');

class MistralAPI {
    static async generateResponse(userMessage, conversationHistory = []) {
        try {
            const apiKey = MistralAPIKey;
            
            if (!apiKey || apiKey === 'YOUR_API_KEY') {
                throw new Error('Mistral AI API key not configured. Please set your API key in config.js');
            }

            const endpoint = 'https://api.mistral.ai/v1/chat/completions';
            
            // Create a system message to make the chatbot focused on software development
            const systemMessage = {
                role: 'system',
                content: `You are an expert software development assistant with deep knowledge of cutting-edge technologies. You specialize in:

                **PROGRAMMING & DSA:**
                - Data Structures & Algorithms (Arrays, Trees, Graphs, Dynamic Programming, Sorting, Searching, etc.)
                - Programming Languages (JavaScript, Python, Java, C#, Go, Rust, TypeScript, etc.)
                - Competitive Programming concepts and problem-solving techniques
                - Time & Space complexity analysis (Big O notation)

                **AI & MACHINE LEARNING:**
                - Large Language Models (LLMs): GPT, Claude, Gemini, Llama, Mistral
                - RAG (Retrieval-Augmented Generation) models and implementation
                - AI Agents and Multi-Agent Systems
                - Generative AI (Text, Image, Code generation)
                - Vector Databases (Pinecone, Weaviate, ChromaDB)
                - ML Frameworks (TensorFlow, PyTorch, Hugging Face)
                - AI Application Development and Deployment

                **MODERN TECH STACKS:**
                - Frontend: React, Next.js, Vue.js, Svelte, Angular, TypeScript
                - Backend: Node.js, Python (FastAPI, Django), Go, Rust, .NET
                - Databases: PostgreSQL, MongoDB, Redis, Vector DBs
                - Cloud: AWS, Azure, GCP, Serverless, Edge Computing
                - DevOps: Docker, Kubernetes, CI/CD, Terraform
                - Mobile: React Native, Flutter, Swift, Kotlin

                **SOFTWARE ENGINEERING:**
                - System Design and Architecture patterns
                - Microservices, Event-Driven Architecture
                - API Design (REST, GraphQL, gRPC)
                - Database optimization and scaling
                - Security best practices and authentication
                - Testing strategies and automation

                **EMERGING TECHNOLOGIES:**
                - Blockchain and Web3 development
                - IoT and Edge Computing
                - Quantum Computing basics
                - AR/VR development
                - Progressive Web Apps (PWAs)

                Provide detailed, practical answers with code examples. Stay current with latest trends and best practices. If explaining AI concepts, include implementation details and real-world applications.`
            };

            // Prepare messages array
            const messages = [systemMessage];
            
            // Add conversation history if provided
            if (conversationHistory && conversationHistory.length > 0) {
                messages.push(...conversationHistory);
            }
            
            // Add current user message
            messages.push({ role: 'user', content: userMessage });

            console.log('Making request to Mistral AI API...');

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "mistral-small-latest",
                    messages: messages,
                    max_tokens: 1000,
                    temperature: 0.7
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('Mistral AI API Error:', response.status, errorData);
                
                if (response.status === 401) {
                    throw new Error('Invalid Mistral AI API key. Please check your API key in config.js');
                } else if (response.status === 429) {
                    throw new Error('Rate limit exceeded. Please try again later.');
                } else if (response.status === 500) {
                    throw new Error('Mistral AI service is temporarily unavailable. Please try again later.');
                } else {
                    throw new Error(`Mistral AI API error: ${response.status} ${response.statusText}`);
                }
            }

            const responseData = await response.json();
            
            // Log the entire API response for debugging
            console.log('Response from Mistral AI API:', responseData);

            // Check if choices array is defined and not empty
            if (responseData.choices && responseData.choices.length > 0 && responseData.choices[0].message) {
                const content = responseData.choices[0].message.content;
                return content.trim();
            } else {
                // Handle the case where choices array is undefined or empty
                console.error('Error: No valid response from Mistral AI API', responseData);
                throw new Error('No valid response received from Mistral AI API');
            }

        } catch (error) {
            console.error('Error in OpenAI API call:', error);
            
            // Re-throw the error with more context
            if (error.message.includes('fetch')) {
                throw new Error('Network error: Unable to connect to Mistral AI API. Please check your internet connection.');
            } else if (error.message.includes('API key')) {
                throw error; // Pass through API key errors as-is
            } else {
                throw new Error(`Failed to generate response: ${error.message}`);
            }
        }
    }
}

module.exports = { MistralAPI }; 
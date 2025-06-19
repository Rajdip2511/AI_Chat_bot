// Configuration file for the Software Dev Chatbot
// Use environment variables in production, fallback to hardcoded value for local development

module.exports = {
    // In production (Vercel/Railway/etc.), set MISTRAL_API_KEY environment variable
    // For local development, you can keep your API key here
    // Get your API key from: https://console.mistral.ai/api-keys/
    MistralAPIKey: process.env.MISTRAL_API_KEY || 'm3fRFcSdjfvDfOZP9KyMXdTuOG55Ubtz'
}; 
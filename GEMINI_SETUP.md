# Gemini API Setup

## Get Your API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Create API Key"
3. Copy your API key

## Configure the Frontend

1. Create a `.env` file in the `frontend` directory:
   ```bash
   cd frontend
   cp .env.example .env
   ```

2. Open `.env` and add your API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

## Using the Expand Vibe Feature

1. Navigate to the Contact section
2. Enter a short visual description in the "Visual Data" field
3. Click "✨ Expand Vibe"
4. The AI will generate a detailed 3-paragraph visual treatment

**Note:** The API key is required for the Expand Vibe feature to work.

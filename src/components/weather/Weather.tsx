import React, { useState } from 'react';
import axios from 'axios';

export default function Weather() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Replace <your-firebase-url> with your actual Firebase function URL
      const result = await axios.post('https://us-central1-kadencasanave-e0211.cloudfunctions.net/getChatGPTResponse', { prompt });
      
      // Store the response in the state to display it later
      setResponse(result.data.data);
    } catch (error) {
      console.error('Error calling ChatGPT:', error);
      setResponse('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Weather and ChatGPT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask ChatGPT a question..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {response && (
        <div>
          <h2>Response from ChatGPT:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

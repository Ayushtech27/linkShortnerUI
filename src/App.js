import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shortenUrl = async () => {
    try {
      const response = await axios.post('http://localhost:8080/shorten', { url });
  
      if (response.status === 200) {
        setShortUrl(response.data);
      } else {
        setShortUrl('Error: ' + response.statusText);
      }
    } catch (error) {
      setShortUrl('Error: ' + error.message);
    }
  };  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Link Shortener</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter a URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={shortenUrl}>Shorten</button>
        </div>
        {shortUrl && (
          <div className="result">
            <p>Short URL: {shortUrl}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
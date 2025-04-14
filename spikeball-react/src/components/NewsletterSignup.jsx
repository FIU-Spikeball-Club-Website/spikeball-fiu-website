import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setMessage('');
    
    try {
      // Single request to save email (server will validate)
      const response = await fetch('http://localhost:8080/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      // Parse the response data
      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Thank you for subscribing!');
        setEmail(''); // Clear the input on success
      } else {
        setStatus('error');
        setMessage(data.message || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Connection error. Please try again later.');
      console.error('Error subscribing:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-indigo-950 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-indigo-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Want to join our newsletter?</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className={`bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-lg transition-colors ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="mt-4 text-green-400">{message}</p>
          )}
          
          {status === 'error' && (
            <p className="mt-4 text-red-400">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
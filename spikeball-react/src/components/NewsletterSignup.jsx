import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    
    try {
      const response = await fetch(`http://exampleurl:8080/validate/${email}`);
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Error validating email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-indigo-950 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-indigo-900 rounded-xl p-8 shadow-lg">
          <h3 className="text-white text-2xl font-bold mb-4">Want to join our newsletter?</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none placeholder-gray-400"
              required
            />
            <button 
              type="submit" 
              className={`bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 px-6 rounded-lg transition-colors ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Subscribe'}
            </button>
          </form>
          
          {status === 'success' && (
            <p className="mt-4 text-green-400">Thank you for subscribing!</p>
          )}
          
          {status === 'error' && (
            <p className="mt-4 text-red-400">There was an error. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
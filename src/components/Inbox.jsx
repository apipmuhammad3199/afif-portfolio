import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../firebase';

const Inbox = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const fetchMessages = async () => {
    try {
      const snapshot = await get(ref(db, 'messages'));
      if (snapshot.exists()) {
        const dataObj = snapshot.val();
        const dataArr = Object.keys(dataObj).map(key => ({
          id: key,
          ...dataObj[key]
        }));
        // Sort descending by createdAt
        dataArr.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setMessages(dataArr);
      } else {
        setMessages([]);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching messages: ', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchMessages();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'afif19216811') { // Using the default password requested
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="inbox-login" style={{ padding: '100px 20px', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="login-card" style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: 'var(--radius-12)', textAlign: 'center', width: '100%', maxWidth: '400px' }}>
          <h2 className="h3" style={{ marginBottom: '20px' }}>Inbox Login</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              style={{ marginBottom: '15px' }}
            />
            {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Login</button>
          </form>
          <div style={{ marginTop: '20px' }}>
             <a href="#/" style={{ color: 'var(--text-secondary)' }}>&larr; Back to Portfolio</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="inbox-dashboard" style={{ padding: '100px 20px', minHeight: '100vh', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h2 className="h3">My Inbox</h2>
        <a href="#/" className="btn btn-secondary">Logout / Home</a>
      </div>

      {loading ? (
        <p>Loading messages...</p>
      ) : messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <div className="messages-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {messages.map((msg) => (
            <div key={msg.id} className="message-card" style={{ background: 'var(--bg-secondary)', padding: '20px', borderRadius: 'var(--radius-12)', borderLeft: '4px solid var(--emerald)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h3 className="h4" style={{ color: 'var(--text-primary)' }}>{msg.name}</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : 'Just now'}
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '5px' }}><strong>Email:</strong> <a href={`mailto:${msg.email}`}>{msg.email}</a></p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}><strong>Phone:</strong> <a href={`tel:${msg.phone}`}>{msg.phone}</a></p>
              <div style={{ background: 'var(--bg-primary)', padding: '15px', borderRadius: 'var(--radius-8)', color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Inbox;

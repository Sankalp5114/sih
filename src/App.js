import React from 'react';
import Navbar from './components/Navbar';
import ChatbotButton from './components/ChatbotButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* Your main museum content here */}
        <h1>Chhatrapati Shivaji Maharaj Museum, Mumbai</h1>
        <p>"Explore the rich legacy of India's history and heritage, where every artifact tells a story."</p>
      </main>
      <ChatbotButton />
    </div>
  );
}

export default App;

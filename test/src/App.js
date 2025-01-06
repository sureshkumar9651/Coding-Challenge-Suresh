// App.js
import React, { useState } from 'react';
import './App.css'; // Import custom CSS for styling
import mockData from './mockData'; // Import the mock data

const App = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the accordion
  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className='name'>
        <p>Jill Jonse</p>
        <p>Email: jill@gmail.com</p>
      </div>
      <div className='row'>
        <div className='left'>
          <p className='original'>Original</p>
          <p>Source: Car Gurus</p>
          <p>Lead In: 30th jan 2024</p>
          <p>Integrated Vehicle: 2024 Honda Civic </p>
          <p>Status: Lost </p>
        </div>
        <div className='right'>
          <p className='original'>Revival</p>
          <p>Source: Walk In</p>
          <p>Lead In: 23rd Oct 2024 </p>
          <p>Integrated Vehicle: 2024 Honda Civic</p>
          <p>Status: sold </p>
        </div>
      </div>
      <h1>Jill Jonse Nurturing History</h1>
      <div className="accordion">
        {mockData.map((email, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{email.sub}</h3>
            </div>
            {expandedIndex === index && (
              <div className="accordion-body">
                <p><strong>Sent on:</strong> {email.sent}</p>
                <p><strong>CRM:</strong> {email.crm}</p>
                <div className='imgsection'>
                  <img src={email.imageUrl} alt={email.sub} />
                </div>
                <h5>Actions:</h5>
                {email.sent_actions.length > 0 ? (
                  <ul>
                    {email.sent_actions.map((action, i) => (
                      <li key={i}>
                        <strong>{action.action}</strong> on {action.date}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No actions taken</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
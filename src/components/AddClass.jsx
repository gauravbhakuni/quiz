import React, { useState } from 'react';

const AddClass = () => {
  const [className, setClassName] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/classes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: className })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(`Class created with ID: ${data.id}`);
      setClassName('');
    } catch (error) {
      console.error('Error creating class:', error);
      setResult('Error creating class');
    }
  };

  return (
    <div>
      <h1>Add New Class</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Class Name:
            <input
              type="text"
              value={className}
              className='border border-black'
              onChange={(e) => setClassName(e.target.value)}
            />
          </label>
        </div>
        <button className='bg-blue-500 border border-white/50 rounded-sm' type="submit">Add Class</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
};

export default AddClass;

import React, { useEffect, useState } from 'react';
import TestDetails from './TestDetails'
import { useNavigate } from 'react-router-dom';
import AddQuestions from './AddQuestions';

const Dashboard = () => {
  const [tests, setTests] = useState([]);
  const [error, setError] = useState(null);
  const [addingQuestionsForTestId, setAddingQuestionsForTestId] = useState(null);

  const navigate = useNavigate();

  const handleAddTest = () => {
    navigate('/admin/dashboard/addTest');
  };

  const markAsCompleted = async (testId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tests`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: testId, status_id: 3 })
      });

      if (!response.ok) {
        throw new Error('Failed to update test status');
      }

      // Remove the test from the tests array
      setTests(tests.filter(test => test.id !== testId));
    } catch (error) {
      console.error('Error updating test status:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/tests')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setTests(data))
      .catch(error => {
        console.error('Error fetching tests:', error);
        setError(error.message);
      });
  }, []);

  const hasPendingOrRunningTests = tests.some(test => test.status_id === 1 || test.status_id === 2);
  console.log(hasPendingOrRunningTests);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (hasPendingOrRunningTests) {
    return (
      <div>
        <div className='flex justify-evenly w-full h-40 p-6 bg-orange-500'>
          <h1 className='uppercase  text-5xl font-bold'>Tests</h1>
          <button className='bg-blue-500 border border-white/50 m-4 ml-24 h-8 font-bold text-center' style={{ width: '20rem' }} onClick={handleAddTest}>Add Test</button>
        </div>
        {tests.map(test => (
          test.status_id !== 3 &&
          (
            <div>
              <div key={test.id} className='flex flex-row  justify-between bg-white p-4 m-4'>
                <div>
                  <h2 className='font-bold'>{test.name}</h2>
                  <p>Subject: {test.subject}</p>
                  <p>Date: {test.date}</p>
                  <p>Total Questions: {test.total_questions}</p>
                  <p>Status: {test.status_id === 1 ? 'Pending' : 'Running'}</p>
                </div>
                <div className='flex'>
                  <button className='text-center h-8 text-black font-bold bg-orange-500 hover:bg-orange-600 m-4 ml-10' style={{ width: '13rem' }} onClick={() => markAsCompleted(test.id)}>Marks as Completed</button>
                  {addingQuestionsForTestId !== test.id && (
                    <button className='text-center h-8 text-black font-bold bg-orange-500 hover:bg-orange-600 m-4 ml-10' style={{ width: '13rem' }} onClick={() => setAddingQuestionsForTestId(test.id)}>Add questions</button>
                  )}
                </div>
              </div>
              <AddQuestions testId={test.id} />
            </div>
          )
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <TestDetails />
      </div>
    );
  }
};

export default Dashboard;

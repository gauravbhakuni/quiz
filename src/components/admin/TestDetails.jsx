import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TestDetails = () => {
  const [testName, setTestName] = useState('');
  const [subjectName, setSubjectName] = useState('');
  const [testDate, setTestDate] = useState('');
  const [totalQuestions, setTotalQuestions] = useState('');
  const [classId, setClassId] = useState('');
  const [result, setResult] = useState('');

  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleCreateTest = async (event) => {
    event.preventDefault();

    const testDetails = {
      teacher_id: 1, // assuming a static teacher ID, replace with dynamic data if available
      name: testName,
      date: testDate,
      status_id: 1, // assuming status is pending when created
      subject: subjectName,
      total_questions: totalQuestions,
      class_id: classId,
    };

    try {
      const response = await fetch('http://localhost:5000/api/tests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testDetails)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(`Test created with ID: ${data.id}`);
      setTestName('');
      setSubjectName('');
      setTestDate('');
      setTotalQuestions('');
      setClassId('');
    } catch (error) {
      console.error('Error creating test:', error);
      setResult('Error creating test');
    }

    navigate('/admin/dashboard');
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/getClasses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setClasses(data))
      .catch(error => {
        console.error('Error fetching student data:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='bg-orange-500 h-1/4 mb-10 relative'>
        <h1 className='uppercase w-full h-40 font-bold p-6'>
          General Settings
        </h1>
      </div>
      <div className='h-96 relative ml-10 flex justify-between' style={{ marginTop: '-6rem', width: '70rem', height: '30rem' }}>
        <div className='bg-white mr-10' style={{ width: '35rem' }}>
          <h1 className='font-bold p-6'>General Settings</h1>
          <form onSubmit={handleCreateTest}>
            <input type="text" placeholder='Test Name' className='bg-slate-200 m-4 ml-10' style={{ width: '30rem' }} value={testName} onChange={(e) => setTestName(e.target.value)} />
            <input type="text" placeholder='Subject Name' className='bg-slate-200 m-4 ml-10' style={{ width: '30rem' }} value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
            <input type="date" placeholder='Test Date' className='bg-slate-200 m-4 ml-10' style={{ width: '30rem' }} value={testDate} onChange={(e) => setTestDate(e.target.value)} />
            <input type="text" placeholder='Total Question Count' className='bg-slate-200 m-4 ml-10' style={{ width: '30rem' }} value={totalQuestions} onChange={(e) => setTotalQuestions(e.target.value)} />
            <select className='bg-slate-200 m-4 ml-10 text-center h-10' style={{ width: '30rem' }} value={classId} onChange={(e) => setClassId(e.target.value)}>
              <option value="" selected disabled>Select Class for Student</option>
              {classes.map(cls => (
                <option key={cls.id} value={cls.id}>{cls.name}</option>
              ))}
            </select>
            <button type="submit" className='bg-orange-500 m-4 ml-24 h-8 font-bold text-center' style={{ width: '20rem' }}>UPDATE</button>
          </form>
          {result && <p className="m-4 ml-10">{result}</p>}
        </div>
        <div className='bg-white h-96'>
          <h1 className='font-bold p-6'>Other Settings</h1>
          <div className='flex'>
            <button className='text-center h-8 text-black font-bold bg-orange-500 hover:bg-orange-600 m-4 ml-10' style={{ width: '13rem' }}>Marks as Completed</button>
            <button className='text-center h-8 text-black font-bold bg-orange-500 hover:bg-orange-600 m-4 ml-10' style={{ width: '13rem' }}>Delete Test</button>
          </div>
          <button className='text-center h-8 text-black font-bold bg-orange-500 hover:bg-orange-600 m-4 ml-10' style={{ width: '30rem' }}>Get Student Data</button>
          <input type="text" placeholder='Student Roll NO' className='bg-slate-200 m-4 ml-10 h-8 text-center' style={{ width: '30rem' }} />
          <button className='bg-orange-500 m-4 ml-28 h-8 font-bold text-center text-black' style={{ width: '20rem' }}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;

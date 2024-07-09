import React, { useEffect, useState } from 'react';

const AddData = () => {
  const [className, setClassName] = useState('');
  const [studentClassId, setStudentClassId] = useState('');
  const [studentRollNo, setStudentRollNo] = useState('');
  const [classes, setClasses] = useState([]);
  const [error, setError] = useState(null);
  const [studentResult, setstudentResult] = useState('');
  const [classResult, setclassResult] = useState('');

  const handleAddClass = async (event) => {
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
      setclassResult(`class added with ID: ${data.id}`);
      setClasses([...classes, data]); // Update the classes state with the new class
      setClassName('');
    } catch (error) {
      console.error('Error creating class:', error);
    }
  };

  const handleAddStudent = async (event) => {
    event.preventDefault();

    const studentData = {
      rollno: studentRollNo,
      class_id: studentClassId
    };

    try {
      const response = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setstudentResult(`Student added with ID: ${data.id}`);
      setStudentClassId('');
      setStudentRollNo('');
    } catch (error) {
      console.error('Error adding student:', error);
      setstudentResult('Error adding student');
    }
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
        console.error('Error fetching classes data:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div className='flex flex-col'>
      <div className='bg-orange-500 h-1/4 mb-10 relative'>
        <h1 className='uppercase w-full h-40 font-bold p-6'>
          Add Class/Student
        </h1>
      </div>
      <div className='flex'>
        <div className='bg-white h-96 relative ml-10' style={{ marginTop: '-6rem', width: '32rem', height: '20rem' }}>
          <h1 className='font-bold p-6'>Add Class Data</h1>
          <div>
            <form onSubmit={handleAddClass}>
              <input type="text" value={className} placeholder='Class no.' className='bg-slate-200 m-4 ml-4' onChange={(e) => setClassName(e.target.value)} style={{ width: '30rem' }} />
              <button type="submit" className='bg-orange-500 m-4 ml-24 h-8 font-bold text-center' style={{ width: '20rem' }}>Add Class</button>
            </form>
            {classResult && <p className="m-4 ml-10">{classResult}</p>}
          </div>
        </div>
        <div className='bg-white h-96 relative ml-10' style={{ marginTop: '-6rem', width: '32rem', height: '20rem' }}>
          <h1 className='font-bold p-6'>Add Student Data</h1>
          <div>
            <form onSubmit={handleAddStudent}>
              <select className='bg-slate-200 m-4 ml-4 text-center h-10' style={{ width: '30rem' }} value={studentClassId} onChange={(e) => setStudentClassId(e.target.value)}>
                <option value="" disabled>Select Class for Student</option>
                {classes.map(cls => (
                  <option key={cls.id} value={cls.id}>{cls.name}</option>
                ))}
              </select>
              <input type="text" placeholder='Student Roll No' className='bg-slate-200 m-4 ml-4' style={{ width: '30rem' }} value={studentRollNo} onChange={(e) => setStudentRollNo(e.target.value)} />
              <button type="submit" className='bg-orange-500 m-4 ml-24 h-8 font-bold text-center' style={{ width: '20rem' }}>Add Student</button>
            </form>
            {studentResult && <p className="m-4 ml-10">{studentResult}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;

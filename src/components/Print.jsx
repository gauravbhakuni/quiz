import React, { useState, useEffect } from 'react';

const Print = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/students')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setStudents(data))
      .catch(error => {
        console.error('Error fetching student data:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Print Student Data</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : students.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Roll No</th>
              <th className="py-2 px-4 border-b">Class ID</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b">{student.id}</td>
                <td className="py-2 px-4 border-b">{student.rollno}</td>
                <td className="py-2 px-4 border-b">{student.class_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Print;

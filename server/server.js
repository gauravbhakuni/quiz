const http = require('http');
const mysql = require('mysql2');
const url = require('url');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Your MySQL password
  database: 'quiz'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (reqUrl.pathname === '/api/tests' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { teacher_id, name, date, status_id, subject, total_questions, class_id } = JSON.parse(body);
      const sql = 'INSERT INTO tests (teacher_id, name, date, status_id, subject, total_questions, class_id) VALUES (?, ?, ?, ?, ?, ?, ?)';

      connection.query(sql, [teacher_id, name, date, status_id, subject, total_questions, class_id], (err, results) => {
        if (err) {
          console.error('Error inserting test data:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
          return;
        }
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id: results.insertId, teacher_id, name, date, status_id, subject, total_questions, class_id }));
      });
    });

  }

  else if (reqUrl.pathname === '/api/tests' && req.method === 'GET') {
    const sql = 'SELECT * FROM tests';

    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching tests:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(results));
    });
  }

  else if (reqUrl.pathname === '/api/tests' && req.method === 'PUT') {
    let body = '';
  
    req.on('data', chunk => {
      body += chunk.toString();
    });
  
    req.on('end', () => {
      const { id, status_id } = JSON.parse(body);
      const sql = 'UPDATE tests SET status_id = ? WHERE id = ?';
  
      connection.query(sql, [status_id, id], (err, results) => {
        if (err) {
          console.error('Error updating test data:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
          return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Test updated successfully' }));
      });
    });
  
  }

  else if (reqUrl.pathname === '/api/tests' && req.method === 'DELETE') {
    const id = reqUrl.query.id;
    const sql = 'DELETE FROM tests WHERE id = ?';

    connection.query(sql, [id], (err, results) => {
      if (err) {
        console.error('Error deleting test data:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Test deleted successfully' }));
    });

  }

  else if (reqUrl.pathname === '/api/add-question' && req.method === 'POST') {
    let body = '';
  
    req.on('data', chunk => {
      body += chunk.toString();
    });
  
    req.on('end', () => {
      const { title, optionA, optionB, optionC, optionD, correctAns, score, test_id } = JSON.parse(body);
  
      // Step 1: Insert into `questions` table
      const insertQuestionSql = 'INSERT INTO questions (title, optionA, optionB, optionC, optionD, correctAns, score) VALUES (?, ?, ?, ?, ?, ?, ?)';
      connection.query(insertQuestionSql, [title, optionA, optionB, optionC, optionD, correctAns, score], (err, result) => {
        if (err) {
          console.error('Error inserting question:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
          return;
        }
  
        const questionId = result.insertId;
  
        // Step 2: Insert into `question_test_mapping` table
        const insertMappingSql = 'INSERT INTO question_test_mapping (question_id, test_id) VALUES (?, ?)';
        connection.query(insertMappingSql, [questionId, test_id], (err, result) => {
          if (err) {
            console.error('Error mapping question to test:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
          }
  
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Question added and mapped successfully' }));
        });
      });
    });
  }

  else if (reqUrl.pathname === '/api/students' && req.method === 'GET') {
    const sql = 'SELECT id, rollno, class_id FROM student_data';

    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching student data:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(results));
    });

  }

  else if (reqUrl.pathname === '/api/students' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { rollno, class_id } = JSON.parse(body);
      const sql = 'INSERT INTO student_data (rollno, class_id) VALUES (?, ?)';

      connection.query(sql, [rollno, class_id], (err, results) => {
        if (err) {
          console.error('Error inserting student data:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
          return;
        }
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id: results.insertId }));
      });
    });
  }

  else if (reqUrl.pathname === '/api/getClasses' && req.method === 'GET') {
    const sql = 'SELECT id, name FROM classes';

    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching classes data:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(results));
    });
  }

  else if (reqUrl.pathname === '/api/classes' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name } = JSON.parse(body);
      const sql = 'INSERT INTO classes (name) VALUES (?)';

      connection.query(sql, [name], (err, results) => {
        if (err) {
          console.error('Error inserting class data:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal Server Error' }));
          return;
        }
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id: results.insertId, name }));
      });
    });

  }

  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

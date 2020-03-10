import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from "./pages/Main";

function App() {
  return (
    <Main/>
  );
}

// const express = require('express');
// const mysql = require('mysql');
// const app = express();
//
// const connection = mysql.createConnection({
//   host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   user: 'lb3robyanrhw9yilqthz',
//   password: 'c8ljaktqfy91zozk',
//   database: 'tqq5xp1wg15pcmui'
// });
//
// connection.connect(function(err){
//   (err) ? console.log(err) : console.log(connection);
// });
//
//
// app.get('/api/news', (req, res) => {
//   res.json({ message: 'I am a message from Server!'});
// });

// app.listen(3306, () => console.log('App listening on port 3306'));

export default App;

const express = require('express');
const app = express();
app.get('/', (request, response) =>{
  return response.json({massage: 'hello word' });
} );
app.listen(3333);
import express from 'express';
const app = express ();
import path from 'path';

app.use (express.static(path.join(__dirname,'../../public')));
app.listen(1452,() => {
  console.log('server runs on 1452');
});

import app from './app'
import open from 'open'
// Envía el trafico entrante a React
app.get('*', (req, res) => {
  res.sendFile('index.html')
 });

 // Escucha el puerto 3000
 app.listen(3000, err => {
   if (!err) {
     open('http://localhost:3000')
   }
 });

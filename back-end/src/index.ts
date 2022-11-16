import app from './app';
import './database';

app.listen(app.get('port'), () => {
  // start server
  console.log(`Server on port ${app.get('port')}`); // app.get('port') === 8000 || process.env.PORT
});

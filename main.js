import app from './src/server.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on http://localhost:3000');
});

import app from './app';


const PORT = process.env.PORT || 3000;

// const PORT = 3000;
console.log('Starting server...');


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port http://localhost:${PORT}`);
});

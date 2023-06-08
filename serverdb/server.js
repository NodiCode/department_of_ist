const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express app
const app = express();


// Middleware
app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:<password>@cluster33.7wrlajs.mongodb.net/ist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Routes
app.use('/api/news', require('./routes/news'));
app.use('/api/events', require('./routes/events'));

// const collection = db.collection('teacher');

// collection.insertMany(jsonData, function(err, result) {
//   if (err) {
//     console.log('Error uploading data:', err);
//     return;
//   }

//   console.log('Data uploaded successfully!');
//   client.close();
// });

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
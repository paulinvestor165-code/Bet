const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bettingRoutes = require('./routes/bettingRoutes');

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRoutes);
app.use('/betting', bettingRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));

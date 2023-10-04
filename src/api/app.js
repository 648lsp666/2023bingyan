// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// 中间件
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 连接到MongoDB数据库
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// 定义用户模型
const User = mongoose.model('User', {
  username: String,
  password: String,
});

// 处理用户注册请求
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // 检查是否存在相同的用户名
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // 创建新用户
    const user = new User({ username, password });
    await user.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

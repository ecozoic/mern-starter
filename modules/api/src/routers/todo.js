const express = require('express');

const Todo = require('../models/todo');
const User = require('../models/user');
const { generateToken, setUserInfo } = require('../auth/jwt');
const { auth, login } = require('../auth/middleware');

const router = express.Router();

router
  .route('/login')
  .post(login, (req, res) => {
    const userInfo = setUserInfo(req.user);

    res.status(200).json({
      token: `Bearer ${generateToken(userInfo)}`,
      user: userInfo,
    });
  });

router
  .route('/users')
  .post((req, res) => {
    const user = new User(req.body);
    user.save();

    const userInfo = setUserInfo(user);

    res.status(201).json({
      token: `Bearer ${generateToken(userInfo)}`,
      user: userInfo,
    });
  });

router
  .route('/todos')
  .get((req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.json(todos);
    });
  })
  .post((req, res) => {
    const todo = new Todo(req.body);
    todo.save();

    res.status(201).json(todo);
  });

router
  .route('/todos/:id')
  .get((req, res) => {
    const id = req.params.id;

    Todo.findById(id, (err, todo) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.json(todo);
    });
  })
  .put((req, res) => {
    const id = req.params.id;
    const { text, completed } = req.body;

    Todo.findByIdAndUpdate(id, { text, completed }, { new: true }, (err, todo) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.json(todo);
    });
  })
  .patch((req, res) => {
    const id = req.params.id;
    const { text, completed } = req.body;
    const update = {};

    if (text !== undefined) {
      update.text = text;
    }

    if (completed !== undefined) {
      update.completed = completed;
    }

    Todo.findByIdAndUpdate(id, update, { new: true }, (err, todo) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.json(todo);
    });
  })
  .delete(auth, (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndRemove(id, (err, todo) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      res.status(204).end();
    });
  });

module.exports = router;

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5846b957833e84ad25d2e5df' }).then((todo) => {
//
// });
//
// Todo.findByIdAndRemove('5846b957833e84ad25d2e5df').then((todo) => {
//   console.log(todo);
// });

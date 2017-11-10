
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('../database/database')
const Router = require('./serverComponents/router.js');
const {getGeocode} = require('../utils/getGeocode');

const app = express() 
 
app.use(bodyParser.json());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/build/')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

<<<<<<< 5a29a9bc7c73ddfb41ea326f6529a47dd689a0fc
app.use('/', Router);
=======
app.post('/newuser',function(req,res){
  console.log('req body ', req.body)
  res.sendStatus(200)
})
>>>>>>> Added new userStore which keeps track of user's name, photo, email globally
 
// app.get('/getDb', function (req, res) {
//   const text = 'SELECT * FROM items';
//     db.query(text, (err, query) => {
//       if (err) {
//         console.log(err.stack)   
//       } else { 
//         res.send(query.rows)
//       }
//     }) 
// });

let port = 1337;

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
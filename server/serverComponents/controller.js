const db = require('../../database/database.js');
const {getGeocode} = require('../../utils/getGeocode');
const nodemailer = require('nodemailer');
const path = require('path')

exports.allItems = function(req, res) {
  const text = 'SELECT * FROM items';
  db.query(text, (err, query) => {
    if (err) {
      console.log(err.stack)   
    } else { 
      res.json(query.rows)
    }
  }) 
};

exports.addItem = function(req, res) {
  console.log(req.body);
  req.body.price = parseInt(req.body.price);
  let lat, lng;
  getGeocode(req.body.location, (data) => {
    console.log('DATA?', data);
    lat = data.lat.toString();
    lng = data.lng.toString();
    const text = `INSERT INTO items (item_name, image_url, location, type, price, description, owner_email, owner_lat, owner_lng) VALUES ('${req.body.item_name}', '${req.body.image_url}', '${req.body.location}', '${req.body.type}', ${req.body.price}, '${req.body.description}', '${req.body.owner_email}', '${lat}', '${lng}')`;
    db.query(text, (err, query) => {
      if (err) {
        console.log(err);
      } else {
        res.send('item saved to database');
      }
    })
  });
}

exports.sendEmail = function(req, res) {
  const smtpTrans = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'buyandsell404@gmail.com',
      pass: 'buyandsell'
    }
  });
  
  const mailOptions = {
    from: 'buyandsell404@gmail.com',
    to: req.body.owner_email,
    subject: 'A BuyAndSell user has sent you an email about your item!',
    text: req.body.text + ' Contact this user at ' + req.body.user_email
  };

  smtpTrans.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info);
    }
  });

  res.send('email has been sent');
};

exports.addHistory = function(req, res) {
  res.sendFile(path.resolve(__dirname, '../../client/build/index.html'));
}

exports.getpolicy = function(req,res){
  res.sendFile(path.resolve(__dirname, '../../client/build/privacy/privacy.html'));  
}

exports.addUser = function(req,res){
  console.log('should be new user ', req.body)
  const text = `INSERT INTO users (id, email, password, photo) VALUES ('${req.body.id}', '${req.body.email}', '${req.body.password}', '${req.body.photo}')`;
  db.query(text, (err, query) => {
    if (err) {
      console.log(err);
    } else {
      res.send('item saved to database');
    }
  })
}

exports.getUser = function(req,res){
  console.log('should be user id ', req.query.id)
  const text = `SELECT * from users WHERE id = ('${req.query.id}')`;
  db.query(text,(err,query)=>{
    if(err){
      console.log(err);
    } else{
      console.log('the user ', query.rows)
      res.json(query.rows);
    }
  })

}

exports.deleteItem = function(req,res){
  console.log('please be data ', req.body)
  const text = `DELETE FROM items WHERE owner_email = ('${req.body.owner_email}') AND item_name = ('${req.body.item_name}')`;
  db.query(text,(err,query)=>{
    if(err){
      console.log(err);
    } else{
      console.log('the user ', query.rows)
      res.send('item deleted from database');
    }
  })
}

  // const text = `INSERT INTO items (item_name, image_url, location, type, price, description, owner_email) VALUES ('${req.body.item_name}', '${req.body.image_url}', '${req.body.location}', '${req.body.type}', ${req.body.price}, '${req.body.description}', '${req.body.owner_email}')`;
  // db.query(text, (err, query) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send('item saved to database');
  //   }
  // })




const db = require('../../database/database.js');
const {getGeocode} = require('../../utils/getGeocode');
const nodemailer = require('nodemailer');

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
    to: 'jeffreyueo@gmail.com',
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

  res.send('emial has been sent');
};

  // const text = `INSERT INTO items (item_name, image_url, location, type, price, description, owner_email) VALUES ('${req.body.item_name}', '${req.body.image_url}', '${req.body.location}', '${req.body.type}', ${req.body.price}, '${req.body.description}', '${req.body.owner_email}')`;
  // db.query(text, (err, query) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send('item saved to database');
  //   }
  // })




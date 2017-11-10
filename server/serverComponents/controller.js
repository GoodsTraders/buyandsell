const db = require('../../database/database.js');
const {getGeocode} = require('../../utils/getGeocode');

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
  // const text = `INSERT INTO items (item_name, image_url, location, type, price, description, owner_email) VALUES ('${req.body.item_name}', '${req.body.image_url}', '${req.body.location}', '${req.body.type}', ${req.body.price}, '${req.body.description}', '${req.body.owner_email}')`;
  // db.query(text, (err, query) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send('item saved to database');
  //   }
  // })




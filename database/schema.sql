-- Basic INSERTS to get template to get DB table up 
-- incase anything happens to our data on postgres
CREATE TABLE users (
  id VARCHAR(30),      
  email VARCHAR(30),
  password VARCHAR(30),
  photo VARCHAR(255)
);

  CREATE TABLE items (
    item_name VARCHAR(100), 
    image_url VARCHAR(255), 
    location VARCHAR(50), 
    type VARCHAR(30), 
    price INT, 
    description VARCHAR(255),
    buyer_id INT DEFAULT 0,
    owner_id INT DEFAULT 0,
    owner_email VARCHAR(60),
    owner_lat VARCHAR(10),
    owner_lng VARCHAR(10) 
  );
   

  INSERT INTO items (item_name, image_url, location, type, price, description, owner_email, owner_lat, owner_lng) 
  VALUES ('running shoes', 
    'https://cdn.burlingtoncoatfactory.com/FileLibrary/9a110c8f0fd446efb07c3608e9143deb/BCF546093932_L_3.jpg', 
    'los angeles', 
    'clothes', 
    '100', 
    'Run Forest, Run.',
    'jaychillaaa@gmail.com',
    '34.0522',
    '-118.2437'  
  );
  
  INSERT INTO items (item_name, image_url, location, type, price, description, owner_email, owner_lat, owner_lng) 
  VALUES ('socks', 
    'http://www.snzglobal.com/wp-content/uploads/2015/11/T-white-towel-beige-border.jpg', 
    'Sherman Oaks', 
    'clothes', 
    '20', 
    'Stylish, smashing socks.',
    'sockmasta@yahoo.com',
    '34.1490',
    '-118.4514'  
  );
  
  INSERT INTO items (item_name, image_url, location, type, price, description, owner_email, owner_lat, owner_lng) 
  VALUES ('HTC Vive', 
    'https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2016/02/htc-vive-and-oculus-rift-total-system.jpg', 
    'Sherman Oaks', 
    'Electronics', 
    '699', 
    'Experience a completely new world.',
    'electronicsman@gmail.com',
    '34.1808',
    '-118.3090'  
  );
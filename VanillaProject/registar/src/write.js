// this code snippet have a function that add a new user to a json data_base

const fs = require('fs');

function writeUserToDatabase(user) {
  // Get the existing data from the database file
  let data = JSON.parse(fs.readFileSync('../../assets/users.json'));

  // Add the new user to the array of users
  data.data_user.push(user);

  // Write the updated data to the database file
  fs.writeFileSync('../../assets/users.json', JSON.stringify(data));
}

// Example usage:
writeUserToDatabase({ username: 'amir', password: 3 });
writeUserToDatabase({ username: 'alisa', password: 2 });
writeUserToDatabase({ username: 'itay', password: 1 });





// this code asoumes the format of the json file .... !! 
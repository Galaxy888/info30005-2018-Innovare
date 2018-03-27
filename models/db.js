var faker = require('faker');

var numUsers = 10;
// var users[];

users = new Array(numUsers);

for (i = 0; i < numUsers; i++) {
    var name = faker.name.findName();
    var address = faker.address.city();
    var email = faker.internet.email();
    users[i] = {

        "id": i,
        "name": name,
        "address": address,
        "email": email

    }
};

module.exports = users;

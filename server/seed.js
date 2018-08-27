let db = require("./models");

let userList = [
    {
        name: "John Doe",
        location: "San Francisco",
        birthday: "March 23, 1996",
        hometown: "Los Angeles",
    }
]

let spaceList = [
    {
        name: "Jane Doe",
        address: "124 abc st, 94158, SF, CA",
        housingCapacity: 10,
        openSpaces: true,
    }
];

db.SafeUser.remove({}, (err, users) => {
    db.SafeUser.create(userList, (err, users) => {
        if (err) return console.log("ERROR", err);
        console.log("All users: ", users);
        console.log("Created ", users.length, "users");
    });
});

db.SafeSpace.remove({}, (err, spaces) => {
    db.SafeSpace.create(spaceList, (err, spaces) => {
        if (err) {
            return console.log("ERROR", err);
        }
        console.log("All posts: ", spaces);
        console.log("Created ", spaces.length, "spaces");
        process.exit();
    });
});

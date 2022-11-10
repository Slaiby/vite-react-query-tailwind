const userDetail = [
  { id: 1, name: "Foo", roles: ["Noob developer"], place: "Mars" },
  { id: 2, name: "Bar", roles: ["admin"], place: "earth" },
];

function generate_token(length) {
  //edit the token allowed characters
  var a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}

const checkIfUserInList = (user) =>
  userDetail.find((el) => el.name.toLowerCase() === user.toLowerCase());

const getUser = (user) => {
  return new Promise((resolve, reject) => {
    if (checkIfUserInList(user)) {
      const { name, id, roles } = checkIfUserInList(user);
      const authenticatedUser = {
        user: name,
        access_token: generate_token(32),
        refresh_token: generate_token(32),
        expires_in: 7200,
        id,
        roles,
      };
      return resolve(authenticatedUser);
    }
    return reject("No such user");
  });
};

export default getUser;

const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";
module.exports = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, SECRET_KEY);
      req.userId = user.id;
      req.email = user.email;
    } else {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized user" });
  }
};

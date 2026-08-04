const jwt = require("jsonwebtoken");

async function identifyUser(req, res, next) {
  const token = req.cookies.jwt_token
  console.log(req.headers.origin);
  console.log(req.headers.cookie);

  if (!token) {
    return res.status(404).json({
      message: "Token not provided",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized token",
    });
  }
}

module.exports = identifyUser;

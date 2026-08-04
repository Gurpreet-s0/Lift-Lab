const jwt = require("jsonwebtoken");
const app = require("../app")
app.get("/test-cookie", (req, res) => {
  res.cookie("test", "123", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.json({ ok: true });
});
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

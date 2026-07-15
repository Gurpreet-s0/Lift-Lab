const jwt = require("jsonwebtoken");
const blackListedModel = require("../models/blackList.model")

async function identifyUser(req,res,next) {
  const token = req.cookies.jwt_token

  if (!token) {
    return res.status(404).json({
      message: "Token not provided",
    });
  }

  const isTokenBlackListed = await blackListedModel.findOne({
    token:token
  })

  if(isTokenBlackListed){
    return res.status(401).json({
      message:"unauthorized token"
    })
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

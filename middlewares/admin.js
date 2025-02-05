const jwt = require("jsonwebtoken");
const JWT_ADMIN_SECRET = "lord_sanmay_is_realHero";
function userMiddleware(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({
      message: "Access Denied",
    });
  }
  try {
    const decoded = jwt.verify(token, JWT_ADMIN_SECRET);
    req.adminID = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "You are not Signed in",
    });
  }
}

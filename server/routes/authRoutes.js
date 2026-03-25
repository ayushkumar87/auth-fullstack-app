const express=require("express")
const router=express.Router();
const authController=require("../controllers/authController")
const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup",authController.signup)
router.post("/login",authController.login)

router.get("/users",authMiddleware,authController.getUsers)

router.get("/protected", authMiddleware, (req, res) => {
    res.json({
        message: "Protected data accessed",
        user: req.user
    });
});

module.exports=router
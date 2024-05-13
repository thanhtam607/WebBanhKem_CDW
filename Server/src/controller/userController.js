import userService from "../Service/userService"
let handleLogin = async (req, res) => {
    let email = req.body.email
    let pass = req.body.pass
    console.log(email)
    let userData = await userService.handleLogin(email, pass)
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        userData
    })
}

module.exports={
    handleLogin: handleLogin
}
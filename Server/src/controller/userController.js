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

let getAllUsers = async (req, res) => {
    const data = await userServicer.getAllUsers();
    return res.status(200).json({
        errCode: data.errCode,
        message: data.message,
        data: data,
    });
};

let handleCreateNewUser = async (req, res) => {
    const data = await userServicer.createUser(req.body);
    return res.status(200).json({
        errCode: data.errCode,
        message: data.message,
    });
};

module.exports = {
    handleCreateNewUser: handleCreateNewUser,
    getAllUsers: getAllUsers,
    handleLogin: handleLogin
}
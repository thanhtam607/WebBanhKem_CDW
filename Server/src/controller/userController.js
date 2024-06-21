import userServicer from "../Service/userServicer";
let userLogin = async (req, res) => {
  const email = req.body.email;
  const pass = req.body.pass;
  if (!email || !pass) {
    return res.status(500).json({
      errCode: 1,
      message: "Xin nhập 2 trường email va password",
    });
  }
  const data = await userServicer.userLoginServicer(email, pass);
  return res.status(200).json({
    errCode: data.errCode,
    message: data.message,
    data: data.user ? data.user : {},
  });
};

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

let updateRole = async (req, res) => {
  const data = await userServicer.updateRole(req.body);
  return res.status(200).json({
    errCode: data.errCode,
    message: data.message,
  });
};
let updatePass = async (req, res) => {
  const data = await userServicer.updatePass(req.body);
  return res.status(200).json({
    errCode: data.errCode,
    message: data.message,
  });
};

/**
 * Created by trungquandev.com's author on 18/02/2020.
 * emailController.js
 */
const mailer = require('../Service/mailer')

let sendMail = async (req, res) => {
  try {
    const { to, subject, body } = req.body
    console.log(req.body)
    await mailer.sendMail(to, subject, body)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}
let checkMail=async (req, res) => {
  const email = req.query.email;
  const data = await userServicer.checkEmail(email);
  return res.status(200).json({
    errCode: 0,
    message: data,
  });
}
module.exports = {
  userLogin: userLogin,
  getAllUsers: getAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  updateRole: updateRole,
  sendMail: sendMail,
  checkMail: checkMail,
  updatePass:updatePass
};
import axios from "../axios";
// login
const userLogin = (email, pass) => {
  return axios.post("/api/login", { email: email, pass: pass });
};
const createUser = (email, pass)=>{
  return axios.post('/api/register',{email: email, pass: pass})
}
const sendMail = (to, subject, body)=>{
  return axios.post('/api/send-email',{to: to, subject: subject, body:body })
}
const resetPassword = (email, pass)=>{
  return axios.post('/api/updatePass',{email: email, pass: pass })
}
const checkMail = (email)=>{
  return axios.get(`/api/checkMail?email=${email}`)
}

export { userLogin, createUser, sendMail,checkMail, resetPassword };

import db from "../models/index"
import md5 from 'md5';
let handleLogin = (email, pass)=>{
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExit = await checkUserEmail(email)
            if(isExit){
                let user = await db.User.findOne({
                    where: {email: email}
                })
                if(user){
                    const md5 = require('md5');
                   let check = checkPassword(md5(pass), user.pass)
                    if(check){
                        userData.errCode = 0
                        userData.errMessage = "Ok"
                        userData.user = user
                    }else{
                        userData.errCode = 2
                        userData.errMessage = "Wrong password"
                    }
                }

            }else{
                userData.errCode = 1
                userData.errMessage = "User not found."

            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }

    })
}
let checkUserEmail = (email)=>{
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {email: email}
            })
            if(user) resolve(true)
            else resolve(false)
        } catch (e) {
            reject(e)
        }
    })
}
let checkPassword = (pass, userPass)=>{
    return pass == userPass
}
module.exports={
    handleLogin: handleLogin
}
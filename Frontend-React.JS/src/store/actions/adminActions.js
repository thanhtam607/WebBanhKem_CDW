import actionTypes from "./actionTypes";

export const adminLoginSuccess = (adminInfo) => ({
  type: actionTypes.ADMIN_LOGIN_SUCCESS,
  adminInfo: adminInfo,
});

export const adminLoginFail = () => ({
  type: actionTypes.ADMIN_LOGIN_FAIL,
});

export const processLogout = () => ({
  type: actionTypes.PROCESS_LOGOUT,
});

// change language
export const changeLanguage = (language) => ({
  type: actionTypes.CHANGE_LANGUAGE,
  language: language,
});

/* eslint-disable no-useless-escape */
export const baseUrl = `http://localhost:8002`;
export const API = `${baseUrl}/api`;
export const pagePaths = {
  root: "/",
  room: "/room",
};
export const tabNames = {
  dashboard: "DASHBOARD",
  credit: "CREDIT",
  debit: "DEBIT",
  payDues: "PAY DUES",
  shopping: "SHOPPING",
  addMembers: "ADD MEMBERS",
};

export const pageTitles = {
  dashboard: "DASHBOARD",
  credit: "CREDIT",
  debit: "DEBIT",
  payDues: "PAY DUES",
  shopping: "SHOPPING",
  addMembers: "ADD MEMBERS",
};

export const validationErrors = {
  selectUser: "Please select the user.",
  enterAmount: "Please enter the amount.",
  onlyNumbersAllowed: "Only numbers are allowed.",
  enterDescription: "Please enter the description.",
  nameError: "Enter name.",
  emailError: "Enter email.",
  passwordError: "Enter password.",
  confirmPasswordError: "Enter confirm password.",
  phoneNumberError: "Enter a valid phone number",
};

export const messages = {
  passwordValidationInfo:
    "Password must contain at least 8 characters, one uppercase, one number and one special case character.",
  noResponseFound: "No response found!",
  somethingWentWrong: "Something went wrong.",
  success: "success",
};

/**
 * textWithoutSpecialOrSymbols: does not allow any special chars or symbols while typing in input text
 * emailWithDomain : validate email with domain like only com or gov or in or org
 * password: must contain one uppercase character, one lowercase character, one digit and one special character.
 */
export const regexList = {
  textWithoutSpecialOrSymbols: /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g,
  emailWithDomain: /^[\w\.%\+\-]+@[a-z0-9.-]+\.(com|gov|in|org)$/i,
  password:
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,15})$/,
  phoneNumberIndia: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
};

export const severities = {
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
};

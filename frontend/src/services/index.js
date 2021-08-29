import HttpCalls from "../utils/serviceCaller";

const AddMember = async (payload, cookies, snackbarProps) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "/user/register", headers, payload, snackbarProps);
};

const _Login = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "employeelogin", headers, payload);
};

const _Getfilters = async (payload) => {
  let { call } = HttpCalls;
  let headers = await headersData();
  return call("GET", "getfilterOptions", headers);
};

const _EmphasCustomerchecklistCountData = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "employeecustomerschecklistcount", headers, payload);
};

const _Getchecklist = async (payload) => {
  let { call } = HttpCalls;
  let headers = await headersData();
  return call("GET", "checklist", headers);
};

const _GetproductdetailsData = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "getproductdetails", headers, payload);
};

const _Addshortlistproduct = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "addshortlistproduct", headers, payload);
};

const _Removeshortlistproducts = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "removeshortlistproduct", headers, payload);
};

const _Addpreferredproduct = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "addpreferredproduct", headers, payload);
};

const _Removepreferredproduct = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "removepreferredproduct", headers, payload);
};

const _Savecustomervisit = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "Savecustomervisit", headers, payload);
};

const _GetEmployeeProfileAndVisits = async (payload) => {
  let { call } = HttpCalls;
  let headers = await headersData();
  const url = `employeeprofileandvisits?customer_mobile=${payload.customer_mobile}`;
  return call("GET", url, headers);
};

const _GetPreferredShorlistProducts = async (payload) => {
  let { call } = HttpCalls;
  let headers = await headersData();
  const url = `getpreferredshortlistproducts?emp_id=${payload.emp_id}&customer_id=${payload.customer_id}`;
  return call("GET", url, headers);
};

const _Counterslist = async (payload) => {
  let { call } = HttpCalls;
  let headers = await headersData();
  return call("GET", "counters", headers);
};

const _Employeedaystart = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "employeedaystart", headers, payload);
};

const _GetCustomerVisitsCount = async (payload) => {
  let { call } = HttpCalls;
  let headers = await headersData();
  return call(
    "GET",
    `customersvisitscount?emp_id=${payload.emp_id}&&search_customer_visit=${payload.search_customer_visit}`,
    headers
  );
};

const _Endcustomersession = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "endcustomersession", headers, payload);
};

const _getProducts = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "getProducts", headers, payload);
};

const _getCustomerSelectedChecklist = async (payload) => {
  let { call } = HttpCalls;
  let headers = await headersData();
  const url = `getcustomerselectedchecklist?check_id=${payload.check_id}`;
  return call("GET", url, headers);
};

const _MoveFromPreferredToShortlist = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "movefrompreferredtoshortlist", headers, payload);
};

const _MoveFromShortlistToPreferred = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "movefromshortlisttopreferred", headers, payload);
};
const _checkEmpSessionStart = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "checkempsessionstart", headers, payload);
};

const _getCustomerNotes = async (payload) => {
  let { call } = HttpCalls;
  let headers = await headersData();
  const url = `customernotes?customer_id=${payload.customer_id}`;
  return call("GET", url, headers);
};

const _Getfollowups = async (payload, cookies) => {
  let { call } = HttpCalls;
  let headers = await headersData(cookies);
  return call("POST", "fallowups", headers, payload);
};

const _cancelSession = async (payload) => {
  let { call } = HttpCalls;
  let headers = await headersData();
  return call(
    "GET",
    `cancelsession?customer_id=${payload.customer_id}&status_type=cancel`,
    headers
  );
};

const headersData = async (cookies) => {
  return {
    headers: {
      "Content-Type": "application/json",
      userId: cookies ? (cookies.userId ? cookies.userId : "") : "",
    },
  };
};

export default {
  AddMember,
  _Login,
  _Getfilters,
  _EmphasCustomerchecklistCountData,
  _Getchecklist,
  _GetproductdetailsData,
  _Addshortlistproduct,
  _Removeshortlistproducts,
  _Addpreferredproduct,
  _Removepreferredproduct,
  _Savecustomervisit,
  _GetEmployeeProfileAndVisits,
  _GetPreferredShorlistProducts,
  _Counterslist,
  _Employeedaystart,
  _GetCustomerVisitsCount,
  _Endcustomersession,
  _getProducts,
  _checkEmpSessionStart,
  _getCustomerSelectedChecklist,
  _MoveFromPreferredToShortlist,
  _MoveFromShortlistToPreferred,
  _getCustomerNotes,
  _Getfollowups,
  _cancelSession,
};

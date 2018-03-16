import axios from "axios";

// INITIAL STATE
const initialState = {
  user: [],
  originalUrlInput: "",
  newShort: "",
  auth_status: false,
  f_nameInput: "",
  l_nameInput: "",
  emailInput: ""
};

// CONST
const NEW_SHORT_URL_INPUT = "NEW_SHORT_URL_INPUT";
const NEW_SHORT_URL_CREATION = "NEW_SHORT_URL_CREATION";
const VERIFY_USER = "VERIFY_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_USER = "GET_USER";
const UPDATE_F_NAME = "UPDATE_F_NAME";
const UPDATE_L_NAME = "UPDATE_L_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const DELETE_USER_ACCOUNT = "DELETE_USER_ACCOUNT";
const F_NAME_INPUT = "F_NAME_INPUT";
const L_NAME_INPUT = "L_NAME_INPUT";
const EMAIL_INPUT = "EMAIL_INPUT";

// ACTION CREATORS
export function originalUrlInputFunc(e) {
  return {
    type: NEW_SHORT_URL_INPUT,
    payload: e
  };
}

export function fNameInput(e) {
  return {
    type: F_NAME_INPUT,
    payload: e
  };
}

export function lNameInput(e) {
  return {
    type: L_NAME_INPUT,
    payload: e
  };
}

export function emailInputFunc(e) {
  return {
    type: EMAIL_INPUT,
    payload: e
  };
}

export function createNewShort(original) {
  console.log(original, "NEW");
  return {
    type: NEW_SHORT_URL_CREATION,
    payload: axios
      .post("/api/url", { original })
      .then(response => {
        console.log(response.data.short_url, "NEW RESPONSE");
        return response.data.short_url;
      })
      .catch(console.log)
  };
}

export function verifyUser() {
  return {
    type: VERIFY_USER,
    payload: axios
      .request({ url: "/api/me" })
      .then(res => {
        console.log(res.data.auth_id, "veri");
        if (!res.data.auth_id.includes("google")) {
          console.log("tru");
          return false;
        } else {
          console.log("else");
          return true;
        }
      })
      .catch(err => err.message)
  };
}

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/me").then(res => {
      console.log(res);
      return res.data;
    })
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: axios.request("/logout").then(res => {
      return false;
    })
  };
}

export function updateFirstName(f_name, id) {
  return {
    type: UPDATE_F_NAME,
    payload: axios
      .put(`/api/user/first/${id}`, { f_name })
      .then(res => {
        return res.data[0];
      })
      .catch(console.log)
  };
}

export function updateLastName(l_name, id) {
  return {
    type: UPDATE_L_NAME,
    payload: axios
      .put(`/api/user/last/${id}`, { l_name })
      .then(res => {
        console.log(res);
        return res.data[0];
      })
      .catch(console.log)
  };
}

export function updateEmail(email, id) {
  return {
    type: UPDATE_EMAIL,
    payload: axios
      .put(`/api/user/email/${id}`, { email })
      .then(res => {
        return res.data[0];
      })
      .catch(console.log)
  };
}

export function deleteUserAccount(id) {
  return {
    type: DELETE_USER_ACCOUNT,
    payload: axios
      .delete(`/api/user/${id}`)
      .then(res => res)
      .catch(console.log)
  };
}

// EXPORT DEFAULT
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_SHORT_URL_INPUT:
      return Object.assign({}, state, { originalUrlInput: action.payload });

    case F_NAME_INPUT:
      return Object.assign({}, state, { f_nameInput: action.payload });

    case L_NAME_INPUT:
      return Object.assign({}, state, { l_nameInput: action.payload });

    case EMAIL_INPUT:
      return Object.assign({}, state, { emailInput: action.payload });

    case `${NEW_SHORT_URL_CREATION}_PENDING`:
      return;

    case `${NEW_SHORT_URL_CREATION}_FULFILLED`:
      console.log(action.payload, "PAYLOAD");
      return Object.assign({}, state, { newShort: action.payload });

    case `${VERIFY_USER}_FULFILLED`:
      console.log(action.payload, "payload");
      return Object.assign({}, state, { auth_status: action.payload });

    case `${GET_USER}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });

    case `${LOGOUT_USER}_FULFILLED`:
      return Object.assign({}, state, { auth_status: action.payload });

    case `${UPDATE_F_NAME}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });

    case `${UPDATE_L_NAME}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });

    case `${UPDATE_EMAIL}_FULFILLED`:
      return Object.assign({}, state, { user: action.payload });

    case DELETE_USER_ACCOUNT:
      return Object.assign({}, state, { user: [] });

    default:
      return state;
  }
}

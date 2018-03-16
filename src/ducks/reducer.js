import axios from "axios";

// INITIAL STATE
const initialState = {
  user: [],
  originalUrlInput: "",
  newShort: "",
  auth_status: false
};

// CONST
const NEW_SHORT_URL_INPUT = "NEW_SHORT_URL_INPUT";
const NEW_SHORT_URL_CREATION = "NEW_SHORT_URL_CREATION";
const VERIFY_USER = "VERIFY_USER";
const LOGOUT_USER = "LOGOUT_USER";
const GET_USER = "GET_USER";

// ACTION CREATORS
export function originalUrlInputFunc(e) {
  return {
    type: NEW_SHORT_URL_INPUT,
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

// EXPORT DEFAULT
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_SHORT_URL_INPUT:
      return Object.assign({}, state, { originalUrlInput: action.payload });

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

    default:
      return state;
  }
}

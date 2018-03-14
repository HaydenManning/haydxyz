import axios from "axios";

// INITIAL STATE
const initialState = {
  user: [],
  originalUrlInput: "",
  newShort: "",
  f_name: "",
  l_name: "",
  email: "",
  auth_id: "",
  auth_status: false
};

// CONST
const NEW_SHORT_URL_INPUT = "NEW_SHORT_URL_INPUT";
const NEW_SHORT_URL_CREATION = "NEW_SHORT_URL_CREATION";
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

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .request({ url: "/api/me" })
      .then(res => res.data)
      .catch(err => err.message)
  };
}

// EXPORT DEFAULT
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_SHORT_URL_INPUT:
      return Object.assign({}, state, { originalUrlInput: action.payload });

    case `${NEW_SHORT_URL_CREATION}_FULFILLED`:
      console.log(action.payload, "PAYLOAD");
      return Object.assign({}, state, { newShort: action.payload });

    case `${GET_USER}_FULFILLED`:
      console.log(action.payload);
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
}

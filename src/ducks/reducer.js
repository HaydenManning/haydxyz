import axios from "axios";

// INITIAL STATE
const initialState = {
  user: {},
  newShortUrlInput: "",
  newShortUrl: ""
};

// CONST
const NEW_SHORT_URL_INPUT = "NEW_SHORT_URL_INPUT";
const NEW_SHORT_URL_CREATION = "NEW_SHORT_URL_CREATION";

// ACTION CREATORS
export function newShortUrlInputFunc(e) {
  return {
    type: NEW_SHORT_URL_INPUT,
    payload: e
  };
}

export function createNewShortUrl(original) {
  console.log(original, "NEW");
  return {
    type: NEW_SHORT_URL_CREATION,
    payload: axios
      .post("/api/url/test", { original })
      .then(response => {
        console.log(response.data.short_url, "NEW RESPONSE");
        return response.data.short_url;
      })
      .catch(console.log)
  };
}

// EXPORT DEFAULT
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_SHORT_URL_INPUT:
      return Object.assign({}, state, { newShortUrlInput: action.payload });

    case `${NEW_SHORT_URL_CREATION}_PENDING`:
      return;
    case `${NEW_SHORT_URL_CREATION}_FULFILLED`:
      return Object.assign({}, state, { newShortUrl: action.payload });
    case `${NEW_SHORT_URL_CREATION}_REJECTED`:
      return;

    default:
      return state;
  }
}
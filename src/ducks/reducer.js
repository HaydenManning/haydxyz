import axios from "axios";

// CONST
//mock
const MOCK_TYPE = "MOCK_TYPE";

const NEW_SHORT_URL_INPUT = "NEW_SHORT_URL_INPUT";
const NEW_SHORT_URL_CREATION = "NEW_SHORT_URL_CREATION";

// ACTION CREATORS
// mock
export function mockFunc() {
  return {
    type: MOCK_TYPE,
    payload: "this is a fake payload"
  };
}

export function newShortUrlInputFunc(e) {
  return {
    type: NEW_SHORT_URL_INPUT,
    payload: e
  };
}

export function createNewShortUrl() {
  return {
    type: NEW_SHORT_URL_CREATION,
    payload: "PLACEHOLDER" //axios request
  };
}

// INITIAL STATE
const initialState = {
  user: {},
  newShortUrlInput: "",
  newShortUrl: ""
};

// EXPORT DEFAULT
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_SHORT_URL_INPUT:
      return Object.assign({}, state, { newShortUrlInput: action.payload });

    case NEW_SHORT_URL_CREATION:
      return Object.assign({}, state, {
        newShortUrl: action.payload
      });

    default:
      return state;
  }
}

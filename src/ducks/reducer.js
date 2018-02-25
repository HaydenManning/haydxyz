import axios from "axios";

// CONST

//mock
const MOCK_TYPE = "MOCK_TYPE";

// ACTION CREATORS

// mock
export function mockFunc() {
  return {
    type: MOCK_TYPE,
    payload: "this is a fake payload"
  };
}

// INITIAL STATE
const initialState = {
  user: {}
};

// EXPORT DEFAULT
export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

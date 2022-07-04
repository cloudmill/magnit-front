import { createStore } from "redux";

interface State {
  openModal: string | false;
}

enum Actions {
  OPEN_MODAL,
  CLOSE_MODAL,
}

const initialState: State = {
  openModal: false,
};

const reducer = (state: State = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload,
      };
    case Actions.CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const open = (modalName = "form") => ({
  type: Actions.OPEN_MODAL,
  payload: modalName,
});

const close = () => ({
  type: Actions.CLOSE_MODAL,
});

export { store, open, close };

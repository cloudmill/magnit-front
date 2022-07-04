import { createStore } from "redux";

interface State {
  isOpen: boolean;
}

enum Actions {
  OPEN_MODAL,
  CLOSE_MODAL,
}

const initialState: State = {
  isOpen: false,
};

const reducer = (state: State = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case Actions.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

const open = () => ({
  type: Actions.OPEN_MODAL,
});

const close = () => ({
  type: Actions.CLOSE_MODAL,
});

export { store, open, close };

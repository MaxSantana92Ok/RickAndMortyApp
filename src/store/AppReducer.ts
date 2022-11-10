import {App_Store, Page, Result} from '../interface/interface';

export const initialState: App_Store = {
  list: [],
  page: {
    count: 0,
    pages: 0,
    next: '',
    prev: '',
  },
};
type AppAction = {type: 'setPageList'; payload: Page} | {type: 'setCharacterList'; payload: Result};

export const AppReducer = (state: App_Store, action: AppAction): App_Store => {
  switch (action.type) {
    case 'setPageList':
      return {
        ...state,
        /* userData: action.payload, */
      };
    case 'setCharacterList':
      return {
        ...state,
        /* userData: action.payload, */
      };

    default:
      return state;
  }
};

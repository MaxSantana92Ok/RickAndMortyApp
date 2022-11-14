import {App_Store, Info, Result} from '../interface/interface';

export const initialState: App_Store = {
  list: [],
  page: {
    count: 0,
    next: '',
    pages: 0,
    prev: '',
  },
  character1: null,
  character2: null,
};
type AppAction =
  | {type: 'setPageList'; payload: Info}
  | {type: 'setCharacterList'; payload: Result[]}
  | {type: 'setCharacter1'; payload: Result}
  | {type: 'setCharacter2'; payload: Result};

export const AppReducer = (state: App_Store, action: AppAction): App_Store => {
  switch (action.type) {
    case 'setPageList':
      return {
        ...state,
        page: action.payload,
      };
    case 'setCharacterList':
      return {
        ...state,
        list: action.payload,
      };
    case 'setCharacter1':
      return {
        ...state,
        character1: action.payload,
      };
    case 'setCharacter2':
      return {
        ...state,
        character2: action.payload,
      };
    default:
      return state;
  }
};

import {createContext} from 'react';
import {Result, Info, App_Store} from '../interface/interface';

export type AppContextProps = {
  appStore: App_Store;
  setCharacterList_Store: (list: Result[]) => void;
  setPageList_Store: (info: Info) => void;
  setCharacter1_Store: (character: Result) => void;
  setCharacter2_Store: (character: Result) => void;
};
export const AppContext = createContext<AppContextProps>({} as AppContextProps);

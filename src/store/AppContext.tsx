import {createContext} from 'react';
import {Result, Page, App_Store} from '../interface/interface';

export type AppContextProps = {
  appStore: App_Store;
  setCharacterList: (list: Result) => void;
  setPageList: (info: Page) => void;
};
export const AppContext = createContext<AppContextProps>({} as AppContextProps);

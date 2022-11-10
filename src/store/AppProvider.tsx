import {useReducer} from 'react';
import {Page, Result} from '../interface/interface';
import {AppContext} from './AppContext';
import {AppReducer, initialState} from './AppReducer';

interface appProps {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({children}: appProps) => {
  const [appStore, dispatch] = useReducer(AppReducer, initialState);

  const setCharacterList = (id: Result) => {
    dispatch({type: 'setCharacterList', payload: id});
  };
  const setPageList = (id: Page) => {
    dispatch({type: 'setPageList', payload: id});
  };
  return (
    <AppContext.Provider
      value={{
        appStore,
        setCharacterList,
        setPageList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

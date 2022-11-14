import {useReducer} from 'react';
import {Info, Result} from '../interface/interface';
import {AppContext} from './AppContext';
import {AppReducer, initialState} from './AppReducer';

interface appProps {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({children}: appProps) => {
  const [appStore, dispatch] = useReducer(AppReducer, initialState);

  const setCharacterList_Store = (list: Result[]) => {
    dispatch({type: 'setCharacterList', payload: list});
  };
  const setPageList_Store = (id: Info) => {
    dispatch({type: 'setPageList', payload: id});
  };
  const setCharacter1_Store = (character: Result) => {
    dispatch({type: 'setCharacter1', payload: character});
  };
  const setCharacter2_Store = (character: Result) => {
    dispatch({type: 'setCharacter2', payload: character});
  };
  return (
    <AppContext.Provider
      value={{
        appStore,
        setCharacterList_Store,
        setPageList_Store,
        setCharacter1_Store,
        setCharacter2_Store,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

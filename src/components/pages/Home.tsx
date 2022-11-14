import {useContext, useLayoutEffect, useState} from 'react';
import {AppContext} from '../../store/AppContext';
import useSWR from 'swr';
import {Box} from '@mui/system';
import CardItem from '../organism/CardItem';
import {Result} from '../../interface/interface';
import './Home.css';
import Paging from '../organism/Paging';

interface Characters {
  first: Result[];
  second: Result[];
}

const Home = () => {
  const {appStore, setCharacterList_Store, setPageList_Store} = useContext(AppContext);
  const {list, page} = appStore;
  const [characters, setCharacters] = useState<Characters>({
    first: [],
    second: [],
  });
  const [goPage, setGoPage] = useState(1);
  let {data, isValidating} = useSWR(`/character/?page=${goPage}`);

  const handleGetPage = (page: number) => {
    console.log('Handle PAge', page);
    setGoPage(page);
  };

  useLayoutEffect(() => {
    if (data) {
      setCharacterList_Store(data.results);
      setPageList_Store(data.info);
    }
    if (list.length > 0) {
      const half = Math.floor(list.length / 2);
      setCharacters({
        first: list.slice(0, half),
        second: list.slice(half),
      });
    }
    return () => {};
  }, [list.length]);

  return (
    <Box>
      <Box className="Box-Character-List">
        <Box display="flex" flexDirection="column" width="100%" p={1}>
          {characters.first?.map((item, index) => {
            return (
              <Box margin={1} key={index}>
                <CardItem item={item} type="one" />
              </Box>
            );
          })}
        </Box>
        <Box display="flex" flexDirection="column" width="100%" p={1}>
          {characters.second?.map((item, index) => {
            return (
              <Box margin={1} key={index}>
                <CardItem item={item} type="two" />
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className="Box-Pagination">
        <Paging getPage={handleGetPage} cant={page.pages} isDisabled={isValidating} />
      </Box>
    </Box>
  );
};

export default Home;

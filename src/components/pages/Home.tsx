import {Suspense, useContext, useEffect, useState} from 'react';
import {AppContext} from '../../store/AppContext';
import useSWR from 'swr';
import {Box} from '@mui/system';
import CardItem from '../organism/CardItem';
import {Result} from '../../interface/interface';
import './Home.css';
import Paging from '../organism/Paging';
import {Typography} from '@mui/material';
import EpisodeItem from '../organism/EpisodeItem';
import Loading from '../atoms/Loading';

interface Characters {
  first: Result[];
  second: Result[];
}

const Home = () => {
  const {appStore, setCharacterList_Store, setPageList_Store} = useContext(AppContext);
  const {list, page, character1, character2} = appStore;
  const [characters, setCharacters] = useState<Characters>({
    first: [],
    second: [],
  });
  const [goPage, setGoPage] = useState(1);

  let {data, isValidating, error} = useSWR(
    `https://rickandmortyapi.com/api/character?page=${goPage}`
  );

  const handleGetPage = (n: number) => {
    setGoPage(n);
  };

  useEffect(() => {
    if (!error) {
      if (data) {
        setCharacterList_Store(data.results);
        setPageList_Store(data.info);
      }
      if (data) {
        const half = Math.floor(data.results.length / 2);
        setCharacters({
          first: data.results.slice(0, half),
          second: data.results.slice(half),
        });
      }
    }

    return () => {};
  }, [data, error]);

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" height="100vh">
        <Typography variant="h3"> Sorry, no fun at the moment!</Typography>
      </Box>
    );
  }

  if (!error) {
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
        <Box className="Box-Episodes">
          <Suspense fallback={<Loading />}>
            {character1 && (
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">{character1.name}</Typography>
                {character1.episode.map((epi, index) => {
                  return <EpisodeItem key={index} episode={epi} />;
                })}
              </Box>
            )}
            {character2 && (
              <Box display="flex" flexDirection="column">
                <Typography variant="h6">{character2.name}</Typography>
                {character2.episode.map((epi, index) => {
                  return <EpisodeItem key={index} episode={epi} />;
                })}
              </Box>
            )}
          </Suspense>
        </Box>
      </Box>
    );
  }
  return <></>;
};

export default Home;

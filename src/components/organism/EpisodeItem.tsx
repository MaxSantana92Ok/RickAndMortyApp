import {Box, Typography} from '@mui/material';
import useSWR from 'swr';
interface props {
  episode: string;
}
const EpisodeItem = ({episode}: props) => {
  let {data, isValidating, error} = useSWR(`${episode}`);
  console.log('EPISODE DATA:', data);
  return (
    <Box display="flex" m={1}>
      <Typography variant="body1">{data.name}</Typography>
    </Box>
  );
};

export default EpisodeItem;

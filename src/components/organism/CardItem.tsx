import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Box, Button, CardMedia, Typography} from '@mui/material';
import {Result} from '../../interface/interface';
import {useContext} from 'react';
import {AppContext} from '../../store/AppContext';

interface props {
  item: Result;
  type: string;
}
const CardItem = ({item, type}: props) => {
  const {setCharacter1_Store, setCharacter2_Store} = useContext(AppContext);
  const handleClick = () => {
    if (type === 'one') {
      setCharacter1_Store(item);
    }
    if (type === 'two') {
      setCharacter2_Store(item);
    }
  };
  return (
    <Button fullWidth>
      <Card sx={{display: 'flex', width: '100%'}} onClick={handleClick}>
        <CardMedia
          component="img"
          sx={{width: 151}}
          image={item.image}
          alt="Live from space album cover"
        />
        <Box
          sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
          width="100%"
          height={'100%'}
        >
          <CardContent sx={{flex: '1 0 auto'}}>
            <Box width={'100%'}>
              <Typography variant="h6">{item.name}</Typography>
            </Box>
            <Box display={'flex'}>
              <Box width={'100%'}>
                <Typography variant="subtitle1">Status</Typography>
              </Box>
              <Box width={'100%'}>
                <Typography variant="body1">{item.status}</Typography>
              </Box>
            </Box>
            <Box display={'flex'} width="100%" justifyContent="space-between">
              <Box width={'100%'}>
                <Typography variant="subtitle1">Species</Typography>
              </Box>
              <Box width={'100%'}>
                <Typography variant="body1">{item.species}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Button>
  );
};

export default CardItem;

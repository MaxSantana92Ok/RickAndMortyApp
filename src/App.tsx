import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  return (
    <>
      <Typography variant="h3">Hellow World</Typography>
      <Typography variant="h6">Hellow World</Typography>
      <Typography variant="subtitle1">Hellow World</Typography>
      <Typography variant="body1">Hellow World</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="outlined" color="secondary">
          Contained
        </Button>
        <Button variant="text" color="primary">
          Text
        </Button>
        <Button variant="text" color="neutral">
          Text
        </Button>
        <Button variant="contained" color="success">
          Outlined
        </Button>
        <Button variant="contained" color="error">
          Outlined
        </Button>
      </Stack>
    </>
  );
}

export default App;

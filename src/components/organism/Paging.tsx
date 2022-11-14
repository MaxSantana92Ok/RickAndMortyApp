import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
interface props {
  getPage: (page: number) => void;
  cant?: number;
  isDisabled?: boolean;
}
const Paging = ({getPage, cant, isDisabled}: props) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={cant}
        color="primary"
        defaultPage={1}
        onChange={(e, page) => getPage(page)}
        disabled={isDisabled}
      />
    </Stack>
  );
};

export default Paging;

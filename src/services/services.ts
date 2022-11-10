import API from '../api/config';
import {request_props} from '../interface/interface';

export const getCharacter_Service = (n?: request_props) =>
  API({method: 'get', url: `/character/?page=${n}`})
    .then(res => console.log(res))
    .catch(err => console.log(err));

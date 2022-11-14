import API from '../api/config';
import {Request_props} from '../interface/interface';

export const getCharacter_Service = (n?: Request_props) =>
  API({method: 'get', url: `/character/?page=${n}`})
    .then(res => {
      return res.data;
    })
    .catch(err => err);

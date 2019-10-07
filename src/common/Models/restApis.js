import Axios from 'axios';

const GET = (url, { success, error }) => {
    Axios.get(`http://orderkw.tk/api/${url}`)
        .then(success)
        .catch(error)
};
export {GET};
import axios from 'axios';
import { base_url } from '../../utils/base_url';


const getProducts = async () => {
    const response = await axios.get(`${base_url}brand/`);

    return response.data;
};



const brandService = {
    getProducts,
};

export default brandService;
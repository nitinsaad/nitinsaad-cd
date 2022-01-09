import axios from 'axios';
export const getBuildingList = () =>{    
    return axios.get('../test_units_data.json')
}

export const getFilterList = () =>{    
    return axios.get('../test_fliter_options.json')
}

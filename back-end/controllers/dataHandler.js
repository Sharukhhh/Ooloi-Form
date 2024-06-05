import {data} from '../utils/jsonData.js';

export const getJsonData = async (req, res) => {

    try {
        
        return res.status(200).json({message: 'success' , data});

    } catch (error) {
        console.log(error);
        return res.status(505).json({error : 'Server Error'});
    }
}
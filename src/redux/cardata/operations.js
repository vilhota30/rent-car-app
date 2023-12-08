import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65709ca809586eff6641b493.mockapi.io/api';

export const fetchDataCars = createAsyncThunk(
    'cars/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(axios.defaults.baseURL+'/adverts');
            return response.data;
            console.log(response.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);





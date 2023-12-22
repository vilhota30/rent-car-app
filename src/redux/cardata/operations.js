import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { BASE_URL } from 'components/config';

export const BASE_URL = 'https://65709ca809586eff6641b493.mockapi.io/api/adverts';
export const BASE_URL2 = 'https://65709ca809586eff6641b493.mockapi.io/api/makes';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async ({ params }, { reject }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/?sortBy=rentalPrice${params}`);
        return response.data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
  // async (_, { rejectWithValue }) => {
  //   try {
  //     const response = await axios.get(BASE_URL);
  //     // console.log(response);
  //     return response.data;
  //   } catch (error) {
  //     return rejectWithValue(error.message);
  //   }
  // }


  export const getCarModel = createAsyncThunk(
    'adverts/brandes',
    async (_, { reject }) => {
      try {
        const response = await axios.get(BASE_URL2);
        // const brands = response.data;
         const brands = response.data.map(brand => {
           return { value: brand, label: brand };
         });
        console.log(brands);
        return brands;
      } catch (error) {
        return reject(error.message);
      }
    }
  );



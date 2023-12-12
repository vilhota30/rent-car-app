import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'components/config';

export const fetchAdverts = createAsyncThunk(
    'adverts/adverts',
    async (params, { reject }) => {
      try {
        const response = await axios.get(`${BASE_URL}/adverts/?${params}`);
        return response.data;
      } catch (error) {
        return reject(error.message);
      }
    }
  );
  

  export const getCarModel = createAsyncThunk(
    'adverts/brandes',
    async (_, { reject }) => {
      try {
        const response = await axios.get(`${BASE_URL}/makes`);
        const brands = response.data.map(brand => {
          return { value: brand, label: brand };
        });
        return brands;
      } catch (error) {
        return reject(error.message);
      }
    }
  );


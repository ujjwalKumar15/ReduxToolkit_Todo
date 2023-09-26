import {configureStore} from '@reduxjs/toolkit';
import todoSlicer from './todoSlice';

export const store  = configureStore({
      reducer:todoSlicer
})
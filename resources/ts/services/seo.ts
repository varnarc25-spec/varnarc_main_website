// resources/ts/services/api.ts

import axios from 'axios';
import type { MetaData } from '../models/metadata'

const api = axios.create({
  baseURL: '/api', // adjust as needed (e.g., '/api/v1')
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export const fetchSeoAudit = async () => {
    try {
      const response = await axios.post('/api/websites/crawl-meta', {
        url: "optymoney.com",
        keyinput: '',
        pageContent: '',
        return: true,
      })
      console.log(response);
      MetaData.value = response.data
      return "Test";
    } catch (error) {
        console.error('Error fetching users:', error)
        throw error
    }
}


export default api;

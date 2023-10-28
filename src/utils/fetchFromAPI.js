import axios from 'axios';

const Base_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
     params: {
      maxResults: '50',
  
    },
    headers: {
      'X-RapidAPI-Key': '1a6c1953cfmsh4c250954dc9f0e6p10bd44jsnfbc049c53d69',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async(url) => {
   const { data } = await axios.get(`${Base_URL}/${url}`, options);

   return data;
  }
  
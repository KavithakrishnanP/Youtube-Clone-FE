

    import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '258e0c1938mshf1534a9ebb4fdedp1bf964jsn169278b52a87',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const getVideosFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


    

import http from "../http";
const GIPHY_API_KEY = '9xMtKkzzfuOzKIQnBNBqMXyebHzfLclo'

const fetchGifs = (offset, keyword) => {
  return http.get('/search', {
    params: {
      limit: 12,
      q: keyword,
      offset,
      api_key: GIPHY_API_KEY
    }
  });
};

export default {
  fetchGifs
};
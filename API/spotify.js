const axios = require('axios');

const clientId = '7318cf7423a14ec0b34114fac350bcf5';
const clientSecret = '93ddd2c30ba84832b2daddaf6efea339';
// const playlistId = '5W5SURyP3ROB2dLjPCFpUk';

const getToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const basicAuthHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const config = {
    headers: {
      'Authorization': `Basic ${basicAuthHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const data = 'grant_type=client_credentials';

  try {
    const response = await axios.post(tokenUrl, data, config);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error.message);
    throw error;
  }
};

const getPlaylistItems = async (playlistId) => {
  var storeSong = [];
  try {
    const accessToken = await getToken();

    const apiUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.get(apiUrl, config);
    const tracks = response.data.items;

    // Extract and log song titles
    tracks.forEach(track => {
      const songTitle = track.track.name;
      storeSong.push(songTitle);
      
    });
  } catch (error) {
    console.error('Error:', error.message);
    console.error('Response:', error.response.data);
  }
  return storeSong;
};

module.exports = getPlaylistItems;
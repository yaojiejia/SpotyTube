const { google } = require('googleapis');
const API_KEY = 'AIzaSyC0uWf86rqWERMw9Nzp-TfEnu1xok9zK4E'; // Replace with your actual API key

const searchYouTube = async(query) =>{
  const youtube = google.youtube({
    version: 'v3',
    auth: API_KEY,
  });

  try {
    const response = await youtube.search.list({
      part: 'snippet',
      q: query,
      maxResults: 1, // Get only the first result
    });

    const firstVideo = response.data.items[0];
    if (!firstVideo) {
      console.log('No videos found.');
      return null;
    }

    const videoId = firstVideo.id.videoId;
    const videoLink = `https://www.youtube.com/watch?v=${videoId}`;

    return videoLink;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}


module.exports = searchYouTube;
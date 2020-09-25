import axios from 'axios';

const KEY ='AIzaSyCOQjrCw6C6Cfp_Kn73tw7zNt94G0Xqz9U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

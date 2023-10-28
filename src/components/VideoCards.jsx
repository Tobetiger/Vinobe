import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


 
const VideoCards = ({video: { id: {videoId }, snippet}}) => {

  return (

    
    <Card>

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: 275, height: 180 }}
        />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '0.1px' }}  />
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" backgroundColor="#1e1e1e" color="#FFF">
            
            {snippet?.title.slice(0, 30,) || demoVideoTitle.slice(0, 40)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" backgroundColor="#1e1e1e" color="gray">
            
            {snippet?.channelTitle.slice(0, 30,) || demoChannelTitle.slice(0, 30)}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px', xs: '20px'  }}  />
          </Typography>
        </Link>

       </Card>
  )
}

export default VideoCards

import { Stack, Box } from '@mui/material'
import { VideoCards } from './';


const Videos1 = ({ videos }) => {
  return (
   <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={1}>
    {videos.map((item, idx) => (
      <Box key={idx}>
        {item.id.videoId && <VideoCards video={item} />}
        
        </Box>
    ))}

   </Stack>
  )
}

export default Videos1

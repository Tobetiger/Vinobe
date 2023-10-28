import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar1, Feed, SearchFeed, VideoDetails, ChannelDetails } from './components';


const App = () => (

    <BrowserRouter>
      <Box sx={{ backgroundColor: '#141414' }}>
  <Navbar1 />
<Routes>
  <Route path="/" exact element={<Feed />} />
  <Route path="/video/:id" element={<VideoDetails />} />
  <Route path="/search/:searchTerm" element={<SearchFeed />} />
  <Route path="/channel/:id" element={<ChannelDetails />} />

</Routes>
      </Box>
    </BrowserRouter>
  );

export default App

import React, { useEffect,useState} from 'react';
import { Box, Stack,Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from "../utils/fetchFromAPI";


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(null);


fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
.then((data) => setVideos(data.items))
}, [selectedCategory]);

return (
<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
<Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid white", px: { sx: 0, md: 2 } }}>
  <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
  
  <Typography  sx={{ mt: 1.5,}}>
    Copyright © Media
  </Typography>
</Box>

<Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
  <Typography variant="h6" fontWeight="bold" mb={2}>
    {selectedCategory} 
  </Typography>

  <Videos videos={videos} />
</Box>
</Stack>
);
};

export default Feed;
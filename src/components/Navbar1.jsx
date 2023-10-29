import { Stack, colors } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';

import SearchBar from './SearchBar';
import { blue } from '@mui/material/colors';

const Navbar1 = () =>
(
    <Stack direction="row" alignItems="center" p={0.6} sx={{ position:'sticky', background: '#141414', top: 0, justifyContent: 'space-between' }}>
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
    <img src={logo} alt="logo" height={75} />
    
    </Link>
   <SearchBar />
  </Stack>
  )


export default Navbar1
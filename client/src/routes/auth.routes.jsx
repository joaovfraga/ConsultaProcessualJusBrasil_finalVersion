import { Routes, Route} from 'react-router-dom';

import { Search } from '../pages/Search';
import { ShowSearch } from '../pages/ShowSearch';

export function AuthRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/show/:cnj" element={<ShowSearch />} />
    </Routes>
  )
}
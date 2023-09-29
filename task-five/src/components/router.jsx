import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../auth/Signup';
import Video from '../pages/Video';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SignUp' element={<Signup />} />
            <Route path='/Video' element={<Video />} />
        </Routes>
    );
}
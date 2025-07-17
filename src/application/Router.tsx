import { Route, Routes } from 'react-router'
import LandingPage from '../pages/landingPage/LandingPage';

function AppRouter(){
    return (
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
        </Routes>
    )
}

export default AppRouter;

import Home from './HomeComponent'
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from './PortfolioComponent';
import ThreeDogsComponent from './PorfolioPages/ThreeDogsComponent';
export default function MainComponent () {

    return(
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/portfolio/threedogsecats' element={<ThreeDogsComponent />}/>
            </Routes>
            
        </div>
    )
}
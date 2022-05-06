
import Home from './HomeComponent'
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from './PortfolioComponent';
import HeaderWhite from './HeaderComponent';
import ThreeDogsComponent from './PorfolioPages/ThreeDogsComponent';
export default function MainComponent () {

    return(
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/portfolio/1' element={<ThreeDogsComponent />}/>
            </Routes>
            
        </div>
    )
}
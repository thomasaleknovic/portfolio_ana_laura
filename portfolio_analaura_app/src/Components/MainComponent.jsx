
import Home from './HomeComponent'
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from './PortfolioComponent';
import ThreeDogsComponent from './PorfolioPages/ThreeDogsComponent';
import TresMariasComponent from './PorfolioPages/TresMariasComponent';
import FrukiComponent from './PorfolioPages/FrukiComponent';
import ComtemComponent from './PorfolioPages/ComtemComponent';
import AmbevComponent from './PorfolioPages/AmbevComponent';
import Contact from './ContactComponent';
export default function MainComponent () {

    return(
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/portfolio/threedogsecats' element={<ThreeDogsComponent />}/>
                <Route path='/portfolio/tresmarias' element={<TresMariasComponent /> }/>
                <Route path='/portfolio/fruki' element={<FrukiComponent /> }/>
                <Route path='/portfolio/comtem' element={<ComtemComponent/> }/>
                <Route path='/portfolio/ambev' element={<AmbevComponent /> }/>
            </Routes>
            
        </div>
    )
}
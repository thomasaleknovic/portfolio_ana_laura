import { PORTFOLIODATA } from '../shared/PortfolioData.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './HeaderComponentMobile';



function RenderMenuItem ({data, onclick}){
    return(
        <div key={data.id} className="p-3"  >
            {
            <Link to={`/portfolio/${data.id}`} className="flex flex-col items-center relative">
                <div className='bg-black'>
                    <img src={data.cover} alt='' width={500} height={500} className="drop-shadow-lg hover:opacity-50 transition-opacity"></img>
                </div>
                <h2 className='mt-3 text-xl md:text-base font-semibold text-main-pink'>{data.name}</h2>
            </Link>}
        </div>
        
    )
}

export default function Portfolio () {

    const [projectData, setProjectData] = useState(PORTFOLIODATA)

    
    const menu = projectData.map((data) =>{
        return(
            <RenderMenuItem data={data} />
        )
    })
    

    return(
        <div>
            <Nav />
            <div className='bg-white max-h-full'>
                <div className=' p-10 bg-main-pink'>
                <div className='text-white text-center mx-auto md:w-3/5 sm:w-4/5 mt-20 mb-[15rem] '>
                        <h2 className='text-4xl font-bold mb-5'>Antes, essa sou eu...</h2>
                        <p className=''>Curiosa por tudo e ansiosa por aprender, tenho 21 anos, muita bagagem e muita vontade de viver muito mais. Amante das Redes Sociais e de tudo que faz nosso mundo girar, fale sobre qualquer trend que vou ter assunto por horas.</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-[50px] relative mt-[-16rem]'>
                    {menu}
                </div>
            </div>
        </div>
    )
}

import { PORTFOLIODATA } from '../../shared/PortfolioData';
import { useState } from 'react';
import HeaderPink from '../HeaderPinkComponent';
import ThreeDogsBanner from "/assets/Three Dogs/portfolio_threeDogs_main_banner.png";

export default function ThreeDogsComponent () {


    const [projectData, setProjectData] = useState(PORTFOLIODATA[0])

    return(

        <div>
            <HeaderPink />
            <div className='bg-white flex flex-col items-center text-gray-600 md:text-lg sm:text-base h-full'>
                <img src={projectData.banner} alt='' className="mt-10 mb-14"></img>
                <p>{projectData.description}</p>
                <div className='flex flex-row flex-wrap justify-center mt-10 p-4'>
                    {projectData.projects[0].images.map((photo) => {
                    return(
                        <img src={photo} alt='' height={220} width={220} className='p-2'/>
                        )})
                    }
                </div>
                <p className='w-2/4 my-14 text-center'>{projectData.projects[0].description}</p>
                <a href='https://www.instagram.com/tv/CO_Q_C1pm2U/?igshid=YmMyMTA2M2Y=' target="_blank" className='relative grid overflow-hidden mb-10 rounded-lg cursor-pointer'>
                    <img src={projectData.projects[0].imagesTwo} alt='' height={300} width={300} className=''/>
                    <p className='bg-main-pink p-3 text-white font-bold w-full self-end text-center absolute'>Assista ao vídeo</p>
                </a>
            </div>
        </div>
    );
}
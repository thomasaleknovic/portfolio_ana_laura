
import { PORTFOLIODATA } from '../../shared/PortfolioData';
import { useState } from 'react';
import Nav from '../HeaderComponentMobile';


export default function TresMariasComponent () {


    const [projectData, setProjectData] = useState(PORTFOLIODATA[1])

    return(

        <div>
            <Nav />
            <div className='bg-white flex flex-col items-center text-gray-600 md:text-lg sm:text-base h-full pt-20'>
                <img src={projectData.banner} alt='' className="mt-10 mb-10"></img>
                <p className='w-3/4 my-14 text-center'>{projectData.projects[0].description}</p>
                <a href='https://www.instagram.com/tv/COp5lUZA1sU/?igshid=YmMyMTA2M2Y=' target="_blank" className='relative grid overflow-hidden mb-10 rounded-lg cursor-pointer shadow-xl w-4/5 sm:w-auto '>
                        <img src={projectData.projects[0].images} alt=''  width={500} className='-mb-2'/>
                        <p className='bg-main-pink p-3 text-white font-bold w-full self-end text-center absolute'>Assista ao vídeo</p>
                    </a>
                <div className='flex flex-row flex-wrap justify-center mt-10 p-4'>
                    {projectData.projects[0].imagesTwo.map((photo) => {
                    return(
                        <img src={photo} alt='' height={220} width={220} className='p-2 shadow-lg'/>
                        )})
                    }
                </div>
                <p className='w-3/4 my-14 text-center'>{projectData.projects[0].description}</p>
                <div className='flex justify-center w-4/5 sm:w-auto'>
                    <a href='https://www.instagram.com/reel/CMVUNDqgYDE/?igshid=YmMyMTA2M2Y=' target="_blank" className='relative grid overflow-hidden mb-10 mr-10 rounded-lg cursor-pointer'>
                        <img src={projectData.projects[1].images[0]} alt='' height={484} width={300} className=''/>
                        <p className='bg-main-pink p-3 text-white font-bold w-full self-end text-center absolute'>Assista ao vídeo</p>
                    </a>
                    <div className='overflow-hidden mb-10 rounded-lg shadow-xl'>
                        <img src={projectData.projects[1].images[1]} alt='' height={484} width={300} className=''/>
                        
                    </div>
                  
                </div>
            </div>
        </div>
    );
}
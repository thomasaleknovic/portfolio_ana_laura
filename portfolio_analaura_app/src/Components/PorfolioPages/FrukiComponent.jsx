
import { PORTFOLIODATA } from '../../shared/PortfolioData';
import { useState } from 'react';
import Nav from '../HeaderComponentMobile';


export default function FrukiComponent () {


    const [projectData, setProjectData] = useState(PORTFOLIODATA[3])

    return(

        <div>
            <Nav />
            <div className='bg-white flex flex-col justify-center items-center text-gray-600 md:text-lg sm:text-base h-full pt-20'>
                <img src={projectData.banner} alt='' className="mt-10 mb-14"></img>
                <p className='text-center w-3/4'>{projectData.description}</p>
                <div className='flex flex-row flex-wrap justify-center mt-10 p-4'>
                    {projectData.projects[0].images.map((photo) => {
                    return(
                        <img src={photo} alt='' height={220} width={220} className='md:mr-4 mt-4 shadow-lg rounded-lg'/>
                        )})
                    }
                </div>

                <p className='w-3/4 mt-5 mb-10= text-center'>{projectData.projects[0].description}</p>
                <div className='flex flex-row flex-wrap justify-center mt-10 p-4'>
                    {projectData.projects[1].images.map((photo) => {
                    return(
                        <img src={photo} alt='' height={220} width={220} className='md:mr-4 mt-4 shadow-lg rounded-lg'/>
                        )})
                    }
                </div>

                <p className='w-2/4 mt-5 mb-10 text-center'>{projectData.projects[1].description}</p>
                <div className='flex flex-row flex-wrap justify-around mt-10 p-4'>
                    {projectData.projects[2].images.map((photo) => {
                    return(
                        <img src={photo} alt='' height={220} width={220} className='md:mr-4 mt-4 shadow-lg rounded-lg'/>
                        )})
                    }
                </div>
                <p className='w-2/4 mt-5 mb-14 text-center'>{projectData.projects[2].description}</p>
                
            </div>
        </div>
    );
}

import { PORTFOLIODATA } from '../../shared/PortfolioData';
import { useState } from 'react';
import Nav from '../HeaderComponentMobile';


export default function AmbevComponent () {


    const [projectData, setProjectData] = useState(PORTFOLIODATA[2])

    return(

        <div>
            <Nav />
            <div className='bg-white flex flex-col items-center text-gray-600 md:text-lg sm:text-base h-full pt-20'>
                <img src={projectData.banner} alt='' className="mt-10 mb-14"></img>
                <p className='text-center w-3/4'>{projectData.description}</p>
                <div className='flex flex-row flex-wrap justify-center mt-10 p-4'>
                    <img src={projectData.images} alt='' height={300} width={300} className='mr-4 mt-4 mb-10 shadow-lg rounded-lg'/>
                </div>
                
            </div>
        </div>
    );
}
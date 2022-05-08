import HeaderWhite from "./HeaderComponent"
import Nav from './HeaderComponentMobile';


export default function Home () {

    return(
        <div className="md:backgroundGradient ">
            <Nav/>
            <div>

            </div>
            <div className="mt-20">
                <div className="flex flex-row flex-wrap items-center px-28  justify-between">
                    <div className="">
                        <img src="/assets/foto_ana_laura_650px.png" alt="" width={450} />
                    </div>
                    <div className="text-main-pink bg-secondary-color w-screen lg:bg-transparent">
                        <p className="text-[30px] font-thin italic -mb-2 ">Me chamo</p>
                        <p className="text-[50px] font-bold -mb-2">Ana Laura</p>
                        <p className="text-[30px] font-thin italic -mb-2">e esse é o meu portfólio de</p>
                        <p className="text-[50px] font-bold -mb-2">Digital Creative</p>
    
                    </div>
                </div>
            </div>
        </div>
    )


}

{/* <div className="text-[270px] font-extrabold text-white">
                    <p className="mb-[-170px]">HE</p>
                    <p className="mt-0">LLO.</p>
                  
                </div> */}

import { BsLightningFill } from "react-icons/bs";

import light from '../../assets/img/icons/light.svg'
import customer from '../../assets/img/icons/customer.svg'
import goal from '../../assets/img/icons/goal.svg'
import rocket from '../../assets/img/icons/rocket.svg'
import computer from '../../assets/img/icons/workstation.svg'
import global from '../../assets/img/icons/Globe.svg'

const CoreServices = () => {
    return (
        <>
            {/* content sec */}
            <div
                className='bg-red-200 w-1/2 text-left'>
                <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
                    Our Core Services
                </h1>
                <p className="text-[18px] font-light mb-6">
                    Enhances brand growth through expert IT services
                </p>
            </div>

            {/* cards sec*/}
            <div
                className='bg-blue-300 w-1/2 flex flex-col gap-2 py-5'>
                {/* cards rows 1 */}
                <div
                    className='bg-red-300 flex h-1/3 gap-3'>
                    {/* cards */}
                    <div
                        className='w-1/2 border-2 border-green-200 rounded-xl p-5 text-left flex flex-col gap-2'>
                        <div
                            className="h-1/5">
                            <img src={light} alt="" />
                        </div>
                        <div
                            className="h-2/5 flex items-end">
                            <p className='font-medium text-lg'>Shaping the Future with IT Excellence</p>
                        </div>
                        <div
                            className="h-2/5">
                            <p className="font-thin text-lg">Empowering brands to flourish online with cutting-edge IT solutions</p>
                        </div>
                    </div>
                    
                    <div
                        className='w-1/2 border-2 border-green-200 rounded-xl p-5 text-left flex flex-col gap-2'>
                        <div
                            className="h-1/5">

                            <img src={global} alt="" />
                        </div>
                        <div
                            className="h-2/5 flex items-end">
                            <p className='font-medium text-lg'>Transforming Ideas into Digital Marvels</p>
                        </div>
                        <div
                            className="h-2/5">
                            <p className="font-thin text-lg">Empowering Building digital marvels with tailored web solutions</p>
                        </div>
                    </div>
                </div>

                {/* cards rows 2 */}
                <div
                    className='bg-red-300 flex h-1/3 gap-3'>
                    {/* cards */}
                    <div
                        className='w-1/2 border-2 border-green-200 rounded-xl p-5 text-left flex flex-col gap-2'>
                        <div
                            className="h-1/5">
                            <img src={customer} alt="" />
                        </div>
                        <div
                            className="h-2/5 flex items-end">
                            <p className='font-medium text-lg'>Shaping the Future with IT Excellence</p>
                        </div>
                        <div
                            className="h-2/5">
                            <p className="font-thin text-lg">Empowering brands to flourish online with cutting-edge IT solutions</p>
                        </div>
                    </div>
                    
                    <div
                        className='w-1/2 border-2 border-green-200 rounded-xl p-5 text-left flex flex-col gap-2'>
                        <div
                            className="h-1/5">
                            <img src={rocket} alt="" />
                        </div>
                        <div
                            className="h-2/5 flex items-end">
                            <p className='font-medium text-lg'>Shaping the Future with IT Excellence</p>
                        </div>
                        <div
                            className="h-2/5">
                            <p className="font-thin text-lg">Empowering brands to flourish online with cutting-edge IT solutions</p>
                        </div>
                    </div>
                </div>

                {/* cards rows 3*/}
                <div
                    className='bg-red-300 flex h-1/3 gap-3'>
                    {/* cards */}
                    <div
                        className='w-1/2 border-2 border-green-200 rounded-xl p-5 text-left flex flex-col gap-2'>
                        <div
                            className="h-1/5">
                            <img src={computer} alt="" />
                        </div>
                        <div
                            className="h-2/5 flex items-end">
                            <p className='font-medium text-lg'>Shaping the Future with IT Excellence</p>
                        </div>
                        <div
                            className="h-2/5">
                            <p className="font-thin text-lg">Empowering brands to flourish online with cutting-edge IT solutions</p>
                        </div>
                    </div>
                    
                    <div
                        className='w-1/2 border-2 border-green-200 rounded-xl p-5 text-left flex flex-col gap-2'>
                        <div
                            className="h-1/5">
                            <img src={goal} alt="" />
                        </div>
                        <div
                            className="h-2/5 flex items-end">
                            <p className='font-medium text-lg'>Shaping the Future with IT Excellence</p>
                        </div>
                        <div
                            className="h-2/5">
                            <p className="font-thin text-lg">Empowering brands to flourish online with cutting-edge IT solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoreServices
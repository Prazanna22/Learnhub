import React, { useEffect, useState } from 'react'
import airbnb from '../assets/img/airbnb.png'
import microsoft from '../assets/img/microsoft.png'
import tailus from '../assets/img/tailus.png'
import lilly from '../assets/img/lilly.png'
import dashboard from '../assets/img/dashboard.png'
import coty from '../assets/img/coty.png'
import lifegroups from '../assets/img/Lifegroups.png'
import grabyo from '../assets/logo/grabyo.png'
import medal from '../assets/logo/medal.png'
import myob from '../assets/logo/myob.png'
import thought from '../assets/logo/thought.png'
import training from '../assets/logo/training.png'
import bgImage from '../assets/img/bg.svg';

export const HomePage = () => {
    const [totalStudents, setTotalStudents] = useState(0);
    const [placedStudents, setPlacedStudents] = useState(0);
    const [unplacedStudents, setUnplacedStudents] = useState(0);

    useEffect(() => {
        setTotalStudents(localStorage.getItem('totalStudents') || 0);
        setPlacedStudents(localStorage.getItem('placedStudents') || 0);
        setUnplacedStudents(localStorage.getItem('unplacedStudents') || 0);
    }, []);
    return (

        <>
            <div className=" bg-black ">
                <div className="flex flex-col justify-center items-center px-10 md:px-20 lg:px-32 py-20 bg-cover bg-center bg-"
                    style={{ backgroundImage: `url(${bgImage})` }}>
                    <h1 className='text-white font-bold text-4xl md:text-5xl xl:text-7xl sm:px-32 md:px-32 lg:px-32 xl:px-40 text-center'>
                        Learn from the best, be your best..
                    </h1>
                    <p className='text-md md:text-xl text-gray-400 my-10 sm:px-32 md:px-32 lg:px-32 xl:px-40 md:my-20 text-center'>
                        Give yourself an upgrade with our inspiring online courses and join a global community of learners
                    </p>
                    <button className='px-5 py-2 bg-yellow-400 font-medium rounded-full'>Get Started</button>
                </div>


                <div className="flex justify-center items-center flex-col px-10 md:px-20 lg:px-32  sm:border-b-0 border-b-2 bg-gradient-to-b from-[#16140e] to-black sm:border-white py-20 ">
                    <h1 className='text-white font-bold text-3xl md:text-5xl lg:w-[900px] text-center mb-20 md:mt-20'>Our Placement Partners</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  md:gap-x-32 gap-x-16 gap-y-14 ">
                        <img src={airbnb} className='w-40' alt="image" />
                        <img src={grabyo} className='w-40' alt="image" />
                        <img src={lifegroups} className='w-40' alt="image" />
                        <img src={myob} className='w-40' alt="image" />
                        <img src={tailus} className='w-40' alt="image" />
                        <img src={microsoft} className='w-40' alt="image" />
                        <img src={coty} className='w-40' alt="image" />
                        <img src={lilly} className='w-40' alt="image" />
                    </div>
                    <button className='px-10 py-1 bg-[#C8FC02] rounded-full mt-10'>and ,more<br/>companies</button>
                </div>

                <div className="text-white flex justify-center flex-col items-center py-20 px-10 md:px-20 lg:px-32 sm:border-b-0 border-b-2 sm:border-white">
                    <p className='text-[#7ACDF5] font-semibold text-md md:text-xl lg:w-[900px] text-center '>Open Source Theme and UI Components</p>
                    <h1 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl  lg:w-[600px] text-center my-10'>Geaux Astro helps you craft beautiful websites efficiently</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center  ">

                        <div className="my-10">
                            <div className="flex gap-5 items-center  ">
                                <div>
                                    <img src={medal} alt="image" className='w-10' />
                                </div>
                                <div>
                                    <h4 className='font-medium text-lg '>Certificate Distribution</h4>
                                    <p className='text-md font-light '>We offer certificates to validate and recognize your achievement.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center my-12 ">
                                <div>
                                    <img src={thought} alt="image" className='w-10' />
                                </div>
                                <div>
                                    <h4 className='font-medium text-lg '>Knowledge</h4>
                                    <p className='text-md font-light '>We deliver transformative knowledge that empowers and inspires.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div>
                                    <img src={training} alt="image" className='w-10' />
                                </div>
                                <div className='text'>
                                    <h4 className='font-medium text-lg '>Hands-on Experience</h4>
                                    <p className='text-md font-light '>We provide hands-on experience for real-world learning. You learn best by doing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={dashboard} alt="image" />
                        </div>
                    </div>
                </div>

                <div className="text-white grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 lg:px-32 gap-10 py-20 sm:border-b-0 border-b-2 sm:border-white">
                    <div className="">
                        <h1 className='font-bold text-3xl md:text-5xl'>Empower your future with cutting-edge skills
                            New, Embrace innovation, master technology, & shape the digital world
                            Your journey to success starts here.</h1>
                    </div>
                    <div className="text-justify ">
                        <div className="font-normal text-xl md:text-2xl">
                            <p>Join our course with a proven track record of success, where learning isn't just about gaining skills;
                                it's about growing them. Join us, learn with confidence, and watch your skills soar.</p>
                        </div>
                        <div className="flex gap-5 md:gap-10 justify-evenly items-center my-10 ">
                            <div className="text-center">
                                <h2 className='py-1 px-2 md:px-5 text-xs md:text-sm bg-[#d0ff27] text-black rounded-full font-medium my-5'>Total Students</h2>
                                <p className='font-bold text-3xl md:text-5xl'>{totalStudents}</p>
                            </div>
                            <div className="text-center">
                                <h2 className='py-1 px-2 md:px-5 text-xs md:text-sm bg-[#d0ff27] text-black rounded-full font-medium my-5'>Placed Students</h2>
                                <p className='font-bold text-3xl md:text-5xl'>{placedStudents}</p>
                            </div>
                            <div className="text-center">
                                <h2 className='py-1 px-2 md:px-5  text-xs md:text-sm bg-[#d0ff27] text-black rounded-full font-medium my-5'>Unplaced Students</h2>
                                <p className='font-bold  text-3xl md:text-5xl'>{unplacedStudents}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-white px-10 md:px-20 lg:px-32 gap-10 py-20 text-center">
                    <h1 className='font-extrabold text-3xl text-[#d0ff27] mb-5'>LearnHub</h1>
                    <p className='text-gray-500 mb-5'>© 2022 Tailwind Labs Inc. All rights reserved.</p>
                    <div className="flex gap-5 justify-center items-center">
                        <p>Form</p>
                        <p>|</p>
                        <p>Notes</p>
                    </div>
                </div>
            </div>
        </>
    )
}

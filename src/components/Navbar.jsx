import { useNavigate } from 'react-router-dom'
export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="sticky top-0 md:top-4 z-10 md:px-20 lg:px-32 md:my-4 bg-black backdrop-blur-lg  bg-opacity-50 ">
                <div className="flex justify-between  md:rounded-full items-center px-6 py-2  border ">
                    <h1 className='font-extrabold text-2xl md:text-3xl text-[#d0ff27] cursor-default 'onClick={()=>navigate('/')}>LearnHub</h1>
                    <h1 className='text-white cursor-pointer' onClick={() => navigate('/admin')}>Admin</h1>
                </div>
            </div>
        </>
    )
}
import React from 'react'

export const StudentDetails = ({ allDetails, handleDelete }) => {


  return (


    <>
      <div className='bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-10 md:px-20 gap-10 ' >
        {
          allDetails.map((student, index) => (

            <div className=" bg-white rounded-lg  p-5 " key={index}>
              <div className="flex items-center gap-6 mb-4">
                <h1 className='  w-12 h-12 rounded-full bg-[#d0ff27] text-white font-bold flex justify-center items-center' >{student.name.charAt(0).toUpperCase()}</h1>
                <h1 className='font-medium text-xl'> {student.name}</h1>
              </div>
              <div className="flex my-2">
                <label htmlFor="studentDetails" className='font-medium'>Role : </label>
                <h1 className='' > {student.role}</h1>
              </div>
              <div className="flex my-2">
                <label htmlFor="studentDetails" className='font-medium'>Email : </label>
                <h1 className=''> {student.email}</h1>
              </div>
              <div className="flex my-2">
                <label htmlFor="studentDetails" className='font-medium'>Phone number : </label>
                <h1 className='' > {student.mobile}</h1>
              </div>
              <div className="flex my-2">
                <label htmlFor="studentDetails" className='font-medium'> Course : </label>
                <h1 className=''> {student.course}</h1>
              </div>
              <div className="flex my-2">
                <label htmlFor="studentDetails" className='font-medium'> Status : </label>
                <h1 className=''> {student.status}</h1>
              </div>
              <button className='w-full py-2 bg-red-500 my-3 text-white rounded-md' onClick={() => handleDelete(index)}>Delete</button>
            </div>


          ))
        }
      </div>
    </>)
}



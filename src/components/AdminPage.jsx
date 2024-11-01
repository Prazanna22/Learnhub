import React, { useEffect, useState } from 'react';
import { StudentDetails } from './StudentDetails';

export const AdminPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [mobile, setMobile] = useState('');
    const [course, setCourse] = useState('');
    const [status, setStatus] = useState('');
    const [alldetails, setAllDetails] = useState(() => {
        const saved = localStorage.getItem('studentDetails');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('studentDetails', JSON.stringify(alldetails));
        const placedStudents = alldetails.filter(student => student.status === "Placed").length;
        const unplacedStudents = alldetails.length - placedStudents;

        localStorage.setItem('totalStudents', alldetails.length);
        localStorage.setItem('placedStudents', placedStudents);
        localStorage.setItem('unplacedStudents', unplacedStudents);
    }, [alldetails]);

    function handleSubmit() {
        if (!name || !email || !role || !course || !status || !mobile) {
            alert("Please fill out the form.");
            return;
        }

        const newDetails = { name, email, role, mobile, course, status };
        setAllDetails([...alldetails, newDetails]);

        setName('');
        setEmail('');
        setRole('');
        setMobile('');
        setCourse('');
        setStatus('');
    }

    function handleDelete(index) {
        setAllDetails(alldetails.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className="text-white bg-black px-10 md:px-20 lg:px-32">
                <h1 className="font-extrabold text-3xl text-[#d0ff27] text-center py-16">Fill This Form</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 text-black">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-extrabold text-3xl text-[#d0ff27]">Name:</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="py-6 rounded-md px-3 my-3 outline-none"
                            placeholder="Enter the Name"
                            autoComplete="name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="role" className="font-extrabold text-3xl text-[#d0ff27]">Role:</label>
                        <input
                            id="role"
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="py-6 rounded-md px-3 my-3 outline-none"
                            placeholder="Enter the Role"
                            autoComplete="organization-title"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-extrabold text-3xl text-[#d0ff27]">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="py-6 rounded-md px-3 my-3 outline-none"
                            placeholder="Enter the Email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mobile" className="font-extrabold text-3xl text-[#d0ff27]">Phone Number:</label>
                        <input
                            id="mobile"
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="py-6 rounded-md px-3 my-3 outline-none"
                            placeholder="Enter the Phone Number"
                            autoComplete="tel"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="course" className="font-extrabold text-3xl text-[#d0ff27]">Course:</label>
                        <select
                            id="course"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="text-black py-6 rounded-md px-3 my-3 outline-none"
                            autoComplete="off"
                        >
                            <option value="">Select a course</option>
                            <option value="React Basics">React Basics</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Javascript Fundamentals">Javascript Fundamentals</option>
                            <option value="Advanced CSS">Advanced CSS</option>
                            <option value="Backend Development">Backend Development</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="status" className="font-extrabold text-3xl text-[#d0ff27]">Status:</label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="py-6 rounded-md px-3 my-3 text-black outline-none"
                            autoComplete="off"
                        >
                            <option value="">Select the Status</option>
                            <option value="Unplaced">Unplaced</option>
                            <option value="Placed">Placed</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <button onClick={handleSubmit} className="py-3 border border-white px-8 rounded-full my-10">Submit</button>
                </div>
            </div>
            <StudentDetails allDetails={alldetails} handleDelete={handleDelete} />
        </>
    );
}

"use client";
//page.tsx
import React from "react";
import StudentCard from  "./component/StudentCard";

const students = [
  {
    name: "Amna Hasan",
    age: 16,
    rollNumber: "123456",
    className: "GIAIC",
    imageUrl: "/images/amna.jpeg",
    gender: "Female",
    city: "Karachi",
    phoneNumber: "0123-9876540",
    address: "R-987,Block 20, F.B Area, Karachi",
  },
  {
    name: "Saim  Khan",
    age: 20,
    rollNumber: "2964320",
    className: "BA",
    imageUrl: "/images/saim.jpeg",
    gender: "Male",
    city: "Karachi",
    phoneNumber: "0301-7432976",
    address: "79 Cliton Jamshad Road, Karachi",
  },
  {
    name: "Shoaib Ahmed",
    age: 29,
    rollNumber: "0740234",
    className: "M Com",
    imageUrl: "/images/shoaib.jpeg",
    gender: "Male",
    city: "Karachi",
    phoneNumber: "0310-7643098",
    address: "A-629, Dstagir F.B Area Karachi",
  },
];

export default function Home() {
  return (
    <div className="home">
      <h1 className="title text-center text-bold text-5xl text-transform: uppercase ">Student ID Cards</h1>
      <div className="student-cards">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>

      <style jsx>{`
        .home {
          text-align: center;
          padding: 20px;
        }
        .student-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `}</style><br />
      <div>
        <h2 className="text-center text-3xl font-bold text-b text-underline-offset: 8px text-transform: uppercase text-black-800 underline hover:underline-offset-4">
        Created by Ismat Zehra
        </h2>
      </div>
    </div>
    
  );
}
import { useState, useEffect } from "react";

import React from 'react'

const HomePage = () => {
    const [data, setData] = useState([]); //State to store JSON data

    useEffect(() => {
        fetch("./src/data.json")
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error("Error loading data:", error));
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Recipe Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl shadow-lg max-w-full">
                    <img src= {item.image} alt= {item.title} className="h-[200px] w-[200px] hover:shadow-lg "/>
                    <h2 className="sm:text-sm md:text-l lg:text-xl font-semibold mt-3 hover:shadow-lg">{item.title}</h2>
                    <p className="text-gray-600 mt-1">{item.summary}</p>
                </div>
            )
            )}
        </div>
    </div>
  )
}

export default HomePage
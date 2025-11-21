"use client"
import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copy, setcopy] = useState("copy")

  const handleGenerate = async() => {
    // For now just simulate short URL generation
    if (!url || !customAlias) return;

    const data = {
    url: url,  // fixed your URL (add https://)
    shorturl: customAlias
    };

    axios.post('/api/generate', data, {
    headers: { 'Content-Type': 'application/json' },})
    .then(response => {
    console.log(response.data);
    setShortUrl(`${process.env.NEXT_PUBLIC_HOST}/${customAlias}`)
    setCustomAlias("");
    setUrl("");
    })
    .catch(error => {
    console.error(error);
    });

  }

  return (
    <div className="min-h-screen animate-fadeIn flex flex-col items-center justify-center bg-red-50 px-4 py-16">
      <div className="bg-red-200 rounded-2xl shadow-lg p-10 w-full max-w-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-700 mb-6">Shorten Your URL</h1>
        
        {/* URL Input */}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full bg-red-300 rounded-lg p-3 mb-4 focus:outline-red-500 focus:ring-2 focus:ring-red-400 transition"
          placeholder="Paste your lengthy URL"
        />

        {/* Custom Alias Input */}
        <input
          type="text"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
          className="w-full bg-red-300 rounded-lg p-3 mb-6 focus:outline-red-500 focus:ring-2 focus:ring-red-400 transition"
          placeholder="Add Preferred short URL Text"
        />

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition shadow-md mb-4"
        >
          Generate
        </button>

        {/* Display Short URL */}
        {shortUrl && (
          <div className="w-full bg-red-100 rounded-lg p-3 text-red-800 font-medium flex justify-between items-center">
        
            <span><code><Link target="_blank" href={shortUrl}>{shortUrl}</Link></code></span>
            <button
              onClick={() => {navigator.clipboard.writeText(shortUrl) 
                setcopy("copied!")
                setTimeout(() => {
                      setcopy("copy")
                }, 3000);
              }  }
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              {copy}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shorten

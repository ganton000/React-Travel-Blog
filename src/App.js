import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import data from "./data.js";

export default function App() {
    const posts = data.map( item => {
        return (
            <Post
            key = {item.id}
            item = {item}
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            {posts}
        </div>
    )
};
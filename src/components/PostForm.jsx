import React from "react";
import {useState} from 'react'


function PostForm({ onAddPost }) {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim() === '') return;

        const newPost = {
            id: Date.now(),
            autor: "Me",
            content: content.trim(),
            date: new Date().toLocaleString(),
            UPVotes: 0,
            DOWNVoted: 0
        }
        onAddPost(newPost);
        setContent('');

    }
    return (

        <form onSubmit={handleSubmit} className="post-form">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's happening?"
                rows="3"
            />
            <button type="submit">Post</button>
        </form>
    );
}

export default PostForm;
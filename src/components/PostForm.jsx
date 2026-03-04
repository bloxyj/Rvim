import React from "react";
import {useState} from 'react'
import './css/PostForm.css';

function PostForm({ onAddPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') return;
        if (content.trim() === '') return;

        const newPost = {
            id: Date.now(),
            author: "Me",
            title: title.trim(),
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
                className="post-title-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                rows="1"/>
            <textarea
                className="post-content-input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Body text"
                rows="3"
            />
            <button className="post-submit-button" type="submit">Post</button>
        </form>
    );
}

export default PostForm;
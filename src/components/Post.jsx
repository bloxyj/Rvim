import React from "react";
import './css/Post.css';

function Post({post, onUPVote, onDOWNVote, onDelete}) {
    return (
        <div className="post">
            <div className="post-header">
                <strong>{post.author}</strong>
                <span className="post-date">{post.date}</span>
            </div>
            <div className="post-content">
                <span className="post-content-text">{post.content}</span>
            </div>
            <div className="post-actions">
                <button onClick={() => onUPVote(post.id)} className="post-upvote-button">"Upvote" (▲)</button>
                <button onClick={() => onDOWNVote(post.id)} className="post-downvote-button">"Downvote" (▼)</button>
                <button onClick={() => onDelete(post.id)} className="post-delete-button">Delete</button>
            </div>
        </div>
    )
}

export default Post;
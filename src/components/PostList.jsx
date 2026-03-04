import React from 'react'
import Post from './Post';

function TweetList({ posts, onUPVote, onDOWNVote, onDelete }) {
    return (
        <div className="post-list">
            {posts.length === 0 ? (
                <p className="no-posts">No posts yet</p>
            ) : (
                posts.map(post => (
                    <Post
                    key={post.id}
                    post={post}
                    onUPVote={onUPVote}
                    onDOWNVote={onDOWNVote}
                    onDelete={onDelete}
                    />
                ))
            )}
        </div>
    )
}

export default TweetList
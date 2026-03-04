import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PostForm from './components/PostForm'
import PostList from './components/PostList'


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author:'john',
      content:'Premier Post',
      date:new Date().toLocaleString(),
      UPVotes:0,
      DOWNVoted:0
    },
    {
      id: 2,
      autor:'john',
      content:'Deuxieme Post',
      date:new Date().toLocaleString(),
      UPVotes:0,
      DOWNVoted:0
    }
  ]);
  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  }
  const UPVotePost = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
      ? { ...post, UPVotes: post.UPVotes + 1 } : post
    ));
  };
  const DOWNVotePost = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
      ? { ...post, DOWNVoted: post.DOWNVoted + 1 } : post
    ));
  };
  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  }

  return (
    <>
    <div className="app">
      {Header()}
      <PostForm onAddPost={addPost} />
      <PostList 
        posts={posts}  
        onUPVote={UPVotePost} 
        onDOWNVote={DOWNVotePost}
        onDelete={deletePost} 
      />
    </div>
  
    </>
  )
}

export default App
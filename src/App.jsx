import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PostForm from './components/PostForm'
import PostList from './components/PostList'


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author:'kanyelover911',
      title:'OMG why does trump have a GYATT',
      content:'im mad that he has a GYATT and i dont, i want a GYATT too, any tips on how to get a GYATT ?',
      date:new Date().toLocaleString(),
      UPVotes:10,
      DOWNVoted:0
    },
    {
      id: 2,
      author:'TheRealDonaldTrump',
      title:'I have the best GYATT, everyone says so',
      content:'I have the best GYATT, everyone says so. It’s huge, it’s beautiful, and it’s the envy of everyone. I’ve been working on it for years, and it’s really paying off. People can’t stop talking about my GYATT, it’s just that good.',
      date:new Date().toLocaleString(),
      UPVotes:670123,
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
      ? { ...post, DOWNVoted: post.DOWNVoted - 1 } : post
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
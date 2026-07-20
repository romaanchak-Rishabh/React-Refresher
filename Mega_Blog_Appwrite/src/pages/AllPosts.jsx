import React from 'react'
import appWriteServices from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { Container, PostCard } from '../components'
import { useEffect, useState } from 'react'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])

    appWriteServices.getPosts([]).then((posts) => {
        if(posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts
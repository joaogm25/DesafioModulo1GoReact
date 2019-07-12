import React, { Fragment } from 'react'
import PostHeader from './PostHeader'

const Post = props => (
  <div className="post">
    <PostHeader data={props.data} />
    <span id="post-content">{props.data.content}</span>
  </div>
)

export default Post

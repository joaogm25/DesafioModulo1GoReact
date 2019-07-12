import React, { Fragment } from 'react'

const PostHeader = props => (
  <div id="post-header">
    <img id="img-profile" src={props.data.picture} />
    <span className="nome">{props.data.name}</span>
    <span className="hora">{props.data.time}</span>
  </div>
)

export default PostHeader

import React from 'react';
import Comments from './Comments';

const CommentComp = ({comments}) => {
  return (
    <div className='commentcomp'>{comments.map((eachcomment)=><Comments eachcomment={eachcomment}/>)}</div>
  )
}

export default CommentComp;
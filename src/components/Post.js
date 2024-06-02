import React from 'react';
import '../styles.css';

const Post = ({id, title, content})=>(
    <article className="post">
        <h2>{title}</h2>
        <p>ID: {id}</p>
        <p>{content}</p>
    </article>
);

export default Post;
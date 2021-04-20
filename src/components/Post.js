import React from "react";

const Post = (props) =>{
    return(
        <div className="todo">
            <li className="todo-item">
                <p><strong>Name:</strong>  {props.name}</p>
            </li>
            <li className="todo-item">
                <p><strong>Email:</strong> {props.email}</p>
            </li>
            <li className="todo-item">
                <p><strong>Des:</strong> {props.des}</p>
            </li>
            <li className="todo-item">
                <p><strong>Tags:</strong> {props.tags}</p>
            </li>
            
        </div>
    );
}

export default Post;
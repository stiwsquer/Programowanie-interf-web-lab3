import React from "react";
import Post from "./Post";

const List = (props) =>{
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {props.posts.map(post =>(
                    <Post 
                    key={post.id}
                    name={post.name}
                    email={post.email}
                    des={post.des}
                    tags={post.tags}
                    />
                ))}
            </ul>
        </div>
    );
}

export default List;
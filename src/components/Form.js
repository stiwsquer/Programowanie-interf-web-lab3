import React from "react";

function hashCode(str){
  let hash = 0;
  if (str.length === 0)return hash;
  for (let i=0; i<str.length; i++){
      let char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; //convert to 32bit integer
  }
  return hash;
}

const Form = (props) =>{

    const inputNameHandler = (e) =>{
        
        props.setInputName(e.target.value);
    }
    const inputEmailHandler = (e) =>{
        props.setInputEmail(e.target.value);
    }
    const inputDesHandler = (e) =>{
        props.setInputDescription(e.target.value);
    }
    const inputTagsHandler = (e) =>{
        props.setInputTags(e.target.value);
    }
    const submitFormHandler = (e) =>{
        e.preventDefault();
        props.setPosts([
            ...props.posts, {show: true, id: hashCode(props.inputDescription), name: props.inputName, email: props.inputEmail, des: props.inputDescription, tags: props.inputTags}
        ])
        props.setInputName("");
        props.setInputEmail("");
        props.setInputDescription("");
        props.setInputTags("");
    }

    return(
    <form >
    <div className="input__box">
      <input value={props.inputName} onChange={inputNameHandler} type="text" placeholder="Name" className="todo-input" />
      <input value={props.inputEmail} onChange={inputEmailHandler} type="text" placeholder="Email" className="todo-input" />
      <input value={props.inputDescription} onChange={inputDesHandler} type="text" placeholder="Description" className="todo-input" />
      <input value={props.inputTags} onChange={inputTagsHandler} type="text" placeholder="Tags" className="todo-input" />
      <button onClick={submitFormHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </div>
   
    </form>
    );
}

export default Form;
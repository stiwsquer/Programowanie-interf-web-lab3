import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import List from "./components/List";


function App() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputTags, setInputTags] = useState("");
  const [posts, setPosts]  = useState([]);


  return (
    <div className="App">
      <header>
        <h1>Tinder...for projects</h1>
      </header>
      <Form 
      inputName={inputName}
      inputEmail={inputEmail}
      inputDescription={inputDescription}
      inputTags={inputTags}
      setInputName={setInputName}
      setInputEmail={setInputEmail}
      setInputDescription={setInputDescription}
      setInputTags={setInputTags}
      setPosts={setPosts}
      posts={posts}/>
     
      <br/>
      <br/>
      <br/>
      
      <List

      posts={posts}
      />
    </div>
  );
}

export default App;

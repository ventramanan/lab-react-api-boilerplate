import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get(`https://reactnd-books-api.udacity.com/books`,{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res=>{
      setData(res.data.books)
    })
    .catch(err=>{
      console.log(err.response.status)
      if(err.response.status==404){
        console.log("Website not found")
      }
      else{
        console.log(err)
      }
    })
  },[])

  return (
    <div>
      {data.map((items)=>{
        return(
          <div key={items.id}>
            <h4 id='title'>{items.title}</h4>
            <div id='flex'>
              <img src={items.imageLinks.smallThumbnail} alt="thumbnail"></img>
              <p>{items.description}</p>
            </div>
            {items.authors.map((author,index)=>{
              return <span key={index}>{author}</span>
            })}
            <hr></hr>
          </div>
        )
      })}

    </div>
  );
}

export default App;
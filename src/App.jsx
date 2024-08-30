
import { useEffect, useState } from 'react';
import './App.css';
import Users from './components/Users';
const key = 'qpYxBdJ2KiBWibZTYxbgjJ0-SkXKuW08fPRWqygzfN6FS_e2QA'



function App() {

  const [kkk,setkkk] = useState([])

  useEffect(() => {
    fetch('/api/v1/users',{
      method:'get',
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
      }
    }).then((res) => {
      if(!res.ok) throw new Error('get failed')
        return res.json()
    }).then((data) => setkkk(data.items.map(item => {
      return {
        firstname:item.first,
        lastname:item.last,
        id:item._uuid
      }
        
    })))
    .catch(err => console.log(err))
  },[])

  const forget = () => {
    fetch('/api/v1/users',{
      method:'get',
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
      }
    }).then((res) => {
      if(!res.ok) throw new Error('get failed')
        return res.json()
    }).then((data) => setkkk(data.items.map(item => {
       return {
          firstname:item.first,
          lastname:item.last,
          id:item._uuid
        }
        
    })))
    .catch(err => console.log(err))
  }




  const forpost = (first,last) => {
    fetch('/api/v1/users',{
      method:'post',
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`
      },
      body:JSON.stringify([{first,last}])
    }) 
    .then(res => {
      if(!res.ok) throw new Error('post failed')
      return res.json()
    })
    .then(data => setkkk((prevusers) => [...prevusers,{
      firstname:data.items[0].first,
      lastname:data.items[0].last,
      id: data.items[0]._uuid 

    }]))
    .catch(err => console.log(err))
  }

  return ( 
    <div className="App">
    <Users forpost={forpost}/>
    <button className='btn' onClick={forget}>get users</button>
    {kkk.map((k) => 
        <div className='card' key={k.id}>
          <h2>{k.firstname}</h2>
          <h2>{k.lastname}</h2>
        </div>
    )}

    
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './index.css' ;
// import List from './List';
function App(){

const[data,updatedata]=useState();
const[arraydata,arrayupdatedata]=useState([]);
const[togglebutton,settoggle]=useState(true);
const [doit,setdoit]=useState();

const getvalue=(event)=>{
    updatedata(event.target.value);
}
const createarray=()=>{
    if(!data){alert("please wirte something....")}
    else if(data && !togglebutton){
       arrayupdatedata(
        arraydata.map((val)=>{
           if(val.id==doit) {
            return {...val,name:data}
           }return val;
            }) 
       )
       settoggle(true);
       updatedata("");
       setdoit(null);


    }
    else{
        const alldata={id:new Date().getTime().toString(),name:data};
        arrayupdatedata([...arraydata,alldata])
        updatedata('');
    }
    

}


const edititem=(id)=>{
const updatedataagain=arraydata.find((val)=>{
    return val.id===id;
})
settoggle(false);
updatedata(updatedataagain.name);
setdoit(id);
}


const deletelist=(key)=>{
    console.log(key);
    const newdata=arraydata.filter((val)=>{
    return key!=val.id;
    })
    arrayupdatedata(newdata);
    
}


return(
    <>
    <div>
    <h1>To-Do-List</h1>
    <input type="text" placeholder="Item Name" className='intext' onChange={getvalue} value={data}/>
    <button className='button' onClick={createarray}>{togglebutton?<i className="fa-solid fa-plus"></i>:<i class="fa-solid fa-pen-to-square"></i>}</button>
    </div>

    <div>
    {
        arraydata.map((val)=>{
            return(
            <div key={val.id} >
               <h3>{val.name}   </h3>
              <p> <i class="fa-solid fa-pen-to-square" onClick={()=>{edititem(val.id)}}></i> <i className="fa-sharp fa-solid fa-trash" onClick={()=>{deletelist(val.id)}}></i></p> 
            </div>

            )
        })
    }
    </div>
 
    
    
<div>
    <button onClick={()=>{arrayupdatedata([])}}>remove all</button>
</div>

    </>
)

}
export default App;



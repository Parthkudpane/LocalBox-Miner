import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

    function Savelocal () {
        const id = 123;
        const name = "web development"
        const True = true 

       localStorage.setItem('User_id' , id)
       localStorage.setItem('User_name' , name)
       localStorage.setItem('boolean' , True)
       localStorage.setItem('array' ,[1,2,3])
       localStorage.setItem('object' ,JSON.stringify({id:124}))
    }

    function clearkey () {
        localStorage.removeItem('User_name')
    }

     function GetAll() {
            const User_id =JSON.parse(localStorage.getItem('object'))
            alert(User_id.id)
     }

     function clearall (){
        localStorage.clear()
     }


     ///SESSIONS STORAGE///
     function Savelocal () {
        const id = 123;
        const name = "web development"
        const True = true 

       sessionStorage.setItem('User_id' , id)
       sessionStorage.setItem('User_name' , name)
       sessionStorage.setItem('boolean' , True)
       sessionStorage.setItem('array' ,[1,2,3])
       sessionStorage.setItem('object' ,JSON.stringify({id:124}))
    }

    function clearkey () {
        sessionStorage.removeItem('User_name')
    }

    function GetAll() {
        const User_id =JSON.parse(sessionStorage.getItem('object'))
        alert(User_id.id)
 }

 function clearall (){
    sessionStorage.clear()
 }

  return (
    <>
    <button onClick={Savelocal}>Save</button>
    <button onClick={clearkey}>Clear key</button>
    <button onClick={GetAll}>GetAll Data</button>
    <button onClick={clearall}>Clear All</button>
    </>
  )
}

export default App
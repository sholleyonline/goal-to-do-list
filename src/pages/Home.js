import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/styles.css'
import todolist100 from '../assets/images/todolist100.png'
import Button from '../components/Button'


function Home() {
  return (
    <div className='main'>
    <div >
      <h1>Goal ToDo List Project</h1>
    </div>
    <div className='listMain'>
        <div className='menuDiv'>
            <div className='buttonGroup'>
            <Button title="View List"
            size="18px"
            color="#000"
            />
            <Button title="Add New"
            size="18px"
            color="#000"
            />
            <Button title="Delete All"
            size="18px"
            color="#000"
            />
            </div>
<div>
<img src={todolist100} alt='' width={30} className='iconImg'/>
</div>
           
        </div>

        <div className='listContainer'>
            <div className='listIconDiv'>
                <img src={todolist100} width={30} alt='todo list'/>
            </div>

            <div className='taskTitleDiv'>
<p>Buy new Medical test books</p>
</div>
           

                <div className='toolsDiv'>
                    <Link to="/">View</Link>
                    <Link to="/">Delete</Link>  
                </div>



        </div>
        <div className='listContainer'>
            <div className='listIconDiv'>
                <img src={todolist100} width={30} alt='todo list'/>
            </div>

            <div className='taskTitleDiv'>
<p>Buy new Medical test books</p>
</div>
           

                <div className='toolsDiv'>
                    <Link to="/">View</Link>
                    <Link to="/">Delete</Link>  
                </div>



        </div>
        <div className='listContainer'>
            <div className='listIconDiv'>
                <img src={todolist100} width={30} alt='todo list'/>
            </div>

            <div className='taskTitleDiv'>
<p>Buy new Medical test books</p>
</div>
           

                <div className='toolsDiv'>
                    <Link to="/">View</Link>
                    <Link to="/">Delete</Link>  
                </div>



        </div>
        <div className='listContainer'>
            <div className='listIconDiv'>
                <img src={todolist100} width={30} alt='todo list'/>
            </div>
<div className='taskTitleDiv'>
<p>Buy new Medical test books</p>
</div>
           

                <div className='toolsDiv'>
                    <Link to="/">View</Link>
                    <Link to="/">Delete</Link>  
                </div>



        </div>
    </div>
   
    </div>
  )
}
/*
const styles = StyleSheet.create({
    link:{
        color:'blue'
    }
})*/
export default Home
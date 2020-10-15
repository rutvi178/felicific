import React,  { Component } from 'react' ;
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
//import * as FaIcons from 'react-icons/fa';
 //import * as AiIcons from 'react-icons/ai';
 //import * as IoIcons from 'react-icons/io';
export default class EventList extends Component{
    render(){
        return (
            <div>
            <h1  className="p-3 mb-2 bg-#CA2B8E" style={{backgroundColor:" #7BDCB5 " }} > FELICIFIC 2021</h1>
             <br/><br/><br/><br/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
             <Link to="/admin/adminevent" >
             <Button size="lg"  color="info">Events</Button>
             </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;
            
             <Link to="/admin/addevent"><Button size="lg" color="success">Create Event</Button></Link><br/><br/><br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp; &nbsp;&nbsp;
              </div> 
              
        )
    }
}
import React from 'react';
import{ BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import EventList from "./components/event-list.component";
import Cultural from "./components/cultural-list.component";
import Profile from "./components/profile.component";
import Contact from "./components/contact.component";
import EventDay1 from "./components/eventday1.component";
import EventDay2 from "./components/eventday2.component";
import EventDay3 from "./components/eventday3.component";
import EventDay4 from "./components/eventday4.component";
import EventDay5 from "./components/eventday5.component";
import AdminHome from "./components/adminhome.component";
import AddEvent from "./components/addevent.component";
import AdminEvent from "./components/adminevent.component";
import EditEvent from "./components/editevent.component";
import Details from "./components/detailpage.component";

function App() {
    return (
      
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component ={EventList}/>
      <Route path="/cultural" component ={Cultural}/>
      <Route path="/profile/:id" component ={Profile}/>
      <Route path="/contact" component ={Contact}/>
      <Route path="/day1event" component={EventDay1}/>
      <Route path="/day2event" component={EventDay2} />
      <Route path="/day3event" component={EventDay3} />
      <Route path="/day4event" component={EventDay4} />
      <Route path="/day5event" component={EventDay5} />
      <Route path="/admin" component={AdminHome} />
      <Route path="/admin/addevent" component={AddEvent} />
      <Route path="/admin/adminevent" component={AdminEvent} />
      <Route path="/editevent/:id" component={EditEvent} />
      <Route path="/details/:id" component={Details} />
   </Router>
  );
}

export default App;


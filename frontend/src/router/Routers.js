import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Search from '../pages/Search'
import ThankYou from '../pages/ThankYou'
import ThankYouNewsLetter from '../pages/ThankYouNewsletter'
import Update from '../pages/Update'
import Post from '../pages/Post'
import About from '../pages/About'

function Routers({loggedUser,emailToGetUn, setEmailToGetUn}) {


  const [tours,setTours] = useState([])
  const [serchedTours, setSerchedTours]= useState([])
  const [reRender,setReRender]=useState(false)
  const renderReview=()=>{
    setReRender(!reRender)
  }
//============================ gettin the tours data ===================================================================
  useEffect(()=>{
    axios.get("http://localhost:4000/Tour").then(({data})=>{setTours(data);setSerchedTours(data)}).catch((err)=>{console.log(err)})},[reRender])
    

//================================= searched data ===================================================================

//================================= end searched data ===================================================================

  return (
   <Routes>
    <Route path='/' element={<Navigate to='/home'/>} tours={tours}/>
    <Route path='/home' element={<Home tours={tours} serchedTours={serchedTours} setSerchedTours={setSerchedTours}/>}/>
    <Route path='/tours' element={<Tours tours={tours} serchedTours={serchedTours} setSerchedTours={setSerchedTours}/>}/>
    <Route path='/tours/:id' element={<TourDetails tours={tours} loggedUser={loggedUser} renderReview={renderReview} />}/>
    <Route path='/login' element={<Login emailToGetUn={emailToGetUn}  setEmailToGetUn={setEmailToGetUn}/>}/>
    <Route path='/singup' element={<Signup/>}/>
    <Route path='/thank-you' element={<ThankYou/>}/>
    <Route path='/tours/search' element={<Search tours={tours}/>}/>
    <Route path='/thank-youNl' element={<ThankYouNewsLetter/>}/>
    <Route path='/update' element={<Update/>}/>
    <Route path='/post' element={<Post renderReview={renderReview}/>}/>
    <Route path='/about' element={<About/>}/>
    
   </Routes>
  )
}

export default Routers
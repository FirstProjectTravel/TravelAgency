import React,{useRef,useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/tour-details.css'
import { Container,Row,Col,Form,ListGroup } from 'reactstrap'
import {useParams,Link,useNavigate} from 'react-router-dom'
import calculateAvgRating from './../Utils/avgRating'
import avatar from './../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Update from './Update'

function TourDetails({loggedUser,tours,renderReview}) {
  const {id}=useParams()
  const reviewMsgRef=useRef('')
  const [tourRating,setTourRating]=useState(null)
 
const navigate=useNavigate()

  const tour = tours.filter(tour=>tour._id === id)
  const{photo,title,desc,price,city,adress,distance,maxGroupSize,reviews}=tour[0]
  const {totalRating, avgRating}= calculateAvgRating(reviews)
  // console.log(tour[0]);
//================================= Posting reviews ===================================================================
const [reviewText,setReviewText] = useState('')
const [toggle,setToggle] = useState(false)

const reviewDetails={
  reviewText: reviewText,
  rating: tourRating,
  username:loggedUser
}
  console.log(reviewDetails);
 const options ={day:'numeric',month:'long',year:'numeric'}
 const handle=e=>{
  if(!reviewDetails.username) alert("You need to LogIn to post a review")
  else if(!reviewDetails.rating) alert("You need to rate the tour")
  else if(reviewDetails.reviewText==='') alert("You need to type a review")
  else {
    axios.post(`http://localhost:4000/Tour/${id}/reviews`,reviewDetails).then((res)=>{setReviewText('');setTourRating(null)}).catch((err)=>{console.log(err)})
}
  renderReview();
  e.preventDefault()


 }

const showUpdate = ()=>{
  setToggle(!toggle)
}
//================================= end Posting reviews ===================================================================

//  const [clicked, setClicked] = useState(false);
//  const rate=()=>{
//   setClicked(true)
//  }
//  const style = clicked ? {color: 'red' } : {};
  return (
   <>
   <section>
    <Container>
      <Row>
        <Col lg='8'>
          <div className='tour-content'>
            <img src={photo} alt="img"/>
            <div className="tour-info">
              <h2>{title}</h2>
              <div className='d-flex align-items-center gap-5'>
              <span className tour_rating d-flex align-items-center gap-1 >
                 <i class= "ri-star-s-fill" style={{color: "var(--secondary-color)" }}></i>
                       {avgRating===0 ? null : avgRating}
                  {totalRating=== 0 ? ( "Not rated") : ( <span>({reviews?.length}) </span>)}
                   </span>
                   <span>
                   <i class="ri-map-pin-user-fill"></i>{adress}
                   </span>
              </div>
              <div className="tour-extra-details">
                <span> <i class="ri-map-pin-2-line"></i>{city}</span>
                <span> <i class="ri-money-dollar-circle-line"></i>${price} /per person</span>
                <span> <i class="ri-map-pin-time-line"></i>{distance} k/m</span>
                <span> <i class="ri-group-line"></i>{maxGroupSize} people</span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>




            { loggedUser === "admin" && <div className='card_bottom d-flex align-items-center justify-content-between mt-3'>
            <button className="btn booking_btn" onClick={()=>{
                            axios.delete(`http://localhost:4000/Tour/${id}`).then((res)=>{
                            renderReview();navigate("/")}).catch((err)=>{console.log(err)})
                        }} >
                <Link to={"/"}>Delete</Link>
            </button>
            <button className="btn booking_btn" onClick={showUpdate}>
                {!toggle &&<Link >Update </Link>}
                {toggle && <Link > Cancel Update </Link>}
            </button>
            <button className="btn booking_btn">
                <Link to={"/post"}>Post</Link>
            </button>
            </div>}







            <div className="tour-reviews mt-4">
            {reviews.length !== 1 &&<h4>Reviews ({reviews?.length} reviews)</h4>}
            {reviews.length === 1 && <h4>Reviews ({reviews?.length} review)</h4>}
              <Form onSubmit={handle}>
                <div className='d-flex align-items-center gap-3 mb-4 rating-group'>
                    <span onClick={()=>{setTourRating(1)}}>1<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=>{setTourRating(2)}}>2<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=>{setTourRating(3)}}>3<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=>{setTourRating(4)}}>4<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=>{setTourRating(5)}}>5<i class="ri-star-s-fill"></i></span>
                </div>
                <div className="review-input">
                  <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required onChange={(event)=>setReviewText(event.target.value)}/>
                  <button className='btn primary__btn text-white' type='submit'>Submit</button>
                </div>
              </Form>
              <ListGroup className='user-review'> 
                   {
                    reviews?.map(review=>(
                      <div className='review-item'>
                        <img src={avatar} alt=''/>
                          <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(`${review.date}`).toLocaleDateString('en-US', options)}</p>
                            </div>
                             <span className='d-flex align-items-center'>{review.rating}
                             <i class="ri-star-s-fill"></i>
                             </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                      </div>
                    )
                      )
                   }
              </ListGroup>

              {loggedUser==="admin" && toggle && <Update data={tour[0]} renderReview={renderReview}/>}



            </div>
          </div>
        </Col>
        <Col lg='4'>
        <Booking tour={tour} avgRating={avgRating} loggedUser={loggedUser}/>
        </Col>
      </Row>
    </Container>
   </section>
   
   </>
  )
}

export default TourDetails
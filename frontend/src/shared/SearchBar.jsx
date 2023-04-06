import React,{useRef} from 'react'
import './search-bar.css'
import {Col, Form,FormGroup} from 'reactstrap'
function SearchBar() {
    const locationRef=useRef('')
    const distanceRef =useRef(0)
    const maxGroupRef =useRef(0)

    const handle=()=>{
        const location=locationRef.current.value
        const distance=distanceRef.current.value
        const maxGroup=maxGroupRef.current.value
        if(location===""|| distance ==="" || maxGroup===''){
            return alert('All fields are required')
        }
    }
  return (
    <Col lg='12'>
     <div className='search_bar'>
      <Form className='d-flex align-items-center gap-4'>
        <FormGroup className='d-flex gap-3 from-group from-group-fast'>
        <span><i class="ri-map-pin-line"></i></span>
        <div>
            <h6>Location</h6>
            <input type='text' placeholder='Where are you going' ref={locationRef}/>
        </div>
        </FormGroup>
        <FormGroup className='d-flex gap-3 from-group from-group-fast'>
        <span><i class="ri-map-pin-time-fill"></i></span>
        <div>
            <h6>Distance</h6>
            <input type='number' placeholder='Distance k/m' ref={distanceRef}/>
        </div>
        </FormGroup>
        <FormGroup className='d-flex gap-3 from-group from-group-last'>
        <span><i class="ri-group-line"></i></span>
        <div>
            <h6>Max People</h6>
            <input type='number' placeholder='0'ref={maxGroupRef}/>
        </div>
        </FormGroup>
        <span className='search-icon'type='submit' onClick={handle}>
        <i class="ri-search-line"></i>
        </span>
      </Form>
     </div>
    </Col>
  )
}

export default SearchBar
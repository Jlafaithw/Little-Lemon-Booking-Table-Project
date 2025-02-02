

import React, { useState } from 'react';

const BookingForm = (props) =>{
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [Occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);

    }
    return (
        <header>
           <section>
               <form onSubmit={handleSubmit}>
                   <fieldset>
                       <div>
                           <label htmlFor='book-date'>Choose Date</label>
                           <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/> 
                       </div>    

                       {/* for time selection */}
                       <div>
                       <label htmlFor='book-time'>Choose Time</label>
                       <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                           <option value="">Select a Time</option>
                           {
                               props.availbleTimes.availbleTimes.map(availbleTimes => {return <option key={availbleTimes}>{availbleTimes}</option>})
                           }
                       </select>
                        </div> 
                        {/* for number of guests */}
                        <div>
                            <label htmlFor='book-guest'>Number of Guests:</label>
                            <input id='book-guest' min='1' value={guests} onChange={(e) => setGuest(e.target.value)}/> 
                        </div>  
                        {/*Occation field */}
                        <div>
                        <label htmlFor='book-occasion'>Occasion:</label>
                        <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                           <option>Bithday</option>
                           <option>Anniversary</option>
                        </select>   
                        </div>
                        {/* submit button */}
                        <div className='btnReceive'>
                            <input aria-label='on Click' type='submit' value={"Make Your Reservation "}/>
                        </div>
                   </fieldset>

               </form>
           </section> 
        </header>
    );
};

export default BookingForm; 
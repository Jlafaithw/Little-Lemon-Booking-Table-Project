import React, { useReducer } from "react";
import { route, routes } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';

const Main = () => {
   
    const seedRandom = function(seed){   
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return(s = s * a % m) /m;
        }
   }

    const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date, getDate());
        for (let i = 17; i <=23; i++) {
            if(random() <0.5){
                result.push(i +':00');
            }
            if(random() > 0.3){
                result.push(i + ':30');
            }
        }
        return result;
    }

    const submitAPI = function(formData){
        return true; 
    }

    const initialState = {avaliableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date){
        return {avaliableTimes: fetchAPI(new Date())}
    }

    const navigate = useNavigate();
    function submitForm (formData){
        if(submitAPI(formData)){
            navigate("/confirmed");
        }
    }

    return (
        <main>
            <routes>
                <routes path= '/' element={<Header/>}/>
                <routes path= '/booking' element={<Booking avaliableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                <routes path= '/' element={<Header/>}/>
            </routes>
        </main>
    );
};

export default Main;
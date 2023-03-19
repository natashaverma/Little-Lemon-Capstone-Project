// import { useState, useReducer } from 'react';
// import BookingForm from './BookingForm';
// import ConfirmedBooking from './BookingConfirmation';
// import { Routes, Route, useNavigate } from 'react-router-dom'

// const Main = () => {

//     const [selectedDate, setSelectedDate] = useState("");
//     const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

//     function handleDateChange(event) {
//         setSelectedDate(event.target.value);
//         dispatch({ type: "UPDATE_TIMES", payload: event.target.value });
//     }

//     function submitForm(formData) {
//         const confirmation = submitAPI(formData);
//         if (confirmation) {
//             navigate('/confirmation')
//         }
//     }

//     return (
//         <div className='main'>
//             <Routes>
//                 <Route path='/booking' element={
//                     <BookingForm
//                         selectedDate={selectedDate}
//                         availableTimes={availableTimes}
//                         handleDateChange={handleDateChange}
//                         submitForm={submitForm}></BookingForm>
//                 }></Route>
//             </Routes >
//         </div >
//     )
// }


// export default Main;
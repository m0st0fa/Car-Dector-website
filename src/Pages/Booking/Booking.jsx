/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])
    const url = `http://localhost:5001/bookings?email=${user?.email}`
    useEffect(() => {
        axios.get(url, {withCredentials:true})
        .then(res =>{
            setBooking(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBooking(data))

    }, [url])


    console.log(booking)
    return (
        <div>
            <h1>{booking.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(item => <BookingRow
                                setBooking={setBooking}
                                booking={booking}
                                key={item._id}
                                item={item}>
                            </BookingRow>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Booking;
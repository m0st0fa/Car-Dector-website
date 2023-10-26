/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
const BookingRow = ({ item, booking, setBooking }) => {

    const { email, img, price, date, customerName, _id } = item;

    const handleClickToUpdate = id =>{
            fetch(`http://localhost:5001/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status: 'confirm'})

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        Swal.fire(
                            'Good job!',
                            'Update succesfully!',
                            'success'
                        )
        
                    }
                })
        
    
    }

    const handleClickToDelete = id => {
        const Proceed = confirm('Are You Sure that You want to Delete')
        if (Proceed) {
            fetch(`http://localhost:5001/bookings/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Good job!',
                            'You clicked the button!',
                            'success'
                        )
                        const remaining = booking.filter( booking => booking._id !== id)
                        setBooking(remaining)
                    }
                })
        }

    }
    return (
        <div className="mb-6">
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customerName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    Email: {email}
                </td>
                <td>
                    price:{price}
                </td>
                <th>
                    Date: {date}
                </th>
                <th>
                    <button onClick={()=>handleClickToUpdate(_id)} className="btn btn-ghost btn-xs">Confirm</button>
                </th>
                <th>
                    <div className=" justify-center ">
                        <button onClick={() => handleClickToDelete(_id)} className="btn">
                            <FaEdit></FaEdit>
                            Delete
                        </button>
                    </div>
                </th>
            </tr>

        </div>
    );
};

export default BookingRow;
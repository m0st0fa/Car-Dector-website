import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, price, service_id, img } = service;

    const handleClickToCheckOut = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const message = form.message.value
        const email = form.email.value
        const order = {
            customerName: name,
            date,
            img,
            price: price,
            email: email,
            message: message,
            service_id,
        }
        console.log(order)
        fetch('http://localhost:5001/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(date => {
                if (date.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                }
                console.log(date)
            })
    }

    return (
        <div>
            <h1 className="text-center text-orange-600 font-bold text-4xl mb-6">Book Service:{title}</h1>
            <form onSubmit={handleClickToCheckOut} className="bg-[#F3F3F3] p-10 " >
                <div className="grid md:grid-cols-2  gap-6 max-w-6xl ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your mail</span>
                        </label>
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className=" mt-6">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <input type="message" name="message" className="input input-bordered w-full h-60" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-block btn-primary">Order Confrom</button>
                </div>
            </form>
        </div>

    );
};

export default CheckOut;
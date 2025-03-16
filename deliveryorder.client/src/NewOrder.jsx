import React, { useState } from 'react';
import axios from 'axios';
import './NewOrder.css';

function NewOrder() {
    const [senderCity, setSenderCity] = useState('');
    const [senderAddress, setSenderAddress] = useState('');
    const [receiverCity, setReceiverCity] = useState('');
    const [receiverAddress, setReceiverAddress] = useState('');
    const [weight, setWeight] = useState('');
    const [pickupDate, setPickupDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newOrder = {
                senderCity,
                senderAddress,
                receiverCity,
                receiverAddress,
                weight: parseFloat(weight),
                pickupDate,
            };
            const response = await axios.post('http://localhost:5000/api/Orders', newOrder);
            alert('The order was successfully created! Order number: ' + response.data.orderNumber);
        } catch (error) {
            console.error(error);
            alert('An error occurred when creating the order');
        }
    };

    return (
        <div className="page-wrapper">
            <div className="new-order-container">
                <h2>Create a New Order</h2>
                <form onSubmit={handleSubmit} className="new-order-form">
                    <div className="form-group">
                        <label>Sender's City</label>
                        <input
                            type="text"
                            value={senderCity}
                            onChange={(e) => setSenderCity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Sender's Address</label>
                        <input
                            type="text"
                            value={senderAddress}
                            onChange={(e) => setSenderAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Recipient's City</label>
                        <input
                            type="text"
                            value={receiverCity}
                            onChange={(e) => setReceiverCity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Recipient's Address</label>
                        <input
                            type="text"
                            value={receiverAddress}
                            onChange={(e) => setReceiverAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Cargo Weight</label>
                        <input
                            type="number"
                            step="0.01"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Pickup Date</label>
                        <input
                            type="date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Create Order
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewOrder;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './OrderDetails.css';

function OrderDetails() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/Orders/${id}`);
                setOrder(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchOrder();
    }, [id]);

    if (!order) {
        return <div className="order-details-loading">Loading...</div>;
    }

    return (
        <div className="order-details-container">
            <h2>Order Details</h2>
            <div className="order-info">
                <p><strong>ID:</strong> {order.id}</p>
                <p><strong>Order Number:</strong> {order.orderNumber}</p>
                <p><strong>Sender's City:</strong> {order.senderCity}</p>
                <p><strong>Sender's Address:</strong> {order.senderAddress}</p>
                <p><strong>Recipient's City:</strong> {order.receiverCity}</p>
                <p><strong>Recipient's Address:</strong> {order.receiverAddress}</p>
                <p><strong>Weight:</strong> {order.weight}</p>
                <p><strong>Cargo Pickup Date:</strong> {order.pickupDate}</p>
            </div>
        </div>
    );
}

export default OrderDetails;

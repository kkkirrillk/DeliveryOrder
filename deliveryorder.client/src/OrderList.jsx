import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './OrderList.css'; 

function OrderList() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchOrders();
     
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/Orders');
            setOrders(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleOrderClick = (id) => {
        navigate(`/order/${id}`);
    };

    return (
        <div className="order-list-container">
            <h2>List of Orders</h2>
            <table className="order-list-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order Number</th>
                        <th>Sender's City</th>
                        <th>Recipient's City</th>
                        <th>Weight</th>
                        <th>Date of Cargo Pickup</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id} onClick={() => handleOrderClick(order.id)}>
                            <td>{order.id}</td>
                            <td>{order.orderNumber}</td>
                            <td>{order.senderCity}</td>
                            <td>{order.receiverCity}</td>
                            <td>{order.weight}</td>
                            <td>{order.pickupDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderList;

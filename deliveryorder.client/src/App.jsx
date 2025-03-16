import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewOrder from './NewOrder';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails';
import './App.css'; 

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Navigation Bar */}
                <nav className="main-nav">
                    <div className="nav-brand">Order Management</div>
                    <ul>
                        <li><Link to="/">List of Orders</Link></li>
                        <li><Link to="/new">Create an Order</Link></li>
                    </ul>
                </nav>

                {/* Main Content Area */}
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<OrderList />} />
                        <Route path="/new" element={<NewOrder />} />
                        <Route path="/order/:id" element={<OrderDetails />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;

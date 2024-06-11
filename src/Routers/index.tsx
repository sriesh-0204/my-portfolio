import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ReactDOM from "react-dom/client";
import Layout from '../Layout';
import Home from '../Pages/Home';
import About from '../Pages/About';

const Routers: React.FC = () => {
    return (
        <div>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </Layout>
            </Router>
        </div>
    )
}

export default Routers

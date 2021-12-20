import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Year = ({ img, text, text1, text2,id, td }) => {
    console.log(id);
    console.log(td, text1);
    return (
        <Col>
            <div className="img-div position-relative">
                <img className="img-fluid" src={img} alt="" />
                <div className ="img-position">
                    <Link  to={`/semesterData/${id}`}><button className="btn  text-white">{text1}</button></Link>
                </div>
            </div>
        </Col>
    );
};

export default Year;
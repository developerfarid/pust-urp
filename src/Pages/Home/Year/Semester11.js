import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Semester11 = ({ td, text22 }) => {
    const [semister, setsemister] = useState([])
    const { id } = useParams()
    console.log(id, text22);

    useEffect(() => {
        fetch("/semister11.json")
            .then(res => res.json())
            .then(data => setsemister(data[id]?.subject))
    }, [])
console.log(semister[id]?.idd);
    return (
        <Container className="text-center" className='my-5'>
            <h1 className='mb-4'>Course Outline { semister[0]?.title}</h1>
            <Table responsive="sm" bordered variant="dark"   hover>
                <thead>
                    <tr>
                        <th>Course Number</th>
                    
                        <th>Course Title</th>
                    
                        <th>Credit</th>
                    </tr>
                </thead>
                <tbody>
                    {semister.map((item) => <> <tr>
        <td>{ item.courseName}</td>
      
    
    <Link className='d-block text-decoration-none text-white m-auto' to={`data/${item.idd}`}><td className='text-center m-auto' >{ item.corseTitle}</td></Link>
  

    <td>{ item.credit}</td>
  
</tr>
    </>
                )
                    }
            </tbody>
        </Table>
        </Container >
    );
};

export default Semester11;
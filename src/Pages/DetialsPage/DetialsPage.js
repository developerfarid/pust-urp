/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetialsPage = () => {
const [detail, setdetail] = useState()
    const { idd, id } = useParams()
    console.log(idd, id);
    useEffect(() => {
        fetch("/semister11.json")
            .then(res => res.json())
            .then(data => setdetail(data[id].subject[id]))
    }, [])
    console.log(detail);
    console.log(detail?.detials[0]?.name);
    return (
        <Container>
            <Table responsive="sm" bordered variant="dark"   hover>
                <thead>
                    <tr>
                        <th>Material Name</th>
                    
                        <th>Action</th>
                    
                     
                    </tr>
                    </thead>
                    <tbody>
            {detail?.detials?.map(item => <>
                <tr>
                    <td>
                        {item?.name }
                    </td>
                    <td>
                        {/* // eslint-disable-next-line react/jsx-no-target-blank */}
                        <a target="_blank" className='d-block text-white' href={item?.file}>Open File</a>
                    </td>
                </tr>
                </>)}
                    </tbody>
                    </Table>
            <Row>
                <h1 className='my-4'>About Course</h1>
                {
                    detail?.Course?.map(item => <>
                        <p style={{textAlign:"left"}}>{item?.courseName}
                            
                    </p>
                    </>)
                }
            </Row>
        </Container>
    );
};

export default DetialsPage;
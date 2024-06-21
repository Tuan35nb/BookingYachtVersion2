import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import './Enterprise.scss';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);
    // const [loading, setLoading] = useState(true);
    const getImageApi = `http://localhost:8080/api/customer/file/`

    useEffect(() => {
        axios.get('http://localhost:8080/api/customer/getAllCompany')
            .then(res => {
                setCompanies(res.data.data.filter(c => c.exist === 1));
                // setLoading(true);
            })

            .catch(error => {
                console.log(error);
                // setLoading(false);
            })
    }, []);

    // if (loading) {
    //     return <Spinner animation="border" role="status">
    //         <span className="sr-only">Loading...</span>
    //     </Spinner>
    // }

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const companyChunks = chunkArray(companies, 2);

    return (
        <Container>
            {companyChunks.map((chunk, index) => (
                <Row key={index} className="mb-4">
                    {chunk.map(company => (
                        <Col md={6} key={company.id}>
                            <Card style={{ padding: '20px', border: 'none' }}>
                                <Row style={{ alignItems: 'center' }}>
                                    <Col md={3}>
                                        <img
                                            src={`${getImageApi}${company.logo}`} alt={company.logo}
                                            style={{ width: '100%', borderRadius: '8px' }}
                                        />
                                    </Col>
                                    <Col md={9}>
                                        <h5>{company.name}</h5>
                                        <p>{company.address}</p>
                                        <p>{company.email}</p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    );

}
export default CompanyList;
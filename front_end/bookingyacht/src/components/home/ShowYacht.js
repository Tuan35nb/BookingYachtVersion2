import Card from 'react-bootstrap/Card';
import { NavLink, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getAllYacht, getUser } from '../../services/ApiServices';
import { GrFormNextLink } from "react-icons/gr";
import i_content from '../../assets/image_1.webp'
import axios from 'axios';
import { Container } from 'react-bootstrap/Container';
import { FaLocationDot } from "react-icons/fa6";


const ShowYacht = (props) => {
    const [yacht, setYacht] = useState([]);


    const getAllYachtt = async () => {
        let res = await getAllYacht()
        console.log(res)
        if (res && res.data.data) {
            setYacht(res.data.data)
        }
    }

    const avatarYachtApi = 'http://localhost:8080/api/customer/file/'

    useEffect(() => {
        getAllYachtt()
    }, [])

    return (
        <>
            <div className='yacht-header row'>
                <div className='yacht-title col-md'>
                    <h3 style={{ fontWeight: 'bold' }}>Du Thuyền Mới <br /> Và Phổ Biến Nhất</h3>
                    <div>
                        <img src={i_content} />
                    </div>
                </div>
                <label style={{ width: "488px", color: '#475467' }} className='col-md mb-5'>
                    Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất.Khám phá một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng,tiện nghi và trải nghiệm không thể quên.
                </label>
            </div>
            <div className='yacht-content'>
                {yacht.map((item) => {
                    return (
                        <div className='col-12 col-sm-6 col-md-3 col-lg-3 mb-4' key={item.idYacht}>
                            <NavLink to={`/mainpage/${item.idYacht}`} className='nav-link'>
                                <Card style={{ width: '100%', height: '350px' }}>
                                    <Card.Img width={268} height={200} variant="top" src={`${avatarYachtApi}${item.image}`} />
                                    <Card.Body>
                                        <Card.Title style={{ fontWeight: 600, fontSize: 18, color: '#475467', marginBottom: 0 }}>{`${item.name}`}</Card.Title>
                                        <div style={{ padding: '5px' }} className='location'><FaLocationDot />{item.location.name}</div>
                                        <div className='row d-flex align-items-center mt-2'>
                                            <p className='col-7' style={{ color: '#475467', fontWeight: '700', marginBottom: 0 }}>Price: 3.3350.000đ</p>
                                            <button className='col-5 btn btn-warning' style={{ color: '#475467', borderRadius: 25, width: 100, fontSize: '14px' }}>Đặt ngay</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                        </div>
                    )
                })
                }
            </div>
            <div className='view-all-yacht d-flex'>
                <NavLink to='/duthuyen' className='nav-link'>
                    <button>
                        Xem tất cả
                        <GrFormNextLink className='icon-next ml-2' />
                    </button>
                </NavLink>
            </div>
        </>
    )

}

export default ShowYacht;
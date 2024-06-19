import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap'
import { FcPlus } from "react-icons/fc";
import { createYacht } from '../../../services/ApiServices';
import { toast } from 'react-toastify';

const ModalCreateYacht = (props) => {
    const { show, setShow, idCompany } = props;
    const [image, setImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");


    const initInforYacht = {
        name: '',
        hullBody: '',
        launch: '',
        itinerary: '',
        rule: '',
        description: '',
        location: '1',
        yachtType: '1',
    }
    const handleClose = () => {
        setShow(false)
        setPreviewImage('');
        setImage('');
        setData(initInforYacht);

    }

    const [data, setData] = useState(initInforYacht)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        }

        )

    }
    const handelUploadImage = (event) => {
        if (event.target.files[0] && event.target && event.target.files) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    }
    const handleCreateYacht = async () => {
        let res = await createYacht(idCompany, data.name, image, data.launch, data.hullBody, data.description, data.rule, data.itinerary, data.location, data.yachtType);
        if (!data.name || !image || !data.launch || !data.hullBody || !data.description || !data.rule || !data.itinerary || !data.location || !data.yachtType) {
            toast.error("Input Not Empty")
        } else {
            if (res && res.data.data === true) {
                toast.success('Create Successfully');
                await props.listYacht();
            } else {
                toast.error("Create Fail")
            }
        }

    }


    return (
        <>
            <Modal size='xl'
                show={show}
                onHide={handleClose}
                backdrop="static"
                className='modal-add-new-yacht'
                autoFocus

            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Yacht</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    name='name'
                                    type="text"
                                    placeholder="Yacht Name "
                                    onChange={handleChange}
                                    value={data.name}
                                />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Hull-Body</Form.Label>
                                <Form.Control
                                    name='hullBody'
                                    type="text"
                                    placeholder="Hull-Body"
                                    onChange={handleChange}
                                    value={data.hullBody}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Launch</Form.Label>
                                <Form.Control
                                    name='launch'
                                    type="text"
                                    placeholder="Launch"
                                    onChange={handleChange}
                                    value={data.launch}
                                />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Itinerary</Form.Label>
                                <Form.Control
                                    name='itinerary'
                                    type="text"
                                    placeholder="Itinerary"
                                    onChange={handleChange}
                                    value={data.itinerary}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Rule</Form.Label>
                                <Form.Control
                                    name='rule'
                                    type="text"
                                    placeholder="Rule"
                                    onChange={handleChange}
                                    value={data.rule}
                                />
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Location</Form.Label>
                                <Form.Select value='1' onChange={handleChange} name='location'>
                                    <option value='1'>Vịnh Hạ Long</option>
                                    <option value='2'>Vịnh Lan Hạ</option>
                                    <option value='3'>Đảo Cát Bà</option>

                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>Yacht Type</Form.Label>
                                <Form.Select value='1' onChange={handleChange} name='yactType'>
                                    <option value='1'>3 Sao</option>
                                    <option value='2'>4 Sao</option>
                                    <option value='3'>5 Sao</option>

                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name='description'
                                as="textarea"
                                placeholder="Description"
                                style={{ height: '100px' }}
                                onChange={handleChange}
                                value={data.description}
                            />
                        </Row>
                        <div className='col-mad-12'>
                            <label className='form-label label-upload' htmlFor='labelUpload'> <FcPlus /> Upload File IMAGE</label>
                            <input
                                type='file'
                                hidden id='labelUpload'
                                name='image'
                                onChange={(event) => handelUploadImage(event)}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {previewImage ?
                                <img src={previewImage} />
                                :
                                <span>Preview Avartar</span>
                            }
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreateYacht}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ModalCreateYacht;
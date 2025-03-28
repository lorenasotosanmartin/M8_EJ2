import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import PropTypes from 'prop-types';
import Modal from '../components/ModalInfo'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function DoctorCard(doctor) {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Card className="p-0" >
        <Card.Img variant="top" src={doctor.doctor.imagen} />
        <Card.Body>
          <Card.Title>{doctor.doctor.nombre}</Card.Title>
          <Card.Title className='fst-italic'>{doctor.doctor.especialidad}</Card.Title>
          <Card.Text>
            {doctor.doctor.descripcion}
          </Card.Text>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button onClick={() => navigate("/appointment")}>Reservar cita <i className="button__icon bi bi-clipboard"></i> </Button>
              <Button onClick={toggleModal}>Conoce más <i className="button__icon bi bi-chevron-right"></i></Button>
              {showModal && (
                <Modal>
                  <div className="modal-content">
                    <h2>{doctor.doctor.nombre}</h2>
                    <h5 className='fst-italic'>{doctor.doctor.especialidad}</h5>
                    <h5 className='fst-italic'>Años de experiencia: {doctor.doctor.experiencia} años</h5>
                    <p>{doctor.doctor.descripcion}.</p>
                    <Button onClick={toggleModal}> Cerrar <i className="button__icon bi bi-x-lg"></i></Button>
                  </div>
                </Modal>
              )}
            </ButtonGroup>
          </ButtonToolbar>
        </Card.Body>
      </Card>
    </>
  );
}

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    imagen: PropTypes.string,
    especialidad: PropTypes.string,
    descripcion: PropTypes.string
  })

};
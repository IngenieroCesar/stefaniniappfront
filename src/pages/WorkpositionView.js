import React from 'react'
import  { Modal, Table }  from  'react-bootstrap' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faEye } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";


function WorkpositionView(props) {

    const [isOpen, setIsOpen] = React.useState(false);

    //traemos los datos del elemento
    const showModal = () => {
      setIsOpen(true);
      props.showModalEdit(props.id)
        
    };
  //Con esta función ocultamos el modal
    const hideModal = () => {
      setIsOpen(false);
    };
  
    return (
      <>
        <button className="btn btn-primary" alt="Ver" title="Ver" hidden={props.hidden} onClick={showModal} value={props.id}><FontAwesomeIcon icon={faEye} /></button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
          <Modal.Title>Puesto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                </tr>
            </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary float-right" onClick={hideModal} >Cancel</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
    

export default WorkpositionView
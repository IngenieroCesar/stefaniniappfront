import React from 'react'
import  { Modal }  from  'react-bootstrap' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";


function WorkpositionUpdate(props) {

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
        <button className="btn btn-info" alt="Editar" title="Editar" hidden={props.hidden} onClick={showModal} value={props.id}><FontAwesomeIcon icon={faCogs} /></button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
          <Modal.Title>Puesto</Modal.Title>
          </Modal.Header>
          <form 
                //Llamamos la función para evitar el reload de la pagina
                onSubmit={props.onSubmit}
            >
          <Modal.Body>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder={props.name} 
                        name="name"
                        // onChange={onChange}
                        //Con este metodo nos aseguramos de que la información tenga una sola fuente
                        required
                    />
                </div>          
            
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary float-right" onClick={hideModal} >Cancel</button>
            <button type="submit" className="btn btn-success float-right" onClick={hideModal} >Guardar</button>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  };
    

export default WorkpositionUpdate
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCogs } from '@fortawesome/free-solid-svg-icons'
import WorkpositionUpdate from '../pages/WorkpositionUpdate'
import WorkpositionView from '../pages/WorkpositionView'



//Generamos la clase que ereda de react.components
class Element extends React.Component {
    //Estado dentro de nuestro componente
state = {
            name: 'Default',
            data: {}
            
        }

    //Resivimos el id del evento, para traerlo de la API
    showModalEdit = async e => {
        
         //Manejo de errores
         try {

            //Asignamos el id obtenido por el boton del evento
            let id = e
            //Hacemos llamado al API
            let res = await fetch (`/api/workposition/${id}`)
            //convertimos la respuesta
            let data = await res.json()
            //Traemos el objeto con su estructura original
            //y lo guardamos en el state
            this.setState({
                data
            })

        } catch (error) {
            console.log(error)
        }
    }

    //Guardamos la actualización del elemento
    //Evento para empaquetar nuestra colección y enviarla al API
    handleSubmit = async e => {
        //Evitamos que el submit nos refresque la pagina
        e.preventDefault()

        //Asignamosel valor resivido del input y lo almacenamos
        let name = e.target.name.value
        let id = this.state.data.id
        //Actualizamos el valor a nuestro objeto
        this.state.data.name = name

        try {
            let config = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.data)
            }
            //El fetch resive como parametros:
            // ruta, 
            let res = await fetch(`/api/workposition/${id}`, config)
            //Respuesta de la API
            let json = await res.json()

            //Redireccionamos hacia la vista
            this.props.Actualizar()

        } catch (error) {
            this.setState({
                loading: false,
                error
            })    
        }

    }

   
        

    //Definimos una funcion
    //Render pinta lo que escribimos dentro de ella
    render(){
        
        //Establecemos estructuring para evitar el manejo del this en nuestro componente.
        //Esto es una propiedad de ECMS6
        const {id, name, hidden, eliminar, Actualizar} = this.props

        //Ya que vamos a retornar mas de una linea, debemos meterlo en ().
        return (
            <React.Fragment>
                    {/* //Los estilos de css los dinaamisamos desde aqui */}
                    <tr>
                    <th scope="col" hidden={hidden}>{id || '0'}</th>
                    <th scope="col">{name || 'No Name'}</th>

                    <th>
                    {/* Boton para edición, con sus props */}
                    <WorkpositionView
                        id={id}
                        name={name}
                        hidden={hidden}
                        showModalEdit = {this.showModalEdit}

                    />
                    {/* Boton para edición, con sus props */}
                    <WorkpositionUpdate 
                        id={id}
                        name={name}
                        hidden={hidden}
                        showModalEdit = {this.showModalEdit}
                        onChange={this.handleChange} 
                        onSubmit={this.handleSubmit}

                    />
                    <button className="btn btn-danger" onClick={eliminar} alt="Eliminar" title="Eliminar"  hidden={hidden} value={id}><FontAwesomeIcon icon={faTimes} /></button>
                    </th>

                    </tr>

            </React.Fragment>

        
        )
    }
}

//Exportamos esta clase que creamos
export default Element
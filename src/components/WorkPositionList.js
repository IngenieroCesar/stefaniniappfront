import React from 'react';
import Element from './Element'

class WorkPositionList extends React.Component {



    render(){
        //Establecemos estructuring para evitar el manejo del this en nuestro componente.
        //Esto es una propiedad de ECMS6
        const {positions, eliminar, Actualizar} = this.props

        return(
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                                
                        {
                            // En este momento estamos usando la funcion map para iterar todos los elementos del arreglo,
                            positions.map((position) => {
                                return(
                                    <Element
                                    key={position.id}
                                    id={position.id}
                                    name={position.name}
                                    hidden ={false}
                                    eliminar ={eliminar}   
                                    Actualizar = {Actualizar}                 
                                    
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
                
            </React.Fragment>
        )
    }
}

export default WorkPositionList
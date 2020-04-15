import React from 'react';
import Element from './Element'

function WorkPositionList(props){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody> 
                        
                {
                    // En este momento estamos usando la funcion map para iterar todos los elementos del arreglo,
                    props.positions.map((position) => {
                        return(
                            <Element
                            key={position.id}
                            id={position.id}
                            name={position.name}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default WorkPositionList
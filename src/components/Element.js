import React from 'react';

//Generamos la clase que ereda de react.components
class Element extends React.Component {
    //Estado dentro de nuestro componente
    constructor(props){
        super(props);
        this.state = {
            name: 'Default'

        }
    }
    //Esta función se invoca inmediatamente despues de que el componente es invocado.
   //Con esta funcioón realizaremos las peticiónes a nuestra api.
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: 'Name'
            })
        }, 5000)
    }

    //Definimos una funcion
    //Render pinta lo que escribimos dentro de ella
    render(){
        //Establecemos estructuring para evitar el manejo del this en nuestro componente.
        //Esto es una propiedad de ECMS6
        const {id, name} = this.props

        //Ya que vamos a retornar mas de una linea, debemos meterlo en ().
        return (
            //Los estilos de css los dinaamisamos desde aqui
            <tr>
            <th scope="col">{id}</th>
            <th scope="col">{name}</th>
            </tr>
            // <div className="card mx-auto Fitness-Card" style={{ }} >
            //     <div className="card-body"> 
            //         <div className="row center">
            //             {/* <div className="col-6">
            //                 <img  src={img} className="float-right" width="120"/>
            //             </div>
            //             <div className="col-6 Fitness-Card-Info">
            //                 <h1>{title}</h1>
            //                 <p>{description}</p>
            //             </div> */}
            //         </div>
            //     </div>
            // </div>

        
        )
    }
}

//Exportamos esta clase que creamos
export default Element
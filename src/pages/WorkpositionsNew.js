import React from 'react';
import WorkpositionForm from '../components/WorkpositionForm'
import Element from '../components/Element'
import '../components/styles/ExerciseNew.css'
import FatalError from './500'

class WorkpositionNew extends React.Component {

    state = {
        form: {
            name: ''
        },
        loading: false,
        error: null
    }

    //Obtenemos el valor del input y lo encapsulamos
    handleChange = e =>{
    //Mejoramos codigo con Babel:
        this.setState({
            form: {
                //Le decimos que mantenga la estructura anterior y si es un nuevo key
                //va a agregarlo al objeto
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })

    }

    //Evento para empaquetar nuestra colección y enviarla al API
    handleSubmit = async e => {
        //Agregamos los estados:
        this.setState({
            loading: true
        })

        //Evitamos que el submit nos refresque la pagina
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.form)
            }
            //El fetch resive como parametros:
            // ruta, 
            let res = await fetch('/api/workposition', config)
            //Respuesta de la API
            let json = await res.json()

            this.setState({
                loading: false
            })
            //Redireccionamos hacia la vista
            this.props.history.push('/workpositions')

        } catch (error) {
            this.setState({
                loading: false,
                error
            })    
        }

    }

    render(){
        //Validamos si existen errores
        if(this.state.error){
            return <FatalError />
        }
        
       return (
        <div className="ExerciseNew_Lateral_Spaces row">
            <div className="col-sm ExerciseNew_Card_Space">
            <h3>Nuevo Cargo</h3>
                {/* //Podemos tener el controlador en el componente ansestro
                //y enviarle la función mediante las props */}
                <WorkpositionForm
                    onChange={this.handleChange} 
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />
            </div>
            <div className="col-sm ExerciseNew_Card_Space">
                <h3>Cargo</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody> 
                            
                <Element 
                        //vamos a hacer restructuring
                        {...this.state.form}
                        //Esta prop oculta los botones para el formulario
                        hidden ={true}
                    />
                </tbody>
            </table>

            </div>

        </div>
       )
    }
}

export default WorkpositionNew
import React from 'react';
import WorkpositionForm from '../components/WorkpositionForm'
import Element from '../components/Element'

class WorkpositionNew extends React.Component {

    state = {
        form: {
            name: ''
        }
    }

    //Obtenemos el valor del input:
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

    render(){
       return (
        <div className="row">
            <div className="col-sm">
                <h3>Nuevo Cargo</h3>
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
                    />
                </tbody>
            </table>

            </div>
            <div className="col-sm">
            {/* //Podemos tener el controlador en el componente ansestro
            //y enviarle la función mediante las props */}
            <WorkpositionForm
                onChange={this.handleChange} 
                form={this.state.form}
            />
            </div>

        </div>
       )
    }
}

export default WorkpositionNew
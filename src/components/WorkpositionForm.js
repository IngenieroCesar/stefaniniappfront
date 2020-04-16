import React from 'react';

class WorkpositionForm extends React.Component { 

    render(){
        const {onChange, onSubmit, form} = this.props

       return (
        <div className="container">
            
            <form 
                //Llamamos la función para evitar el reload de la pagina
                onSubmit={onSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Name" 
                        name="name"
                        onChange={onChange}
                        //Con este metodo nos aseguramos de que la información tenga una sola fuente
                        value={form.title}
                        required
                    />
                </div> 
                <br></br>             
                <button 
                    type="submit" 
                    className="btn btn-primary float-right"
                >
                    Guardar
                </button>
            </form>
        </div>
       )
    }
}

export default WorkpositionForm
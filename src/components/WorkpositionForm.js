import React from 'react';

class WorkpositionNew extends React.Component {


    //Evento para empaquetar nuestra colección y enviarla con el submit
    handleSubmit = e => {
        //Evitamos que el submit nos refresque la pagina
        e.preventDefault()
        console.log(this.state)
    }
    

    render(){
        const {onChange, form} = this.props

       return (
        <div className="container">
            
            <form 
                // onSubmit={onSubmit}
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
                    />
                </div>              
                <button 
                    type="submit" 
                    className="btn btn-primary float-right"
                >
                    Submit
                </button>
            </form>
        </div>
       )
    }
}

export default WorkpositionNew
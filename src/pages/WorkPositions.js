import React from 'react';
import WorkPositionList from '../components/WorkPositionList'
// import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton';
import Loading from '../components/Loading'
import FatalError from './500'
import WorkpositionUpdate from './WorkpositionUpdate'


class WorkPositions extends React.Component {
    //Estamos haciendo el llamado a un "API".
        //Estamos generando un estado unicial para los test
        state = {
            data: [],
            //Establecemos un estado para el componente Loading
            loading: true,
            error: null,
            eliminar: false

        }

        //Consumimos nuestra API de back, Función asincrona
        async componentDidMount(){
            await this.fetchWorkpositions()
        }

        fetchWorkpositions = async () => {
            //Manejo de errores
            try {
                //Hacemos llamado al API
                let res = await fetch('/api/workposition')
                //convertimos la respuesta
                let data = await res.json()

                //Usamos nuestro state para renderizar la informacíon
                this.setState({
                    data,
                    //Cambiamos el estado de Loading cuando carguen nuestros datos
                    loading: false
                })
                // console.log(data)
            } catch (error) {
                //Usamos nuestro state para renderizar la informacíon
                this.setState({
                    //Cambiamos el estado de Loading cuando carguen nuestros datos
                    loading: false,
                    error
                })
            }

        }
        //
        showModalDelete = async e =>{
            try {
                let config = {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                }
                //Asignamos el id obtenido por el boton del evento
                let id = e.target.value

                // id seleccionado para eliminar
                let res = await fetch (`/api/workposition/${id}`, config)

                let json = await res.json()

                if(res){
                    
                }

                
               

                
            } catch (error) {

            }
            this.fetchWorkpositions()
        }
            
    render(){
        //Validamos si la petición al API se ha completado ó no:

        if(this.state.loading){
            return < Loading />
        }
        //Validamos si existen errores
        if(this.state.error){
            return <FatalError />
        }

        // console.log(this.state.data)
        return(
            
            <React.Fragment >
                <div className="container">
                    <div className="row ">
                         {/* Navegación de nuestro conponente!! */}

                        {/* <Welcome
                            username="Cesar"
                        /> */}
                        
                        {/* Cuerpo de nuestro conponente!! */}
                        <AddButton
                            url='/workpositions/new'
                        />
                        <WorkPositionList
                            //obtenemos los datos de la API
                            positions={this.state.data}
                            eliminar = {this.showModalDelete}
                            Actualizar ={this.fetchWorkpositions}
                            
                        />

                        {/* Footer de nuestro conponente!! */}
                        {/* <Footer
                            info= 'StefaniniTest',
                            url='/exercise/new'
                        /> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default WorkPositions;
import React from 'react';
import WorkPositionList from '../components/WorkPositionList'
// import Welcome from '../components/Welcome'
// import AddExercise from '../components/AddExercise';

class WorkPositions extends React.Component {
    //Estamos haciendo el llamado a un "API".
    constructor(props){
        super(props)
        //Estamos generando un estado unicial para los test
        this.state = {
            data: [{
                "id": 1,
                "name": "Technique Guides"
            },{
                "id": 2,
                "name": "Skills Training"
            },{
                "id": 3,
                "name": "Strength Training"
            }]

        }
    }
    
    render(){
        // console.log(this.state.data)
        return(
            
            <div>
                {/* Navegación de nuestro conponente!! */}

                {/* <Welcome
                    username="Cesar"
                /> */}

                {/* Cuerpo de nuestro conponente!! */}
                <WorkPositionList
                    positions={this.state.data}
                />
                {/* <AddExercise
                    url='/exercise/new'
                /> */}

                {/* Footer de nuestro conponente!! */}
                {/* <Footer
                    info= 'StefaniniTest',
                    url='/exercise/new'
                /> */}

            </div>
        )
    }


}

export default WorkPositions;
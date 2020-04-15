import React from 'react';
import WorkPositionList from '../components/WorkPositionList'
// import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton';

class WorkPositions extends React.Component {
    //Estamos haciendo el llamado a un "API".
        //Estamos generando un estado unicial para los test
        state = {
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
    
    render(){
        // console.log(this.state.data)
        return(
            
            <div>
                {/* Navegación de nuestro conponente!! */}

                {/* <Welcome
                    username="Cesar"
                /> */}

                {/* Cuerpo de nuestro conponente!! */}
                <AddButton
                    url='/workpositions/new'
                />
                <WorkPositionList
                    positions={this.state.data}
                />

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
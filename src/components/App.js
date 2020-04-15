import React from 'react';
//Importamos reactrouter.
import { BrowserRouter, Route } from 'react-router-dom';
import WorkPosition from '../pages/WorkPositions'
// import WorkPositionCreate from '../pages/WorkPositionCreate'

//Componente funcional, Es el enrutador de nuestra aplicación.
function App(){
    return(
        <BrowserRouter>
            {/* Este componente se encarga de renderear el ui del componente que digamos */}
            <Route exact path="/workpositions" component={WorkPosition} />
            {/* <Route exact path="/workposition/create" component={WorkPositionCreate} /> */}
        </BrowserRouter>
    )
}

export default App;
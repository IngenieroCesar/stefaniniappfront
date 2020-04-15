import React from 'react';
//Importamos reactrouter.
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WorkPosition from '../pages/WorkPositions'
import NotFound from '../pages/NotFound'
import WorkpositionsNew from '../pages/WorkpositionsNew'

//Componente funcional, Es el enrutador de nuestra aplicación.
function App(){
    return(
        <BrowserRouter>
            <Switch>
                {/* Este componente se encarga de renderear el ui del componente que digamos */}
                <Route exact path="/workpositions" component={WorkPosition} />
                <Route exact path="/workpositions/new" component={WorkpositionsNew} />
                {/* <Route exact path="/workposition/create" component={WorkPositionCreate} /> */}
                {/* Esta ruta nos Envia un error de ruta */}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
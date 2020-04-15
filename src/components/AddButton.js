import React from 'react';
// import './styles/AddExercise.css';
import { Link } from 'react-router-dom';

function AddButton(props) {
return (
    <div className="center-element">
    {/* // Con este componente evitamos que se refresque nuestra pagina! */}
        <Link to={props.url}>
            <button className="succes">Nuevo</button>
        </Link>
    </div>
)
}

export default AddButton
import {
    GET_LINKS
} from '../types';

const initialState = {
    links: []
}

const helperReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_LINKS:
            return {
                ...state,
                links: [
                    {name: 'Servicios', route: 'services'},
                    {name: 'Portafolio', route: 'portfolio'},
                    {name: 'Sobre CODDA', route: 'about'},
                    {name: 'Contacto', route: 'contact'}
                ]
            }

        default: 
            return state;
    }
}

export default helperReducer;
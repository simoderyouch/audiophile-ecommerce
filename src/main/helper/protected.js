import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { MyContext } from "../Context/context";

const Protected = ({ children }) => {

    const { check } = useContext(MyContext)


    if (!check) {
        return <Navigate to="/" />;
    }




    return children;


};

export default Protected;
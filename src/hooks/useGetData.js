import {useState, useEffect } from 'react';
const api = "https://us-central1-gndx-cv.cloudfunctions.net/me";

const useGetData = () => {
    const [mydata, setData] = useState([]); //Estado inicial

    //Petición a la api
    useEffect(() => {
        fetch(api)
        .then(response => response.json())  //conversion de la respuesta a un objeto json
        .then(data => setData(data))    //pasando la información a la data
    },[])   //Se pasa un arreglo vacio para el useEffect entre y ejecute nuestro fetch una vez renderizado el componente

    return mydata;
}

export default useGetData;
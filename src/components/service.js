import React from "react";
import data from "./data";
import Mount from "./pages/mountain";

const Service = ({id}) => {
    const el = data.filter(item => item.id === parseInt(id, 10) );
    return (
        <Mount img={el[0].img} title={el[0].title} text={el[0].text} />
    )
}

export default Service;

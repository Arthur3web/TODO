import React from 'react';

function Employee({name, surname, salary}) {

    return <p>
        name: <span>{name}</span>,
        surname: <span>{surname}</span>,
        salary: <span>{salary}</span>
    </p>;
}

export default Employee;
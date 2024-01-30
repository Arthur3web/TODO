import React, { useState } from 'react';
import UserField from './UserField';

function User({
    id,
    nameUser,
    firstNameUser,
    ageUser,
    changeField
}) {

    // console.log('isEdit', isEdit)

    return <tr>
		<UserField id={id} text={nameUser} 
			type="name" changeField={changeField} /> 
		<UserField id={id} text={firstNameUser} 
			type="firstname" changeField={changeField} /> 
		<UserField id={id} text={ageUser} 
			type="age" changeField={changeField} /> 
	</tr>;
}

export default User;
import React from 'react'
import { getItem } from '../Serviços/LocalStoragefuncs'

export const Profile = (props) => {
  const user =  getItem('usuario')
  
    
  const toProfileEdit = () => {
  const { history: {push} } = props;
    push('/profile/edit')
  }


  return (
    <div>
        <p>{`Name: ${user.name}`}</p>
        <p>{`CPF: ${user.cpf}`}</p>
        <p>{`Email:${user.email}`}</p>
        
        <button
        onClick={ toProfileEdit } 
        >
         Edit Profile
         </button>
    </div>
  )
}

import React from 'react';
import './userCard.css';

const UserCard = (props) => {
     const selectedUser = (e) => {
         e.currentTarget.classList.toggle('selectUser');
     }
     const {user : {isActive: status, picture, about, email, name}} = props;
     return (
         <div className='userCard' onClick={(e) => selectedUser(e)}>
             <div className='headerCard'>
                 <p className={status ?  'active' : 'not-active'}></p>
                 <img src={picture} alt=""/>
                 <p>{name}</p>
             </div>
             <div className='mainContent'>
                 {about}
             </div>
             <div className='footerCard'>
                 <a href=''>{email}</a>
             </div>
         </div>
        );
}

export default UserCard;

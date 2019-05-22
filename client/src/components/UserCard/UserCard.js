import React from 'react';
import './userCard.css';
import {removeUser} from "../../store/actions";
import {connect} from "react-redux";

const UserCard = (props) => {

     const {user : {status, about, email, name, _id}, removeUser} = props;
     return (
         <div className='userCard'>
             <div className='headerCard'>
                 <p className={status ?  'active' : 'not-active'}></p>
                 <p>{name}</p>
                 <p>{name}</p>
                 <p className='cancelButton' onClick={() => removeUser({"id":_id})}>X</p>
             </div>
             <div className='mainContent'>
                 {about}
             </div>
             <div className='footerCard'>
                 <a href={`mailto:${email}`}>{email}</a>
             </div>
         </div>
        );
};
const mapStateToProps = state => {
    return {
        // allUser: state.allUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeUser: (data) => dispatch(removeUser(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);

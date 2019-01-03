import React, { PureComponent } from 'react';
import './userCard.css';

 class Index extends PureComponent {
     render() {
        const {user : {isActive: status, picture, about, email, name}} = this.props;
        return (
            <div className='userCard'>
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
}

export default Index;

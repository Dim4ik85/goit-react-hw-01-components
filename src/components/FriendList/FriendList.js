import React from "react"
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({friends}) => (

    <ul className={s.friendList}>
        {friends.map(({isOnline,id,avatar,name})=> (
        <li className={s.item} key={id}>
            <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
        ) )}
    </ul>

);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
  };
  

export default FriendList;
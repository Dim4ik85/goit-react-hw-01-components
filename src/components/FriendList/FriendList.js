import React from "react"
import PropTypes from 'prop-types';

const FriendList = ({friends}) => (

    <ul class="friend-list">
        {friends.map(({isOnline,id,avatar,name})=> (
        <li class="item" key={id}>
            <span class="status" data-source={isOnline}></span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </li>
        ) )}
    </ul>

);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
  };
  

export default FriendList;
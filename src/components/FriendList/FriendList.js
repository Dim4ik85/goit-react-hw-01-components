import React from "react"

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

export default FriendList;
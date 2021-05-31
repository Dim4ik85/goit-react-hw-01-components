import React from "react";

const Profile = ({avatar,name,tag,location,
  stats: { followers, views, likes },}) => (

    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          class="avatar"
        />
        <p class="name">{name}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">{followers}</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">{views}</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">{likes}</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
);

export default Profile;
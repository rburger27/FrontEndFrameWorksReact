import React, {Component} from 'react';

class User extends Component {
  render() {
    const {user} = this.props
    return (
      <section className="github--profile">
        <div className="github--profile__info">
          <a href={user.homeUrl} target="_blank" title={user.name || user.username}><img src={user.avatar} alt={user.username}/></a>
          <h2>
            <a href={user.homeUrl} title={user.username} target="_blank">{user.name || user.username}</a>
          </h2>
          <h3>{user.location || ''}</h3>
        </div>
        <div className="github--profile__state">
          <ul>
            <li>
              <i>{user.followers}</i>
                <span> Followers</span>
            </li>
            <li>
                <i>{user.repos}</i>
                <span> Repositories</span>
            </li>
            <li>
                <i>{user.following}</i>
                <span> Following</span>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default User;

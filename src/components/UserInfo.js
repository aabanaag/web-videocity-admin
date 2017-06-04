import React from 'react';

const UserInfo = ({name, sub}) => {

  const renderName = () => {
    if (sub) {
      return (
        <h4>{name} <small>as {sub}</small></h4>
      )
    } else return <h4>{name}</h4>
  }

  return(
    <div className="user-info-component">
      { renderName() }
    </div>
  )
}

export default UserInfo;

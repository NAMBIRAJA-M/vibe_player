import React from 'react'

function Profile(props) {

  const url = props.user.photos[1].value;
  const [clicked, setclicked] = React.useState(false);
  function handleclick() {
    setclicked(prevstate => !prevstate);
  }
  return (
    <div>
 
      <div className='img-container' onClick={handleclick}>
        <img src={url} />
      </div>
      {clicked ?
        <div className='options'>
          <p>Profile</p>
          <a href='http://localhost:4000/logout' onClick={() => { props.onLogOut }}  >Logout</a>
        </div> : null}
    </div>

  )
}

export default Profile;

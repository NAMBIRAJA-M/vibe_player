import React from 'react'

export default function AuthSpotify() {
const [backend,setBackend]=React.useState(null);

React.useEffect(()=>{
     fetch("/auth/spotify")
    .then(response => response.json())
    .then(data => {setBackend(data)})
    
},[])

  return (
    <div>
 {backend ? (
      <p>{backend.users}</p> 
    ) : (
      <p>Loading...</p>  
    )}
    </div>
  )
}

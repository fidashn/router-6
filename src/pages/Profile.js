import React from 'react';
import { useNavigate, useParams } from  'react-router-dom';

function Profile() {

  let navigate = useNavigate();
  let { username } = useParams();

  return (
    <div> { username }'s Profile
      <button onClick={()=>navigate('/about')}>change to about page</button>
    </div>
  )
}

export default Profile
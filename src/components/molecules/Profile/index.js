import React,{useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../../atoms/LogoutButton';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [open,setOpen]=useState(false);
  
  function handleOpen(){
    setOpen(!open);
  }

  return (
    isAuthenticated && (
      <>
        <div style={{marginLeft: "850px",marginTop: "-47px"}}>
          <img onClick={handleOpen}
            alt="UserAvatar"
            style={{ margin: "7px" , height: "35px",borderRadius: "25px"}}
            src={user.picture}
          ></img>
          {open && <div style={{ zIndex: 1,position: "absolute"}}>
            <div>Signed in as</div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <LogoutButton />
          </div>}
        </div>
      </>
    )
  );
};

export default Profile;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { baseUrl, signout } from "../auth/auth";

const Profile = () => {
  const profile = useSelector((state) => state.profileReducer.user_profile);

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.search.includes("code=")) navigate("/");
  }, []);

  const handleLogin = async (e) => {
    await signout.logout({
      baseUrl,
    });
  };

  return (
    <div>
      Profile
      <div>
        <button className="button" onClick={handleLogin}>
          Sign Out
        </button>
        {profile && <div>{profile}</div>}
      </div>
    </div>
  );
};

export default Profile;

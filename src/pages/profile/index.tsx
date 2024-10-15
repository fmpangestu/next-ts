import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data }: any = useSession();
  return (
    <div>
      <h1>
        username:{data && data.user.username}
        {""}
      </h1>
      <h1>
        fullname:{data && data.user.fullname}
        {""}
      </h1>
      <h1>
        email:{data && data.user.email}
        {""}
      </h1>
    </div>
  );
};
export default ProfilePage;

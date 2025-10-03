import { useGlobalContext } from "../hooks/useGlobalContext";

function Profile() {
  const { dispatch, user } = useGlobalContext();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Iltimos, tizimga kiring.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center p-8">
      <div className="shadow-xl rounded-xl py-8 px-4 sm:p-8 w-full max-w-md text-center border border-neutral-700">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            user.name
          )}&background=random`}
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
        />
        <h3 className="text-3xl font-bold mb-2">{user.name}</h3>
        <p className="mb-4">{user.email}</p>
        <p>
          📱 <span className="font-medium">{user.phone}</span>
        </p>
        <button
          onClick={handleLogout}
          className="mt-6 btn btn-primary w-[170px] sm:w-[250px] h-9 rounded-md text-[16px]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;

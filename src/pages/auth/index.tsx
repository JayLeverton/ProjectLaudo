import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router";

export const Auth = () => {
  const navigate = useNavigate();

  const { data, mutateAsync } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const handleLogin = async () => {
    try {
      const data = await mutateAsync();
      if (data?.guest_session_id) {
        localStorage.setItem("guest_session_id", data.guest_session_id);
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="mt-[--navbar-height]">
      <div>
        <h1>Welcome! Login by registering as a Guest below.</h1>
      </div>
      <div>
        <button
          onClick={handleLogin}
          className="border p-2 rounded-lg shadow-md shadow-zinc-950 drop-shadow-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

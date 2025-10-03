import FormInput from "../components/FormInput";
import AuthTabs from "../components/AuthTabs";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setTimeout(
        () => toast.warning("⚠️ Iltimos, barcha maydonlarni to‘ldiring!"),
        0
      );
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      setTimeout(() => toast.success("✅ Kirish muvaffaqiyatli!"), 0);
      navigate("/");
    } else {
      setTimeout(() => toast.error("❌ Email yoki parol noto'g'ri!"), 0);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card max-w-72 sm:max-w-96 shadow-lg dark:shadow-2xl dark:border dark:border-blue-700 rounded-xl p-5">
        <AuthTabs />
        <form onSubmit={handleSubmit} className="space-y-3">
          <FormInput
            name="email"
            type="email"
            placeholder="example@mail.com"
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="••••••••"
            label="Password"
          />
          <div className="pt-1">
            <button className="btn btn-primary w-full h-9 text-[16px] rounded-md">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

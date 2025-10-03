import AuthTabs from "../components/AuthTabs";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");

    if (!name || !email || !phone || !password) {
      setTimeout(
        () => toast.warning("⚠️ Iltimos, barcha maydonlarni to‘ldiring!"),
        0
      );
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      setTimeout(
        () => toast.error("❌ Bu email allaqachon ro'yxatdan o'tgan!"),
        0
      );
      return;
    }

    users.push({ name, email, phone, password });
    localStorage.setItem("users", JSON.stringify(users));
    setTimeout(() => toast.success("✅ Ro'yxatdan o'tish muvaffaqiyatli!"), 0);
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card max-w-72 sm:max-w-96 shadow-lg dark:shadow-2xl dark:border dark:border-blue-700 rounded-xl p-5">
        <AuthTabs />
        <form onSubmit={handleSubmit} className="space-y-3">
          <FormInput
            name="name"
            type="text"
            placeholder="Your name"
            label="Name"
          />
          <FormInput
            name="email"
            type="email"
            placeholder="example@mail.com"
            label="Email"
          />
          <FormInput
            name="phone"
            type="phone"
            placeholder="+998 90 390 03 26"
            label="Phone Number"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="••••••••"
            label="Password"
          />
          <div className="pt-1">
            <button className="btn btn-primary w-full text-[16px] h-9 rounded-md">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

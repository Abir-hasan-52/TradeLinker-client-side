import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log("User logged in successfully:", user);
        // You can redirect or show a success message here
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        // Handle login error, e.g., show an error message
        // alert("Login failed: " + error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `Login failed: ${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  //   signinWthGoogle function

  const handleLogInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User logged in with Google successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        // console.log("User logged in with Google successfully:", user);
        // You can redirect or show a success message here
      })
      .catch((error) => {
        console.error("Error logging in with Google:", error);
        // Handle Google login error, e.g., show an error message
        alert("Google login failed: " + error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4f8] to-[#cbd9ec] px-4 py-10">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Logo & Title */}
        <div className="mb-6 text-center">
          <img
            src="https://i.ibb.co/rK62cRcX/trade-linker-international-logo.jpg"
            alt="TradeLinker Logo"
            className="w-25 mx-auto mb-2"
          />
          <h2 className="text-3xl font-bold text-[#1B365D]">Welcome Back</h2>
          <p className="text-gray-500 text-sm">
            Login to your TradeLinker account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700 block mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4FB3E8] outline-none"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 block mb-1"
            >
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#4FB3E8] outline-none pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-11 transform -translate-y-1/2 text-gray-500 hover:text-[#4FB3E8] focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1B365D] hover:bg-[#4FB3E8] transition text-white py-2 rounded-xl font-semibold"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <Link
          to="/"
          onClick={handleLogInWithGoogle}
          className="w-full border border-gray-300 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </Link>

        {/* Register Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#1B365D] hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

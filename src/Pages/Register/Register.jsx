import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;

    // Basic validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    // Reset error
    setError("");

    // Here you would typically handle the registration logic, e.g., calling an API or Firebase auth
    // console.log("Registered:", { name, email, photoURL, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
          navigate("/")
        // console.log("User created successfully:", user);
        // You can redirect or show a success message here
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        setError(error.message); // Set error message to display
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#1A1A1A]">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join TradeLinker – Where Bulk Meets Business.
        </p>

        {/* Register Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="input w-full"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="input w-full"
            required
          />
          <input
            name="photo"
            type="url"
            placeholder="Photo URL (optional)"
            className="input w-full"
          />
          {/* <input
            name="password"
            type="password"
            placeholder="Password"
            className="input w-full"
            required
          /> */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input w-full pr-10" // Add padding for icon
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Password Rules */}
          <div className="text-xs text-gray-500">
            Password must have:
            <ul className="list-disc pl-5">
              <li>At least 6 characters</li>
              <li>One uppercase letter</li>
              <li>One lowercase letter</li>
            </ul>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#1B365D] hover:bg-[#4FB3E8] text-white py-2 rounded-xl font-semibold"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#1B365D] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

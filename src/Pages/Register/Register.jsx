 import React, { useState } from 'react';
import { Link } from 'react-router';

const Register = () => {
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#1A1A1A]">Create Account</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Join TradeLinker – Where Bulk Meets Business.</p>

        {/* Register Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="input w-full" required />
          <input type="email" placeholder="Email Address" className="input w-full" required />
          <input type="url" placeholder="Photo URL (optional)" className="input w-full" />
          <input type="password" placeholder="Password" className="input w-full" required />

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
          <button type="submit" className="w-full bg-[#1B365D] hover:bg-[#4FB3E8] text-white py-2 rounded-xl font-semibold">
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#1B365D] hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

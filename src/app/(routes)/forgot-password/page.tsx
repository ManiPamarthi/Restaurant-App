"use client";

import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setLoading(true);
    setError("");

    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
      setEmail("");
    } catch {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <FiLock className="w-12 h-12 text-indigo-600 mx-auto" />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">
            Forgot Your Password?
          </h1>
          <p className="text-gray-600 text-sm">
            Enter your email address, and we'll send you instructions to reset your password.
          </p>
        </div>

        {success ? (
          <div className="rounded-md bg-green-50 p-4">
            <p className="text-sm text-green-800">
              Password reset instructions have been sent to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={100}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    error ? "border-red-300" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  aria-invalid={error ? "true" : "false"}
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={loading || !email}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin" />
                ) : (
                  "Reset Password"
                )}
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <Link
              href="/"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
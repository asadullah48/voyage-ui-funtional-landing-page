"use client";
import React, { useState, useEffect, FormEvent } from "react";
import { useFirebase } from "../../";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";

const Page: React.FC = () => {
  const firebase = useFirebase();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (firebase?.isLoggedIn) {
      router.push("/");
    }
  }, [firebase, router]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      console.log("Signing up a user...");
      await firebase?.signupUserWithEmailAndPassword(email, password);
      console.log("Signup successful");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="max-container padding-container h-screen flex justify-center items-center bg-zinc-200">
        <div className="card bg-[#131314] w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="text-center text-[#FFD015] font-bold text-2xl">SignUp</div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter email"
                className="input input-bordered bg-neutral-300 text-[#131314]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered bg-neutral-300 text-[#131314]"
                required
              />
              <div
                className="absolute right-12 top-[215px] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                className="input input-bordered bg-neutral-300 text-[#131314]"
                required
              />
              <div
                className="absolute right-12 top-[307px] cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <Button
              title="Sign Up"
              type="submit"
              className="bg-[#FFD015] text-[#111827] font-semibold text-sm rounded-[8px] mt-6 py-4 px-[52px] cursor-pointer"
            />
            <Link href={"/login"} className="text-center mt-4 block">
              Already have an account?{" "}
              <span className="text-[#FFD015] cursor-pointer">Login</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
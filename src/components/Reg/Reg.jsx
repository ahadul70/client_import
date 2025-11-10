import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

export default function Reg() {
  const authInfo = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [showpass, setShowpass] = useState(false);

  const handleshowpass = () => setShowpass(!showpass);

  const handleRegister = async (e) => {
    e.preventDefault();

    const passwordStrengthRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordStrengthRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    setLoading(true);
    try {
      const userCredential = await authInfo.createUser(email, password);
      const user = userCredential.user;

      if (name || photoURL) {
        await updateProfile(user, { displayName: name, photoURL });
      }

      // Reset form
      setEmail("");
      setPassword("");
      setName("");
      setPhotoURL("");

      toast.success("🎉 Registration successful!");
      navigate("/");
    } catch (err) {
      toast.error(
        err.code === "auth/email-already-in-use"
          ? "This email is already registered."
          : "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 p-6 relative">
        <div className="flex justify-center -mt-16 mb-4">
          {" "}
          {photoURL ? (
            <img
              src={photoURL}
              alt="Avatar Preview"
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
              onError={(e) => (e.target.style.display = "none")}
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-md flex items-center justify-center text-gray-400 font-semibold">
              {" "}
              Avatar{" "}
            </div>
          )}{" "}
        </div>
        <form className="card-body pt-0" onSubmit={handleRegister}>
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full mb-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label">Image URL</label>
          <input
            type="text"
            className="input input-bordered w-full mb-2"
            placeholder="Paste image URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <a
            href="https://postimages.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm mb-2 inline-block"
          >
            Upload here (Postimages.org)
          </a>

          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered w-full mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showpass ? "text" : "password"}
              className="input input-bordered w-full pr-16"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={handleshowpass}
              className="btn btn-sm absolute right-2 top-1/2 -translate-y-1/2"
            >
              {showpass ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className={`btn btn-neutral w-full mt-4 ${
              loading ? "loading" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="link link-hover text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

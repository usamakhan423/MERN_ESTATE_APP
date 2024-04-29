import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation here
    if (!formData.email.trim()) {
      toast.error('Email is required.!!')
      return;
    }
    if (!formData.password.trim()) {
      toast.error('Password is requried.!!')
      return;
    }
    // Clear errors if all fields are valid
    setLoading(true);
    try {
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return;
      }
      setLoading(false);
      navigate('/');
      toast.success('User Login Successfully.')
    } catch (error) {
      setLoading(false);
      toast.error('Wrong Credentials.!!');
    }
  };
  return (
    <div className="p-3 mx-auto max-w-xl">
      <h1 className="font-bold text-center text-3xl py-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          className="border p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white rounded-lg p-3 uppercase text-lg hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex  gap-1 mt-5">
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-800 font-semibold">Signup</span>
        </Link>
      </div>
    </div> 
  );
};

export default Signup;

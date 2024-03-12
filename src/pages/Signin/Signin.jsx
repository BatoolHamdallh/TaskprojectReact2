import { useState } from "react";
import axios from "axios";
import { object, string } from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setError] = useState([]);
  const [loder, setLoder] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const validData = async () => {
    const LoginSchema = object({
      email: string().email().required(),
      password: string().min(8).max(20).required(),
    });
    try {
      await LoginSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      console.log("validation error", error.errors);
      setError(error.errors);
      setLoder(false);
      return false;
    }
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoder(true);
    const validate = await validData();
    if (validate) {
      const formData = new FormData();
      formData.append("userName", user.userName);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("image", user.image);
      try {
        const { data } = await axios.post(
          ` https://ecommerce-node4.vercel.app/auth/signin`,
          {
            email: user.email,
            password: user.password,
          }
        );
        setUser({
          email: "",
          password: "",
        });

        if (data.message == "success") {
          toast.success("Account created succesfully", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        navigate("/");
        console.log(data);
      } catch (error) {
        toast.error(error.response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setLoder(false);
      }
    }
  };
  return (
    <>
      {errors.length > 0
        ? errors.map((error) => <p key={error}> {error} </p>)
        : ""}

      <form onSubmit={handelSubmit}>
        <label className="form-control">Email Address</label>
        <input
          className="form-control"
          name="email"
          type="email"
          onChange={handleChange}
          value={user.email}
        />

        <label className="form-control">Password</label>
        <input
          className="form-control"
          name="password"
          type="password"
          onChange={handleChange}
          value={user.password}
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={loder ? "disabled" : null}
        >
          {!loder ? "Sign Up" : "wait..."}
        </button>
      </form>
    </>
  );
}

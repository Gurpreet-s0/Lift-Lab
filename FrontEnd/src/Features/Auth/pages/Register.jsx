import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { User, Lock, Mail, Calendar, VenusAndMars, Ruler, Weight, Goal } from "lucide-react";
import { Link, useNavigate } from "react-router";
import Logo from "../components/Logo";
import UseAuth from "../Hooks/UseAuth";
import Loading from "../components/Loading";

const Register = () => {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [age, setage] = useState("")
  const [height, setheight] = useState("")
  const [weight, setweight] = useState("")
  const [gender, setgender] = useState("Male");
  const [goal, setgoal] = useState("Muscle Gain");
  const [experience, setExperience] = useState("Beginner");

  const navigate = useNavigate()
  const { loading, registerHandler } = UseAuth()

  async function formHandler(e) {
    e.preventDefault()
    await registerHandler({
      username, email, password, age, gender, height, weight, goal,experience
    })

    navigate('/')


    setusername("")
    setage("")
    setemail("")
    setheight("")
    setpassword("")
    setweight("")
    setgender("")
    setExperience("")
    setgoal("")
  }

  function genderSelect(e) {
    setgender(e.target.value)
  }

  function goalSelect(e) {
    setgoal(e.target.value)
  }

  function experienceSelect(e) {
    setExperience(e.target.value)
  }

  return (
    loading ? <Loading /> :
      <div className="absolute left-1/2 top-1/2 h-full w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-6">
        <Logo />
        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="font-heading text-text text-4xl font-bold">
              Create your Account
            </h1>
          </div>

          <form className="space-y-5" onSubmit={(e) => { formHandler(e) }}>
            <div>
              <label className="mb-2 block text-sm font-medium text-text ">
                Username
              </label>

              <Input
                setState={setusername}
                value={username}
                placeholder="Enter Username"
                type="text"
                sideComponent={<User size={18} color="#C7CDD4" />}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-text ">
                Email
              </label>

              <Input
                setState={setemail}
                value={email}
                placeholder="Enter Email"
                type="text"
                sideComponent={<Mail size={18} color="#C7CDD4" />}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-text">
                Password
              </label>

              <Input
                setState={setpassword}
                value={password}
                placeholder="Enter your password"
                type="password"
                sideComponent={<Lock size={18} color="#C7CDD4" />}
              />
            </div>

            <div className="text-primary text-center">Personal Details</div>

            <div className="flex gap-4 ">
              <div>
                <label className="mb-2 block text-sm font-medium text-text">
                  Age
                </label>

                <Input
                  setState={setage}
                  value={age}
                  placeholder="Age"
                  type="number"
                  sideComponent={<Calendar size={18} color="#C7CDD4" />}
                />
              </div>
              <div>
                <label htmlFor="gender" className="mb-2 block text-sm font-medium text-text">Gender</label>
                <select onChange={(e) => {
                  genderSelect(e)
                }} value={gender} id="gender" name="gender" className="w-38 text-text placeholder:text-muted outline-none h-12.5 flex items-center gap-3 rounded-xl border border-border bg-input px-4 py-3 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 ">
              <div>
                <label className="mb-2 block text-sm font-medium text-text">
                  Height (cm)
                </label>

                <Input
                  setState={setheight}
                  value={height}
                  placeholder="Height in cm"
                  type="number"
                  sideComponent={<Ruler size={18} color="#C7CDD4" />}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-text">
                  Weight (kg)
                </label>

                <Input
                  setState={setweight}
                  value={weight}
                  placeholder="Weight in kg"
                  type="number"
                  sideComponent={<Weight size={18} color="#C7CDD4" />}
                />
              </div>
            </div>

            <div>

              <label htmlFor="gender" className="mb-2 block text-sm font-medium text-text">Goal</label>
              <select onChange={(e) => {
                goalSelect(e)
              }} value={goal} id="gender" name="gender" className="w-full text-text placeholder:text-muted outline-none h-12.5 flex items-center gap-3 rounded-xl border border-border bg-input px-4 py-3 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Fat Loss">Fat Loss</option>
                <option value="Strength">Strength</option>
              </select>
            </div>

            <div>
              <label htmlFor="gender" className="mb-2 block text-sm font-medium text-text">Experience level</label>
              <select onChange={(e) => {
                experienceSelect(e)
              }} value={experience} id="gender" name="gender" className="w-full text-text placeholder:text-muted outline-none h-12.5 flex items-center gap-3 rounded-xl border border-border bg-input px-4 py-3 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div className="pt-2">
              <Button className="w-full" content="Create Account" />
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-text-secondary">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary transition-colors duration-200 hover:text-primary-hover hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Register;

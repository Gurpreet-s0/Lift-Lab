import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import {User ,Lock} from 'lucide-react'
import { Link } from 'react-router'
import Logo from '../components/Logo'


const Login = () => {

  return (
   <div className="absolute left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-6">
    <Logo/>
  <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
    
    <div className="mb-8 text-center">
      <h1 className="font-heading text-text text-4xl font-bold">
        Welcome Back!
      </h1>

      <p className="mt-2 text-sm text-text-secondary">
        Login to continue your fitness journey
      </p>
    </div>

    <div className="space-y-5">

      <div>
        <label className="mb-2 block text-sm font-medium text-text ">
          Email or Username
        </label>

        <Input
          placeholder="Enter email or username"
          type="text"
          sideComponent={<User size={18} color="#C7CDD4" />}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-text">
          Password
        </label>

        <Input
          placeholder="Enter your password"
          type="password"
          sideComponent={<Lock size={18} color="#C7CDD4"  />}
        />
      </div>

      <div className="pt-2">
        <Button
          className="w-full"
          content="Login"
        />
      </div>

    </div>

    <div className="mt-8 text-center text-sm text-text-secondary">
      Don't have an account?{" "}
      <Link
        to="/register"
        className="font-semibold text-primary transition-colors duration-200 hover:text-primary-hover hover:underline"
      >
        Register
      </Link>
    </div>

  </div>
</div>
  )
}

export default Login
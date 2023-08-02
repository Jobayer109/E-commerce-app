import React from "react";

const Login = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        <h1>Login to your account</h1>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="email">Email address</label>
              <div>
                <input type="email" name="email" autoComplete="email" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

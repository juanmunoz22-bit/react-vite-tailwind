import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"

function SignIn() {

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Email: </span>
          <span>juan@mail.com</span>
        </p>
        <p>
          <span className="font-light text-sm">Password: </span>
          <span>******</span>
        </p>
        <Link
          to="/"
        >
          <button
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
          >
            Sign in
          </button>
        </Link>
        <div className="text-center">
          <a href="/" className="font-light text-xs underline underline-offset-4">Forgot my password</a>
        </div>
        <button className="border border-black disabled:text-black disabled:border-black rounded-lg mt-6 py-3">
          Create account
        </button>
      </div>
    </Layout>
  )
}

export default SignIn

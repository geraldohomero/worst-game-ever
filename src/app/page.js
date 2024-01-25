import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center"> Worst Game Ever </h1>
      <div className="flex flex-col items-center justify-center">
        <form className="flex flex-col items-center justify-center">
          <input
            className="border-2 border-gray-900 p-2 m-2"
            type="text"
            placeholder="Username"
          />
          <input
            className="border-2 border-gray-900 p-2 m-2"
            type="password"
            placeholder="Password"
          />
          <button className="border-2 border-gray-900 p-2 m-2">
            Login
          </button>
        </form>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center">
            Don't have an account?
          </h2>
          <button className="border-2 border-gray-900 p-2 m-2">
            Register
          </button>
          <button className="border-2 border-gray-900 p-2 m-2">
            Play without an account
          </button>
        </div>
      </div>
    </main>
  );
}

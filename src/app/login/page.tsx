export default function Header() {
  return (
    <div className="border-2 border-rose-200 absolute top-1/2 left-1/2 text-center">
      Login
      <p>Username</p>
      <input type="text" className="border-2"></input>
      <p>Password</p>
      <input type="text" className="border-2"></input>
      <p></p>
      <button className="border-2 bg-green-600 text-cyan-50 m-auto">Login</button>
    </div>
  );
}
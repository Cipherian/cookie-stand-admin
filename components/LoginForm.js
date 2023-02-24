export default function LoginForm({ onLogin }) {
  function submitHandler(event) {
    event.preventDefault();
    const newUser = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    onLogin(newUser)
  }
  return (
    <form className="flex flex-col items-center w-4/5 mx-auto my-8 border-2 border-solid rounded-md bg-form-input-box-green border-button-green" onSubmit={submitHandler}>
      <div className="flex flex-col justify-center w-4/5 py-1">
        <p className="pb-1 font-bold text-center">USER NAME</p>
        <input placeholder=" User Name" name="username" />
      </div>
      <div className="flex flex-col justify-center w-4/5 py-1">
        <p className="pb-1 font-bold text-center">PASSWORD</p>
        <input type="password" name="password" placeholder=" password" />
      </div>
      <div className="w-4/5 py-5">
        <button className="w-full font-semibold align-middle rounded-md h-11 bg-button-green">SIGN IN</button>
      </div>
    </form>
  );
}
export default function Header({ user, onLogout }) {
  return (

    <header className="flex items-center justify-between h-12 bg-lab-green">
      <div className="flex items-center justify-between w-3/5 mx-auto">
        <p1 className="ml-4 text-2xl font-bold" >Cookie Stand Admin</p1>
        {user
          ? <div className="flex flex-row space-x-2 w-fit">
            <button className="h-6 text-sm rounded-md pointer-events-none w-fit bg-fake-button"><p className="px-1">{user.username}</p></button>
            <button className="w-20 h-6 text-sm text-white rounded-md bg-button-green whitespace-nowrap" onClick={onLogout}>Sign Out</button>
            <button className="flex items-center justify-center w-1/3 h-6 my-auto text-xs font-semibold bg-white rounded-sm pointer-events-none"><p className="">Overview</p></button>
          </div>
          : <div>
            
          </div>
          }
      </div>

    </header >
  );

}
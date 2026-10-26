import { useSelector } from 'react-redux'



const Navbar = () => {
  const user = useSelector((store) => store.user)
  const photoUrl = user?.photoUrl ?? user?.photourl
  const initials = [user?.firstname, user?.lastname]
    .filter(Boolean)
    .map((name) => name[0].toUpperCase())
    .join('')

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 shadow-[0_4px_20px_-16px_rgba(15,23,42,0.35)] backdrop-blur">
      <div className="navbar mx-auto min-h-20 max-w-7xl gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-2 py-2 text-slate-900 transition hover:bg-slate-100"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-orange-100 text-xl" aria-hidden="true">
              😳
            </span>
            <span className="text-lg font-black tracking-tight sm:text-xl">
              DEV<span className="text-indigo-600">TINDER</span>
            </span>
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          {user && (
            <p className="hidden text-sm font-semibold text-slate-700 sm:block">
              Welcome, <span className="text-slate-950">{user.firstname}</span>
            </p>
          )}
          <label className="input flex h-10 w-36 items-center gap-2 rounded-xl border-slate-200 bg-slate-50 px-3 text-slate-500 shadow-none transition focus-within:border-indigo-400 focus-within:bg-white focus-within:outline-none focus-within:ring-4 focus-within:ring-indigo-100 sm:w-52">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="size-4 shrink-0"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="min-w-0 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </label>
        {user && (
          <div className="dropdown dropdown-end">
            <button
              type="button"
              tabIndex={0}
              aria-label="Open profile menu"
              className="btn btn-ghost btn-circle h-11 min-h-0 w-11 rounded-full p-0 ring-2 ring-indigo-100 transition hover:ring-indigo-300"
            >
              <div className="grid size-10 place-items-center overflow-hidden rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                {photoUrl ? (
                  <img src={photoUrl} alt="" className="size-full object-cover" />
                ) : (
                  initials || '?'
                )}
              </div>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-30 mt-3 w-52 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl"
            >
              <li>
                <a className="rounded-xl py-2.5 font-medium text-slate-700">
                  Profile
                </a>
              </li>
              <li><a className="rounded-xl py-2.5 font-medium text-slate-700">Settings</a></li>
              <li><a className="rounded-xl py-2.5 font-medium text-rose-600">Logout</a></li>
            </ul>
          </div>
        )}
        </div>
      </div>
    </header>
  )
}

export default Navbar

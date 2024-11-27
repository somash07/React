function NavBar({children}) {
    return (
        <div className="bg-black flex justify-between h-[10vh] p-5 w-full items-center text-white">
           {children}
        </div>
    )
}

export default NavBar

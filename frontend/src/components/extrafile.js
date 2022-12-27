return (
  <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
    <div className="hidden md:flex h-screen flex-initial">
      <Sidebar user={user && user} />
    </div>
    <div className="flex md:hidden flex-row">
      <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
        <HiMenu fontSize={40} className="cursor-pointer" onClick={() => settoggleSideBar(true)} />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <Link to={`user-profile/${user.sub}`}>
        <img src={pic} alt="logo"  className='ml-1 w-20 rounded-full '/>
        </Link>
      </div>
      {toggleSidebar && (
      <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
        <div className="absolute w-full flex justify-end items-center p-2">
          <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => settoggleSideBar(false)} />
        </div>
        <Sidebar closeToggle={settoggleSideBar} user={user && user} />
      </div>
      )}
    </div>
    <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
      <Routes>
        <Route path="/user-profile/:userId" element={<Userprofile />} />
        <Route path="/*" element={<Pins user={user && user} />} />
      </Routes>
    </div>
  </div>
);
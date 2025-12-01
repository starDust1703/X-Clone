const Dashboard = () => {
  const Button = ({ icon, text }) => {
    return (
      <div className='flex w-fit rounded-3xl p-2 items-center cursor-pointer gap-2 hover:bg-[#dadada1f]'>
        <img src={icon} alt={text} width={25} className='invert'/>
        {text && <div>{text}</div>}
      </div>
    )
  }
  return (
    <div className='h-full flex justify-center gap-2'>
      <div className='sticky top-0 h-screen p-2 flex flex-col justify-between'>
        <div className='w-60 flex flex-col gap-2'>
          <img src="/x.svg" alt="X" className='invert w-10 ml-2 mb-3'/>
          <div className='flex flex-col gap-1'>
            <Button icon="/home.svg" text="Home" />
            <Button icon="/search.svg" text="Explore" />
            <Button icon="/bell.svg" text="Notifications" />
            <Button icon="/mail.svg" text="Messages" />
            <Button icon="/slash.svg" text="Grok" />
            <Button icon="/list.svg" text="Lists" />
            <Button icon="/bookmark.svg" text="Bookmarks" />
            <Button icon="/communities.svg" text="Communities" />
            <Button icon="/x.svg" text="Premium" />
            <Button icon="/more.svg" text="More" />
          </div>
          <button className='w-full bg-teal-700 text-white rounded-4xl p-2 cursor-pointer'>Post</button>
        </div>
        <div className='flex items-center gap-2 justify-between p-2'>
          <img src="user.png" alt="dp" />
          <div>
            <p>user.name</p>
            <p>user.handle</p>
          </div>
          <Button icon="/more2.svg" text="" />
        </div>
      </div>
      <div className='border border-gray-700 border-y-0 w-sm'>
        <div className='flex items-center border border-gray-700 border-x-0 border-t-0'>
          <button className='w-full cursor-pointer p-2 hover:bg-[#16171B]'>For you</button>
          <button className='w-full cursor-pointer p-2 hover:bg-[#16171B]'>Following</button>
          <img src="setting.svg" alt="setting" className='invert w-8'/>
        </div>
      </div>
      <div className='sticky top-0 h-screen p-2 w-60 flex flex-col gap-4'>
        <div className='outline-none bg-[#212327] rounded-4xl p-2 flex items-center gap-2'>
          <img src="search.svg" alt="search" className='invert' />
          <input type="text" placeholder='Search' className='outline-none'/>
        </div>
        <div className='bg-[#16171B] p-4 rounded-3xl flex flex-col gap-1'>
          <h2 className='font-bold'>Subscribe to Premium</h2>
          <p className='text-sm'>Subscribe to unlock new features and if eligible, recieve a share of ads revenue</p>
          <button className='bg-blue-400 text-white p-2 rounded-2xl w-fit text-sm'>Subscribe</button>
        </div>
        <div className='bg-[#16171B] p-4 rounded-3xl flex flex-col gap-1'>
          <h2 className='font-bold'>What's happening</h2>
        </div>
        <div className='bg-[#16171B] p-4 rounded-3xl flex flex-col gap-1'>
          <h2 className='font-bold'>Who to follow</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
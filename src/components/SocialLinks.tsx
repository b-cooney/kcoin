const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-4 text-white text-center font-helvetica text-sm">
        <span className="hover:text-blue-200 cursor-pointer transition-colors">
          <a href="https://warpcast.com/~/channel/kcoin">warpcast</a>
        </span>
        <span className="hover:text-blue-200 cursor-pointer transition-colors">
          <a href="https://x.com/hellokcoin">twitter</a>
        </span>
        <span className="hover:text-blue-200 cursor-pointer transition-colors">
          <a href="https://giphy.com/channel/hellokcoin">giphy</a>
        </span>
      </div>
      <div className="font-['Press_Start_2P'] text-3xl">
        ✌️
      </div>
    </div>
  )
}

export default SocialLinks

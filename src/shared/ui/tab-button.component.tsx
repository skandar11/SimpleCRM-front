import { Link } from 'react-router-dom'

interface ITabButtonProperties {
  buttonConfig: { icon: any; text: string }
  link: string
  active?: boolean
  additionalClasses?: string
}

export const TabButton = (properties: ITabButtonProperties) => {
  const { buttonConfig, additionalClasses, link, active } = properties

  return (
    <Link to={link}>
      <button
        className={`py-4 px-[1.125rem] flex items-center justify-start duration-200 ease-out hover:opacity-70  rounded-[0.75rem] w-full font-semibold ${additionalClasses} ${
          active ? 'bg-white text-blue' : 'bg-[#eeeeee10] text-white'
        }`}
      >
        <div className="mr-3">{buttonConfig.icon}</div>
        <span className={`${active ? 'text-black' : 'text-white'} font-semibold`}>
          {buttonConfig.text}
        </span>
      </button>
    </Link>
  )
}

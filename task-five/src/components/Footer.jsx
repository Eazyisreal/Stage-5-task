import Logo from "../assets/icons/LogoW.svg";

const footerMenu=[
    {
        title: 'Menu',
        subMenu:[
            {
                title: 'Home',
                link: '#'
            },
            {
                title: 'Converter',
                link: '#'
            },
            {
                title: 'How It Works',
                link: '#'
            },
        ]
    },
    {
        title: 'About Us',
        subMenu:[
            {
                title: 'About',
                link: '#'
            },
            {
                title: 'Contact Us',
                link: '#'
            },
            {
                title: 'Privacy Policy',
                link: '#'
            },
        ]
    }, {
        title: 'Screen Record',
        subMenu:[
            {
                title: 'Browser Window',
                link: '#'
            },
            {
                title: 'Desktop',
                link: '#'
            },
            {
                title: 'Application',
                link: '#'
            },
        ]
    },
]
export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-primary px-4 py-8 lg:py-[6.12rem] lg:px-8 w-full ">
      <div className="flex flex-col md:flex-row w-full lg:w-[90%] wrapper gap-8 justify-between items-center ">
        <div className="flex items-center w-full lg:w-1/2 py-[.625rem] gap-[.65rem]">
          <img src={Logo} alt="Image of Logo" />
          <h1 className="inter text-white font-bold text-base ">HelpMeOut</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full  items-start gap-20">
            {footerMenu.map((item) => (
                <ul key={item.title} className="flex flex-col w-full items-start gap-[1.625rem]">
                    <h3 className="text-base sora font-medium w-full text-white">{item.title}</h3>
                    {item.subMenu.map((link) => (
                        <li key={link.title} className="text-base w-full work-sans font-medium text-white text-opacity-50">
                            <a href={link.link}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
      </div>
    </footer>
  );
}

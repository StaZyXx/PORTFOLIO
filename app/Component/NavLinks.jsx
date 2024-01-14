import  Link  from 'next/link';
const NavLinks =  ({href, title}) => {
    return (
        <li>
            <Link
                href={href}
                className="block py-2 pl-3 text-white hover:text-[#FB8D1E]">
                {title}
            </Link>
        </li>
    )
};
export default NavLinks;
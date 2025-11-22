import React from 'react'

const Footer = () => {
    const Link = ({text, to}) => {
        return (
            <a className="p-1 leading-8 focus:underline hover:underline outline-none" href={to}>{text}</a>
        )
    }
    return (
        <div className='flex text-center  w-full p-6 text-xs text-[#71767B] mt-20'>
            <p>
                <Link text="About" to={"#"} /><span> | </span>
                <Link text="Download the X app" to={"#"} /><span> | </span>
                <Link text="Grok" to={"#"} /><span> | </span>
                <Link text="Help Center" to={"#"} /><span> | </span>
                <Link text="Terms of Service" to={"#"} /><span> | </span>
                <Link text="Privacy Policy" to={"#"} /><span> | </span>
                <Link text="Cookie Policy" to={"#"} /><span> | </span>
                <Link text="Accessibility" to={"#"} /><span> | </span>
                <Link text="Ads info" to={"#"} /><span> | </span>
                <Link text="Blog" to={"#"} /><span> | </span>
                <Link text="Careers" to={"#"} /><span> | </span>
                <Link text="Brand Resources" to={"#"} /><span> | </span>
                <Link text="Advertising" to={"#"} /><span> | </span>
                <Link text="Marketing" to={"#"} /><span> | </span>
                <Link text="X for Business" to={"#"} /><span> | </span>
                <Link text="Developers" to={"#"} /><span> | </span>
                <Link text="News" to={"#"} /><span> | </span>
                <Link text="Settings" to={"#"} /><span> | </span>
                © 2025 X Corp.
            </p>
        </div>
    )
}

export default Footer
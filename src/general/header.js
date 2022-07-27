import React from "react"

function Header() {
    return(
        <header>
            <div className="child_header">
                <h2 className="child_header_title">
                    ZedRoff
                    </h2>
            </div>
            <ul className="child_header">
                <li className="child_header_element">Home</li>
                <li className="child_header_element">Projects</li>
                <li className="child_header_element">Me</li>
                <li className="child_header_element">Links</li>
                <li className="child_header_element">Blog</li>
                <li className="child_header_element">Contact</li>
            </ul>

        </header>
    )
}

export default Header;
import { useState } from "react"
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)  
    return (
    <header>
        <div className='topHeader'>
        <a href="mailto:info@icrhsinternational.com">info@icrhsinternational.com</a>
        <a href="tel:+25412345678">+25412345678</a>
        </div>
        <div className='mainHeader'>
        <img src="/assets/ICHRR.webp" width={100}/>
        <button
        className="menuButton"
        onClick={() => setMenuOpen(!menuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
          <nav className={`navMenu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">What we do</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          </div>
      </header>
    )
  }
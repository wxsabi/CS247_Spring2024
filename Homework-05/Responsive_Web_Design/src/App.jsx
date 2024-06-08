import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numProjects, setNumProjects] = useState(5);
  const images = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OcW1kC6xV6xx5Tv9jBE0cgHaFy%26pid%3DApi&f=1&ipt=d8e86e9b4cd40aacb4ed90ad0cf20d13ba4a5334ff489ef7af57082b4e62f3a3&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Tfgc5vZC_FSf-BZCfZubmgHaEo%26pid%3DApi&f=1&ipt=6615330f58acc5994ff473286de04793e012b67cabbcfb33716d75fb8e91a8b3&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.fXWi004_JujDE0xhnPehkQHaEK%26pid%3DApi&f=1&ipt=acb782e70eaf2865ceb3d17d5fad48227ad49ab628627cf4e246a9d0980df45e&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ntDnas5Me0IhHOQF8zpTDQHaEK%26pid%3DApi&f=1&ipt=154a93781063d029e49dfd53533cfe5804b7da43732cc7348e0c36f02030e1ea&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8r9gnoSl1MnWvQzUYtZ13wHaEK%26pid%3DApi&f=1&ipt=836cf4574b6fe21abda74bd2281e59781f848cd21de61d2968778af4e36808c0&ipo=images'
  ];
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <>
      <nav id="top_nav">
        <div id="home_icon_div">
          <ul>
            <li id="home_icon_li">
              <img id="home_icon_img" src="http://aux3.iconspalace.com/uploads/547261359.png" width="25" height="25">
              </img><a id="home_icon_a" href="#My Website">My Website</a>
            </li>
          </ul>
          
        </div>
        <div id="menu_toggle" onClick={() => setMenuOpen(!menuOpen)} style={{width: '25px', height: '25px', backgroundColor: 'red'}}></div>
        <div id="menu_div" className={menuOpen ? 'open' : ''}>
          <ul>
            <li class="right"><a href="#Contact Me">Contact Me</a></li>
            <li class="right"><a href="#About Me">About Me</a></li>
            <li class="right"><a href="#Blog">Blog</a></li>
            <li class="right"><a href="#Portfolio">Portfolio</a></li>
            <li class="right"><a href="#Home">Home</a></li>
          </ul>
        </div>
      </nav>
      <div id="padding_div">
        <div class="page_content">
          <div id="top_half" class="page_content">
            <div id="lefty_div">
              <div>
                <h2>Welcome to Responsive Web Design</h2>
                <p>Hello, Something about me. More talking that is really interesting.
                  Hope you like the website. Really impress them. Blah blah blah. Don't
                  forget a picture even if it's an avatar and not a real life photo.
                  Short but with enough content to draw them in.
                </p>
              </div>
            </div>
            <div id="righty_div">
              <img src='http://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Download-Spiderman-Wallpaper.jpeg' alt='Spiderman Mugshot' width="250" height="146">
              </img>
            </div>
          </div>
          <h3>My current projects</h3>
          <div id="bottom_half" class="page_content">
            {Array.from({ length: numProjects }, (_, i) => (
              <div key={i} className="project_slots">
                <img src={images[i % images.length]} width="200" height="200" alt='Project Image'></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App


// Website is responsive for there breakpoints (Desktop >= 1200px, Laptop < 1200px AND >= 800px, Mobile <= 400px)
// Icon and image placeholders have real icons and placeholders
// Projects section is easily refactored to change number of projects
// Menu can be toggled out on mobile

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { menu } from './menu'
import { MenuItem } from './components/MenuItem/MenuItem'
import { Tokens } from './components/Tokens/TokensList'
import { Search } from './components/Search/Search'
import { TokenInfo } from './components/TokenInfo/TokenInfo'
import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState(menu[0].id)

  return (
    <div className="app">
      <div className="menu">
        <img src={require('./img/Logo.png')} alt="Logo" className="menu-logo" />
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </div>

      <div className="main">
        <Routes>
          <Route
            path={'/tokens'}
            element={<Tokens setActiveLink={setActiveLink} />}
          />
          <Route path={'/search'} element={<Search />} />
          <Route path={'/tokenInfo'} element={<TokenInfo />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

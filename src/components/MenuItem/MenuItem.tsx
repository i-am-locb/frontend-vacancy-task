import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import style from './MenuItem.module.css'

type Props = {
  item: {
    id: string
    title: string
    icon: JSX.Element
  }
  activeLink: string
  setActiveLink: Dispatch<SetStateAction<string>>
}

export const MenuItem: React.FC<Props> = ({ item, activeLink, setActiveLink }) => {
  console.log(activeLink)
  return (
    <Link to={"/" + item.id} style={{textDecoration: 'none'}}> 
      <div
        className={
          activeLink === item.id
            ? style.menu__item + ' ' + style.menu_item_active
            : style.menu__item
        }
        onClick={() => setActiveLink(item.id)}
      >
        {item.icon}
        <p>{item.title}</p>
      </div>
    </Link>
  )
}

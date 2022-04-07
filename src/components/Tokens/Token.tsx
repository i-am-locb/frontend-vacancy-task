import React, { Dispatch, SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Token.module.css'

//TODO прописать типы
type TokenProps = {
  item: any
  index: number
  setActiveLink: Dispatch<SetStateAction<string>>
}

export const Token: React.FC<TokenProps> = ({ item, index, setActiveLink }) => {
  const [isDetailsOpen, toggleIsDetailsOpen] = useState(false)
  return (
    <Link onClick={() => setActiveLink("none")} to="/tokenInfo" style={{ textDecoration: 'none' }}>
      <div className={style.tokenWrapper}>
        <div className={style.token}>
          <span className={style.token__index}>#{index + 1}</span>
          <img src={item.logoURI} alt="Logo" className={style.token__logo} />
          <div className={style.token__names}>
            <p className={style.token__name}>{item.name}</p>
            <p className={style.token__symbol}>{item.symbol}</p>
          </div>

          <div className={style.token__descriptionForLowWidth}>
            Description: {item.description}
          </div>

          <div>
            <p className={style.token__price}>{item.price} $</p>
            <p>
              <span className={style.token__priceChange}>
                {item.priceChange.hours24}%
              </span>
              <span className={style.token__priceChange}>{item.priceChange.days7}%</span>
              <span className={style.token__priceChange}>
                {item.priceChange.days365}%
              </span>
            </p>
          </div>

          <div>
            <span className={style.token__volume}>{item.volume} $</span>
            <span className={style.token__volumeChange}>
              {item.volumeChangePercentage} %
            </span>
          </div>

          <div>
            <span className={style.token__tvl}>{item.tvl} $</span>
            <span className={style.token__tvlChange}>{item.tvlChangePercentage} %</span>
          </div>
          <div>
            <img
              src={require('../../img/users.png')}
              alt="icon"
              className={style.token__usersLogo}
            />
            <span className={style.token__users}>{item.users}</span>
          </div>
          {isDetailsOpen ? (
            <img
              src={require('../../img/ArrowUP.png')}
              alt="Arrow"
              className={style.token__descriptionButton}
              onClick={() => toggleIsDetailsOpen(!isDetailsOpen)}
            />
          ) : (
            <img
              src={require('../../img/ArrowDOWN.png')}
              alt="Arrow"
              className={style.token__descriptionButton}
              onClick={() => toggleIsDetailsOpen(!isDetailsOpen)}
            />
          )}
        </div>
        <div
          className={style.token__description}
          style={{ height: isDetailsOpen ? '3em' : '0' }}
        >
          <div
            className={style.token__descriptionText}
            style={{
              top: isDetailsOpen ? '0' : '-3em',
              opacity: isDetailsOpen ? '1' : '0',
            }}
          >
            {item.description}
          </div>
        </div>
      </div>
    </Link>
  )
}

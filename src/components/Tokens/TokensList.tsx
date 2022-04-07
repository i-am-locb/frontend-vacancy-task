import { Dispatch, SetStateAction, useState } from 'react'
import { categories, tokens } from '../../tokens'
import { FilterButton } from './FilterButton'
import { Token } from './Token'
import style from './TokensList.module.css'

type TokenProps = {
  setActiveLink: Dispatch<SetStateAction<string>>
}

export const Tokens: React.FC<TokenProps> = ({ setActiveLink }) => {
  const [category, setCategory] = useState(categories[0])
  return (
    <>
      <header className={style.main__header}>
        <h1 className={style.main__title}>Токены Everscale</h1>
        <nav className={style.main__filter}>
          {categories.map((item) => (
            <FilterButton
              key={item.id}
              item={item}
              category={category}
              setCategory={setCategory}
            />
          ))}
        </nav>
      </header>
      <div className={style.main__tokenList}>
        {category.id === 'all'
          ? tokens.map((item, index) => (
              <Token setActiveLink={setActiveLink} item={item} index={index} />
            ))
          : tokens
              .filter((item) => item.categories.includes(category.id))
              .map((item, index) => (
                <Token setActiveLink={setActiveLink} item={item} index={index} />
              ))}
      </div>
    </>
  )
}

import { Dispatch, SetStateAction } from 'react'
import style from './FilterButton.module.css'
type FilterButtonProps = {
  item: {
    id: string
    title: string
  }
  category: {
    id: string
    title: string
  }
  setCategory: Dispatch<SetStateAction<{ id: string; title: string }>>
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  item,
  category,
  setCategory,
}) => {
  return (
    <button
      className={
        category.id === item.id
          ? style.main__filterButton + ' ' + style.main__filterButton_active
          : style.main__filterButton
      }
      onClick={() => setCategory(item)}
    >
      {item.title}
    </button>
  )
}

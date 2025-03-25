import { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import style from './ToTop.module.css'

const ToTop = () => {
    const [toTop, setToTop] = useState(false)

    const toTopNow = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })        
    }

    useEffect(() => {
        const isToTop = () => {
            if (window.scrollY  > 160) {
                setToTop(true)
            }
            else {
                setToTop(false)
            }
        }

        isToTop()
        
        window.addEventListener('scroll', isToTop)

        return () => window.removeEventListener('scroll', isToTop)
    }, [])

  return toTop && (
    <button className={style.toTop} onClick={toTopNow}>        
        <IoIosArrowUp className={style.iconToTop} />
    </button>
  )
}

export default ToTop
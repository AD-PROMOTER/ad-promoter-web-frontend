import Link from "next/link"
import { StyledBtn } from "./styles"
import { useRouter } from "next/router"
import { useContext } from "react";
import PreferenceContext from '@/context/preferenceContext'
const Index = ({text,path}) => {
  const router = useRouter();
  const {isInputWithValue,isPrefWithValue,isVisualVerificationWithValue,isLoginInputWithValue} = useContext(PreferenceContext)
  return (
    <StyledBtn>
      {router.pathname.startsWith('/signup') || router.pathname === '/login' ? (
        <button className={isInputWithValue || isPrefWithValue || isVisualVerificationWithValue || isLoginInputWithValue ? 'btn-lg' : 'btn-lg-inactive'} type="submit">
          {text}
        </button>
      ):(
        <div className="btn-sm">
          <Link href={path} passHref>
            <a>
              <p>{text}</p>
            </a>
          </Link>
        </div>
      )}
 
    </StyledBtn>
  )
}

export default Index
import Link from "next/link"
import { StyledBtn } from "./styles"
import { useRouter } from "next/router"
import { useContext } from "react";
import PreferenceContext from '@/context/preferenceContext'
import { useSignup } from '@/hooks/useSignup'

const Index = ({text,path}) => {
  const router = useRouter();
  const {isLoading} = useSignup()
  const {isInputWithValue,isPrefWithValue,isVisualVerificationWithValue,isLoginInputWithValue} = useContext(PreferenceContext)
  return (
    <StyledBtn>
      {router.pathname.startsWith('/signup') || router.pathname === '/login' ? (
        <button disabled={isLoading} className={isInputWithValue || isPrefWithValue || isVisualVerificationWithValue ?'btn-lg' : 'btn-lg-inactive'} type="submit">
          {text}
        </button>
      ):(
        <button className="btn-sm">
          <Link href={path} passHref>
            <a>
              <p>{text}</p>
            </a>
          </Link>
        </button>
      )}
 
    </StyledBtn>
  )
}

export default Index
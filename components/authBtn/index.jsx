import Link from "next/link"
import { StyledBtn } from "./styles"
import { useRouter } from "next/router"
const Index = ({text,path}) => {
  const router = useRouter();
  return (
    <StyledBtn>
      {router.pathname.startsWith('/signup') || router.pathname === '/login' ? (
        <button className="btn-lg" type="submit">
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
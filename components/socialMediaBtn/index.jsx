import Image from "next/image"
import { StyledBtn } from "./style"

const Index = ({icon,text}) => {
  return (
    <StyledBtn>
        <Image src={icon} alt={`${text} logo`}/>
        <p>Continue with {text}</p>
    </StyledBtn>
  )
}

export default Index
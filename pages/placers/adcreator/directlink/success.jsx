import { StyledDirectLinkSuccess } from "@/styles/placersCreator.styles"
import Image from "next/image"
import sucess from '@/public/assets/success-mark.gif'
const success = () => {
  return (
    <StyledDirectLinkSuccess>
        <div className="modal">
            <div className="head">
                <h4>Success!</h4>
                <p>Congrats, Your advert has finally been published</p>
            </div>
            <div className="success">
                <div className="check">
                    <Image src={sucess} alt='success-mark'/>
                </div>
                <p>Click home to access your dashboard.</p>
            </div>
        </div>

        <div className="btn">
            Home
        </div>
    </StyledDirectLinkSuccess>
  )
}

export default success
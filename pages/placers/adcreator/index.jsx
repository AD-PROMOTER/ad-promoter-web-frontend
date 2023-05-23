import ArrowDown from "@/public/assets/arrow-down"
import { MobileCreator, ModalBackground, StyledCreator } from "@/styles/placersCreator.styles"
import userTag from '@/public/assets/user-tag.svg'
import Image from "next/image"
import send from '@/public/assets/send-2.svg'
import cup from '@/public/assets/cup.svg'
import refresh from '@/public/assets/refresh-2.svg'
import money from '@/public/assets/money-send.svg'
import statusIcon from '@/public/assets/status.svg'
import { useContext, useEffect, useRef, useState } from "react"
import link from '@/public/assets/link-2.svg'
import document from '@/public/assets/document-text.svg'
import video from '@/public/assets/video.svg'
import ArrowRight from "@/public/assets/arrow-right"
import CloseCircle from "@/public/assets/close-circle"
import { useRouter } from "next/router"
import AdPlacerContext from "@/context/adPlacerContext"
import axios from "axios"
import { Spinner } from "@chakra-ui/react"

const Adcreator = () => {
  const [toPlace,setToPlace] = useState(false)
  const router = useRouter()
  const token = useRef('')
  const id = useRef('')
  const {setAdvertType} = useContext(AdPlacerContext)
  const [activeAds, setActiveAds] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user-detail"));
    const userToken = JSON.parse(localStorage.getItem("user-token"));
    if (user) {
    token.current = userToken
    id.current = user._id
    }

    const fetchActiveAds = async() =>{
      setIsLoading(true)
      const result = await axios(`https://api.ad-promoter.com/api/v1/ads/all/user-ads/${id.current}?active=true`,{
        headers:{
          Authorization: `Bearer ${token.current}`
        }
      })
      setActiveAds(result.data.data);
      setIsLoading(false)
    }
    if(id.current){
      fetchActiveAds()
    }
  },[id, token])

  const handlePlace = () =>{
    setToPlace(!toPlace)
  }


  return (
    <>
      <StyledCreator>
      <div className="creator-head">
        <h3>Active Ads - ({activeAds.length})</h3>
        <div className="filter-dropdown">
          <p>Filter</p>
          <div>
            <ArrowDown />
          </div>
        </div>
      </div>
          {activeAds.length > 0 ? (
            <div className="creator-body">
              {activeAds.map(({productName,type,target,achieved,price,adStatus,bg,_id})=>(
                <div className="item" key={_id}>
                  <div className="item-details">
                    <div className="product-name">
                      <div>
                        <Image src={userTag} alt='user tag'/>
                        <p>Product Name</p>
                      </div>
                      <p>{productName}</p>
                    </div>
    
                    <div className="ad-type">
                      <div>
                        <Image src={send} alt='send'/>
                        <p>Advert Type</p>
                      </div>
                      <p>{type + ' ad'}</p>
                    </div>
    
                    <div className="aim">
                      <div>
                        <Image src={cup} alt='cup'/>
                        <p>Aim</p>
                      </div>
                      <p>{target + ' Visitors'}</p>
                    </div>
    
                    <div className="achieved">
                      <div>
                        <Image src={refresh} alt='achieved icon'/>
                        <p>Achieved</p>
                      </div>
                      <p>{achieved}</p>
                    </div>
    
                    <div className="price">
                      <div>
                        <Image src={money} alt='money'/>
                        <p>Price</p>
                      </div>
                      {type === 'detail' || type === 'direct-link' ? (
                        <p>₦25/Visitor</p>
                      ):(
                        <p>₦50/Video</p>
                      )}
                    </div>
    
                    <div className="status">
                      <div>
                        <Image src={statusIcon} alt='status'/>
                        <p>Status</p>
                      </div>
                      <p className='status-text' style={adStatus === 'incomplete' ? {backgroundColor:'#ED9005'} : adStatus === 'complete' ? {backgroundColor:'#00B068'}: adStatus === 'paused' ? {backgroundColor: '#EB1E1E'}:{backgroundColor: '#5C85FF'}}>{adStatus}</p>
                    </div>
    
                  </div>
                  <div className="cta">View</div>
                </div>
              ))}
            </div>
          ):(
              <p>No Active Ads</p>
            )
          }
      <div className="creator-btn" onClick={handlePlace}>Place new Advert</div>
        
      

      {toPlace && (
        <ModalBackground>
          <div className="modal">
            <div onClick={()=>setToPlace(!toPlace)} className='close-btn'>
              <CloseCircle />
            </div>
            <div className="modal-head">
              <h3>What type of Advert would you like to place?</h3>
              <p>Select one to continue.</p>
            </div>
            <div className="modal-body">
              <div className="ad-type" onClick={()=>{router.push('/placers/adcreator/directlink'),setAdvertType('direct-link')}}>
                <Image src={link} alt='link'/>
                <div className="vertical"></div>
                <div className="ad-type-name">
                  <div className="ad-type-name-text">
                    <h5>Directlink Ad</h5>
                    <p>Get Web Visitors</p>
                  </div>
                  <ArrowRight />
                </div>
              </div>

              <div className="ad-type" onClick={()=>{router.push('/placers/adcreator/detailsad'),setAdvertType('detail')}}>
                <Image src={document} alt='link'/>
                <div className="vertical"></div>
                <div className="ad-type-name">
                  <div className="ad-type-name-text">
                    <h5>Details Ad</h5>
                    <p>Get Buyers to patronize your business</p>
                  </div>
                  <ArrowRight />
                </div>
              </div>

              <div className="ad-type" onClick={()=>{router.push('/placers/adcreator/visualad'),setAdvertType('visual')}}>
                <Image src={video} alt='link'/>
                <div className="vertical"></div>
                <div className="ad-type-name">
                  <div className="ad-type-name-text">
                    <h5>Visual Ad</h5>
                    <p>Get Instagram And Tiktok Publicity</p>
                  </div>
                  <ArrowRight />
                </div>
              </div>
              
            </div>
          </div>
        </ModalBackground>
      )}
    </StyledCreator>
    {/* <MobileCreator>
      <h4>Active Ads - ({activeAds.length})</h4>
      <div className="body">
        {data.map((item, index) => (
          <div key={index} className="creator">
            <div className="product">
              <h3>{item.productName}</h3>
              <p style={{backgroundColor: item.bg}}>{item.status}</p>
            </div>
            <div className="types">
              <div className="type">
                <div className="icon">
                  <Image src={money} alt="money"/>
                  <p>Price</p>
                </div>
                <h4>{item.price}</h4>
              </div>
              <div className="type">
                <div className="icon">
                  <Image src={cup} alt="money"/>
                  <p>Aim</p>
                </div>
                <h4>{item.aim}</h4>
              </div>
              <div className="type">
                <div className="icon">
                  <Image src={refresh} alt="money"/>
                  <p>Conversion</p>
                </div>
                <h4>{item.achieved}</h4>
              </div>
              <div className="type">
                <div className="icon">
                  <Image src={send} alt="money"/>
                  <p>Advert Type</p>
                </div>
                <h4>{item.adType}</h4>
              </div>
            </div>
            <div className="view">
              View
            </div>
          </div>
        ))}
      </div>
      <div className="creator-btn" onClick={handlePlace}>Place new Advert</div>
      {toPlace && (
        <ModalBackground>
          <div className="modal">
            <div onClick={()=>setToPlace(!toPlace)} className='close-btn'>
              <CloseCircle />
            </div>
            <div className="modal-head">
              <h3>What type of Advert would you like to place?</h3>
              <p>Select one to continue.</p>
            </div>
            <div className="modal-body">
              <div className="ad-type" onClick={()=>{router.push('/placers/adcreator/directlink'),setAdvertType('direct-link')}}>
                <Image src={link} alt='link'/>
                <div className="vertical"></div>
                <div className="ad-type-name">
                  <div className="ad-type-name-text">
                    <h5>Directlink Ad</h5>
                    <p>Get Web Visitors</p>
                  </div>
                  <ArrowRight />
                </div>
              </div>

              <div className="ad-type" onClick={()=>{router.push('/placers/adcreator/detailsad'),setAdvertType('detail')}}>
                <Image src={document} alt='link'/>
                <div className="vertical"></div>
                <div className="ad-type-name">
                  <div className="ad-type-name-text">
                    <h5>Details Ad</h5>
                    <p>Get Buyers to patronize your business</p>
                  </div>
                  <ArrowRight />
                </div>
              </div>

              <div className="ad-type" onClick={()=>{router.push('/placers/adcreator/visualad'),setAdvertType('visual')}}>
                <Image src={video} alt='link'/>
                <div className="vertical"></div>
                <div className="ad-type-name">
                  <div className="ad-type-name-text">
                    <h5>Visual Ad</h5>
                    <p>Get Instagram And Tiktok Publicity</p>
                  </div>
                  <ArrowRight />
                </div>
              </div>
              
            </div>
          </div>
        </ModalBackground>
      )}
    </MobileCreator> */}
    </>
  )
}

export default Adcreator
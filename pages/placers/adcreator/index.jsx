import ArrowDown from "@/public/assets/arrow-down"
import { ModalBackground, StyledCreator } from "@/styles/placersCreator.styles"
import userTag from '@/public/assets/user-tag.svg'
import Image from "next/image"
import send from '@/public/assets/send-2.svg'
import cup from '@/public/assets/cup.svg'
import refresh from '@/public/assets/refresh-2.svg'
import money from '@/public/assets/money-send.svg'
import statusIcon from '@/public/assets/status.svg'
import { useContext, useEffect, useState } from "react"
import link from '@/public/assets/link-2.svg'
import document from '@/public/assets/document-text.svg'
import video from '@/public/assets/video.svg'
import ArrowRight from "@/public/assets/arrow-right"
import CloseCircle from "@/public/assets/close-circle"
import { useRouter } from "next/router"
import AdPlacerContext from "@/context/adPlacerContext"
const Adcreator = () => {
  const [toPlace,setToPlace] = useState(false)
  const router = useRouter()
  const [token,setToken] = useState('')
  const [id,setId] = useState('')
  const {advertType,setAdvertType} = useContext(AdPlacerContext)
  const [activeAds, setActiveAds] = useState([])
  const handlePlace = () =>{
    setToPlace(!toPlace)
    // if (typeof window != "undefined" && window.document) {
    //   document.body.style.overflow = "hidden";
    // }
  }

  useEffect(()=>{
    const userRole = JSON.parse(localStorage.getItem("token"));
    if (userRole) {
    setToken(userRole.token);
    setId(userRole.user._id)
    }
    if(id){
      Promise.all([
        fetch(`http://35.153.52.116/api/v1/ads/all/user-ads/${id}?active=true`,{
          headers:{
            Authorization: `Bearer ${token}`,
          }
        }),
      ])
        .then(([resActiveAds]) => 
          Promise.all([resActiveAds.json()])
        )
        .then(([dataActiveAds]) => {
          // setProducts(dataProducts.data.data);
          setActiveAds(dataActiveAds.data);
        });
    }
  })
  
  const data = [
    {
      productName: 'Maxim cakes and pastery',
      adType: 'Visual Ad',
      aim: '1000 videos',
      achieved: '10 videos',
      price: '₦25/Video',
      status: 'IN PROGRESS',
      bg: '#5C85FF'
    },
    {
      productName: 'Maxim cakes and pastery',
      adType: 'Directlink Ad',
      aim: '1000 Visitors',
      achieved: '10 Visitors',
      price: '₦25/Visitor',
      status: 'INCOMPLETE',
      bg: '#ED9005'
    },
    {
      productName: 'Maxim cakes and pastery',
      adType: 'Details Ad',
      aim: '1000 Visitors',
      achieved: '10 Visitors',
      price: '₦25/Visitors',
      status: 'COMPLETE',
      bg: '#00B068'
    },
    {
      productName: 'Maxim cakes and pastery',
      adType: 'Visual Ad',
      aim: '1000 videos',
      achieved: '10 videos',
      price: '₦25/Video',
      status: 'IN PROGRESS',
      bg: '#5C85FF'
    },
    {
      productName: 'Maxim cakes and pastery',
      adType: 'Visual Ad',
      aim: '1000 videos',
      achieved: '10 videos',
      price: '₦25/Video',
      status: 'PAUSED',
      bg: '#EB1E1E'
    },
  ]
  return (
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

      {activeAds > 0 ? (
                <div className="creator-body">
                {data.map(({productName,adType,aim,achieved,price,status,bg,index})=>(
                  <div className="item" key={index}>
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
                        <p>{adType}</p>
                      </div>
      
                      <div className="aim">
                        <div>
                          <Image src={cup} alt='cup'/>
                          <p>Aim</p>
                        </div>
                        <p>{aim}</p>
                      </div>
      
                      <div className="achieved">
                        <div>
                          <Image src={refresh} alt='achieved icon'/>
                          <p>Archieved</p>
                        </div>
                        <p>{achieved}</p>
                      </div>
      
                      <div className="price">
                        <div>
                          <Image src={money} alt='money'/>
                          <p>Price</p>
                        </div>
                        <p>{price}</p>
                      </div>
      
                      <div className="status">
                        <div>
                          <Image src={statusIcon} alt='status'/>
                          <p>Status</p>
                        </div>
                        <p className='status-text' style={{background: bg,color: 'white'}}>{status}</p>
                      </div>
      
                    </div>
                    <div className="cta">View</div>
                  </div>
                ))}
              </div>
      ) :(
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
  )
}

export default Adcreator
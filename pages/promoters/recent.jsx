import { StyledHome } from "@/styles/promoters/home"
import adLink from '@/public/assets/adLink.png'
import poster from '@/public/assets/poster.svg'
import firstlink from '@/public/assets/firstlink.png'
import secondlink from '@/public/assets/secondlink.png'
import thirdlink from '@/public/assets/thirdlink.png'
import aimIcon from '@/public/assets/aimIcon.png'
import achievedIcon from '@/public/assets/achievedIcon.png'
import priceIcon from '@/public/assets/priceIcon.png'
import Image from 'next/image'

const Recent = () => {

    const adTabs = [
        {
        id: 1,
        adtype: 'Directlink Ad',
        name: 'Maxim cakes and pastery',
        poster: 'Sharon Banjo',
        aim: 'Aim',
        aimRate: '1000 Visitors',
        achieved: 'Achieved',
        achievedRate: '10 Visitors',
        price: 'Price',
        priceRate: '₦25/Visitor',
        description: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes. You also get a 50% discount on all cakespurchased in the next 48hrs.',
        notifIcon: adLink,
        posterImg: poster,
        copyAd: firstlink,
        exportAd: secondlink,
        addAd: thirdlink,
        aimIcon: aimIcon,
        achievedIcon: achievedIcon,
        priceIcon: priceIcon,
        bg: '#fff',
        time: 'Posted 1 hour ago',
        linkbg: '#0594FB'
        },
        {
        id: 2,
        adtype: 'Visual Ad',
        name: 'Maxim cakes and pastery',
        poster: 'Sharon Banjo',
        aim: 'Aim',
        aimRate: '1000 Visitors',
        achieved: 'Achieved',
        achievedRate: '10 Visitors',
        price: 'Price',
        priceRate: '₦25/Visitor',
        description: 'At our store, you can get the best chocolate cakes at a super affordable price and with a customization on all our cakes.  You also get a 50% discount on all cakespurchased in the next 48hrs.',
        more: 'Read more',
        time: 'Posted 1 hour ago',
        notifIcon: adLink,
        posterImg: poster,
        copyAd: firstlink,
        exportAd: secondlink,
        addAd: thirdlink,
        aimIcon: aimIcon,
        achievedIcon: achievedIcon,
        priceIcon: priceIcon,
        bg: '#fff',
        linkbg: '#12a93c'
        }
        ]
        
    return ( 
        <>

                
            {adTabs.map(({adtype,name,poster,aim,aimRate,achieved,achievedRate,price,priceRate,description,more,time,notifIcon,posterImg,copyAd,exportAd,addAd,aimIcon,achievedIcon,priceIcon,bg,linkbg})=>(
                <div className="notifBox" key={adTabs.id} style={{backgroundColor: bg}}>
                    <div className="link-box">
                        <button style={{background: linkbg}}>{adtype}</button>
                        <p><Image src={notifIcon} alt='
                        notification icon' className="notifIcon" style={{height: 20, width: 20}} /></p>
                    </div>

                    <div className="adPost">
                        <p>{name}</p>
                        <div className="tags">
                            <p>Tags:</p>
                            <button id="conf">Confectionery</button>
                            <button id="food">Food</button>
                        </div>
                    </div>

                    <div className="product">
                        <div className="descr">
                            <p style={{width: 339}}>{description}</p>
                        </div>
                    </div>

                    <div className="ad-stats">
                        <div className="price">
                            <div className="price-header">
                                <Image src={priceIcon} alt='price icon' />
                                <p>{price}</p>
                            </div>
                            <div className="price-rate"> 
                                {priceRate}
                            </div>
                        </div>

                        <div className="aim">
                            <div className="aim-header">
                                <Image src={aimIcon} alt='aim icon' />
                                <p>{aim}</p>
                            </div>
                            <div className="aim-rate">
                                {aimRate}
                            </div>
                        </div>

                        <div className="achieved">
                            <div className="achieved-header">
                                <p style={{position: 'relative', top: -2}}><Image src={achievedIcon} alt='achieved icon' /></p>
                                <p style={{position: 'relative', top: -3}}>{achieved}</p>
                            </div>
                            <div className="achieved-rate" style={{position: 'relative', top: -10}}>{achievedRate}</div>
                        </div>

                    </div>


                    <div className="posterDetails">
                        <div className="poster">

                            <div className="imgName">
                                <Image src={posterImg} alt='poster image'/>    
                                <p>{poster}</p>
                            </div>
                            
                            <div className="time">
                                <p style={{fontSize: 10, color: '#666666'}}>{time}</p>
                            </div>
                        </div>

                        <div className="var-links">
                            <Image src={copyAd} alt='remove ad' />
                            <Image src={exportAd} alt='export ad' />
                            <Image src={addAd} alt='new ad' />
                        </div>
                    </div>
                </div>
            ))} 
        </>
     );
}
 
export default Recent;
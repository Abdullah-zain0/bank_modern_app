import styles from '../style'
import { arrowUp } from '../assets'

 const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}>

    <div className={`${styles.flexCenter} bg-primary flex-col w-full h-full rounded-full`}>
      <div className={`${styles.flexStart}
      flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23pxpx] mr-2">
          <span className="text-gradient">Get</span>
         
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h=[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23pxpx]">
          <span className="text-gradient">Started</span>
       
        </p>
    </div>
  </div>

)
export default GetStarted


import styles from "../css/home.module.css"
import hero from "../assets/home/hero.png"
import support from "../assets/home/support.png"
import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";

export function EngineeringSection(){
    return(
        <>
         <div className={styles.insightUpperBox}>
                            <div className={styles.insightDetail}>
                                <div className={styles.insightVideoInfoBox}>
                                    <div className={styles.insightVideoBox}>
                                        <img src={hero} className={styles.insightVideo}/>
                                    </div>
                                    <div className={styles.insightVideoInfo}>
                                        <h3>Innovating today.Building for tomorrow.</h3>
                                        <p>At ACE Construction Equipment Ltd., innovation is the foundation of everything we create. By integrating advanced engineering, intelligent manufacturing, automation, and rigorous quality standards, we develop solutions that deliver exceptional performance, reliability, and efficiency. From concept to completion, every machine is designed to meet the evolving demands of infrastructure, agriculture, logistics, and industrial applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.insightData}>
                                <div className={styles.insightDataBox}>
                                    <p>ACE Edge</p>
                                    <h3>Dedicated Training Center</h3>
                                    <p>Dedicated Training Center at Faridabad to provide operation and maintenance training to customer personnel. Regular periodic training courses have been formulated to enhance operator and engineer skill levels</p>
                                    <Link>Read More <GoArrowRight/></Link>
                                </div>
                                  <div className={styles.insightDataBox}>
                                    <p>ACE Awards</p>
                                    <h3>Equipment Times Yellow Dot Awards</h3>
                                    <p>ACE CMD Mr. Vijay Agarwal, honoured with the Lifetime Achievement Award at Equipment Times Yellow Dot Awards during EXCON, Dec 2025.</p>
                                    <Link>Read More <GoArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                    <div className={styles.productSupport}>
                        <img className={styles.supportImage} src={support}/>
                        <div className={styles.supportText}>
                            <p>ACE has pan-India robust after sales service network of dealers and area offices which operate out of 100+ locations and supported by 21 regional offices</p>
                            <Link to="/" className={styles.supportBtn}>Product Support</Link>
                        </div>
                    </div>
        </>
    )
}
export function PressSection(){
    return(
        <p>press section</p>
    )
}
export function EventsSection(){
    return(
        <p>events section</p>
    )
}
export function VideosSection(){
    return(
        <p>video section</p>
    )
}
export function GallerySection(){
    return(
        <p>gallery section</p>
    )
}
export function SustainibilitySection(){
    return(
        <p>sustainibility section</p>
    )
}
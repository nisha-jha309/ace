import styles from "../css/home.module.css"
import hero from "../assets/home/hero.png"
import makeIndia from "../assets/home/makeIndia.svg"
import { Link, NavLink } from 'react-router'
import { productData, bharatData, trustImage, projectData } from "../data/homedata"
import { GoArrowRight } from "react-icons/go";
import { FaCirclePlay } from "react-icons/fa6";
import { LuMoveRight } from "react-icons/lu";
import { LuMoveLeft } from "react-icons/lu";
import { useState } from "react"
import support from "../assets/home/support.png"
import { EngineeringSection,PressSection,EventsSection,VideosSection,GallerySection,SustainibilitySection} from "../components/insightSections"



export default function Home() {
    const [currentProduct, setCurrentProduct] = useState(0);
    const [currentMobileProduct, setCurrentMobileProduct] = useState(0);
    const [activeSection, setActiveSection] = useState("engineering");


    const next = () => {
        if (currentProduct < productData.length - 5) {
            setCurrentProduct(prev => prev + 1);
        }
        if (currentMobileProduct < productData.length - 1) {
            setCurrentMobileProduct(prev => prev + 1);
        }
    };

    const prev = () => {
        if (currentProduct > 0) {
            setCurrentProduct(prev => prev - 1);
        }
        if (currentMobileProduct > 0) {
            setCurrentMobileProduct(prev => prev - 1);
        }

    }
    const isNextDisabled =
        window.innerWidth <= 768
            ? currentMobileProduct === productData.length - 1
            : currentProduct === productData.length - 5;

    return (
        <>
            <div className={styles.hero}>
                <img src={hero} alt="" className={styles.heroImage} />
                <div className={styles.heroContent}>
                    <img src={makeIndia} alt="" className={styles.makeIndia} />
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroText}>
                        <h1>Lifting <br /> What Moves <br />India</h1>
                        <hr className={styles.underline} />
                        <p>For over three decades, ACE has powered India’s most ambitious infrastructure, industrial and construction projects.</p>
                        <div className={styles.heroButtons}>
                            <Link to="/" className={styles.learnBtn}>Learn more<GoArrowRight /></Link>
                            <Link to="/" className={styles.watchBtn}>Watch Video<FaCirclePlay /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.trust}>
                <div className={styles.trustContent}>
                    <div className={styles.trustBox}>
                        <img src={trustImage[0]} alt="" className={styles.trustImage} />
                        <div className={styles.trustData}>
                            <h2>30+</h2>
                            <p>Years of Excellence</p>
                        </div>
                    </div>
                    <div className={styles.trustBox}>
                        <img src={trustImage[1]} alt="" className={styles.trustImage} />
                        <div className={styles.trustData}>
                            <h2>100,000+</h2>
                            <p>Machines Working Across India</p>
                        </div>
                    </div>
                    <div className={styles.trustBox}>
                        <img src={trustImage[2]} alt="" className={styles.trustImage} />
                        <div className={styles.trustData}>
                            <h2>100+</h2>
                            <p>Sales & Service Locations</p>
                        </div>
                    </div>
                    <div className={styles.trustBox}>
                        <img src={trustImage[3]} alt="" className={styles.trustImage} />
                        <div className={styles.trustData}>
                            <h2>Thousands</h2>
                            <p>of Projects Supported</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.viksitBharat}>
                <div className={styles.vikisitContent}>
                    <div className={styles.viksitText}>
                        <p>Building The Nation. Together.</p>
                        <h2>Building the <br />Infrastructure <br /> of Viksit Bharat 2047</h2>
                        <p>India is on the path to become a developed nation by 2047. ACE is proud to be a part of this Journey-engineering and delivering lifting solutions that power progress and create a stronger tomorrow.</p>
                        <Link className={styles.exploreBtn}>Explore Our Vision 2047 <GoArrowRight size={window.innerWidth <= 375 ? 11 : 20} /></Link>
                    </div>
                    <div className={styles.viksitImages}>
                        {bharatData.map((item, index) => (
                            <div className={styles.vikisitImageBox}>
                                <img src={item.src} alt="" className={styles.viksitImage} />
                                <div className={styles.viksitImageOverlay}></div>
                                <div className={styles.vikisitImagetext}>
                                    <h3 className={styles.vikisitImageHead}>{item.visionName}</h3>
                                    <p className={styles.vikisitImageSubhead}>{item.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.productsContent}>
                    <h2>Products for Every Lift</h2>
                    <div className={styles.lines}>
                        <hr className={styles.underline} />
                        <div className={styles.navigation}>
                            <div className={currentMobileProduct === 0 ? styles.inactive : styles.prev} onClick={prev}><LuMoveLeft /></div>
                            <div className={isNextDisabled ? styles.inactive : styles.next} onClick={next}><LuMoveRight /></div>
                        </div>
                    </div>
                    <div className={styles.productImages}>
                        {
                            productData.slice(currentProduct, currentProduct + 5).map((item, index) => (
                                <div className={styles.productBox} key={index}>
                                    <img src={item.src} alt="" className={styles.productImage} />
                                    <div className={styles.productOverlay}></div>
                                    <div className={styles.productText}>
                                        <h3>{item.productName}</h3>
                                        <p>{item.detail}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.productImagesMobile}>

                        <div className={styles.productBox}>
                            <img src={productData[currentMobileProduct].src} alt="" className={styles.productImage} />
                            <div className={styles.productOverlay}></div>
                            <div className={styles.productText}>
                                <h3>{productData[currentMobileProduct].productName}</h3>
                                <p>{productData[currentMobileProduct].detail}</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className={styles.projects}>
                <div className={styles.projectContent}>
                    <div className={styles.projectsText}>
                        <p>Projects That Shape Tomorrow</p>
                        <h2>Proud To Be Part Of India’s Growth Journey.</h2>
                        <Link className={styles.viewProjectBtn} to="/">view all projects <GoArrowRight size={window.innerWidth <= 375 ? 11 : 20} /></Link>
                    </div>
                    <div className={styles.projectImages}>
                        <div className={styles.projectImage1}>
                            <img src={projectData[0].src} alt="" className={styles.project1Image} />
                            <img src="" alt="" className={styles.projectImageOverlay} />
                            <h3>{projectData[0].projectName}</h3>
                        </div>
                        <div className={styles.projectImageGrid}>
                            {projectData.slice(1).map((item, index) => (
                                <div className={styles.projectImageBox}>
                                    <img src={item.src} className={styles.projectImage} />
                                    <img src="" alt="" className={styles.projectImageOverlay} />
                                    <h3>{item.projectName}</h3>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.insights}>
                <div className={styles.insightContent}>
                    <div className={styles.insightsText}>
                        <h2>Insights & Beyond</h2>
                        <p>Discover the world of ACE through engineering innovation, latest news, industry events, visual stories, corporate videos, and our commitment to sustainable growth—showcasing the ideas, achievements, and values that drive our journey forward.</p>
                    </div>
                    <div className={styles.insightArea}>
                        <div className={styles.insightNav}>
                            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeInsight : ""} onClick={() => setActiveSection("engineering")}>Engineering Excellence</NavLink>
                            <NavLink to="/a" className={({ isActive }) => isActive ? styles.activeInsight : ""} onClick={() => setActiveSection("press")}>Press Release</NavLink>
                            <NavLink to="/c" className={({ isActive }) => isActive ? styles.activeInsight : ""} onClick={() => setActiveSection("events")}>Events</NavLink>
                            <NavLink to="/b" className={({ isActive }) => isActive ? styles.activeInsight : ""} onClick={() => setActiveSection("gallery")}>Photo Gallery</NavLink>
                            <NavLink to="/d" className={({ isActive }) => isActive ? styles.activeInsight : ""} onClick={() => setActiveSection("videos")}>Videos</NavLink>
                            <NavLink to="/e" className={({ isActive }) => isActive ? styles.activeInsight : ""} onClick={() => setActiveSection("sustainibility")}>Sustainibility</NavLink>
                        </div>
                        <div className={styles.insightBox}>
                            {activeSection === "engineering" && <EngineeringSection />}
                            {activeSection === "press" && <PressSection />}
                            {activeSection === "events" && <EventsSection />}
                            {activeSection === "videos" && <VideosSection />}
                            {activeSection === "gallery" && <GallerySection />}
                            {activeSection === "sustainibility" && <SustainibilitySection />}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
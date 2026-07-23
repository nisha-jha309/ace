import styles from "../css/footer.module.css"
import { Link } from "react-router"
import aceLogo from "../assets/home/ace-logo2.svg"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.mainFooter}>
                        <div className={styles.companyDescription}>
                            <img src={aceLogo} alt="" className={styles.brandLogo} />
                            <p>India’s leading material handling and construction equipment company, lifting possibilities and building the nation since 1995.</p>
                            <div className={styles.socialLinks}>
                                <div className={styles.socialLink}><FaFacebookF /></div>
                                <div className={styles.socialLink}><FaInstagram /></div>
                                <div className={styles.socialLink}><FaLinkedinIn /></div>
                                <div className={styles.socialLink}><FaXTwitter /></div>
                                <div className={styles.socialLink}><FaYoutube /></div>
                            </div>
                        </div>
                        <div className={styles.footerLinkArea}>
                            <div className={`${styles.footerLinkSection} ${styles.products}`}>
                                <p>Products</p>
                                <div className={styles.footerLinkParts}>
                                    <div className={styles.footerLinks}>
                                        <Link className={styles.footerLink} to="/">Mobile Cranes</Link>
                                        <Link className={styles.footerLink} to="/">Truck Mounted Cranes</Link>
                                        <Link className={styles.footerLink} to="/">Crawler Cranes</Link>
                                        <Link className={styles.footerLink} to="/">Rough Terrain Hydraulic Mobile Cranes</Link>
                                        <Link className={styles.footerLink} to="/">Forklift Trucks</Link>
                                        <Link className={styles.footerLink} to="/">Telehandlers</Link>
                                        <Link className={styles.footerLink} to="/">Aerial Work Platform</Link>
                                        <Link className={styles.footerLink} to="/">Scissor Lift</Link>
                                        <Link className={styles.footerLink} to="/">Mobile Tower Cranes</Link>
                                    </div>
                                    <div className={styles.footerLinks}>
                                        <Link className={styles.footerLink} to="/">Tower Cranes</Link>
                                        <Link className={styles.footerLink} to="/">Concrete Placing Boom</Link>
                                        <Link className={styles.footerLink} to="/">Piling Rigs</Link>
                                        <Link className={styles.footerLink} to="/">Backhoe Loaders</Link>
                                        <Link className={styles.footerLink} to="/">Road Equipment</Link>
                                        <Link className={styles.footerLink} to="/">Vibratory Rollers</Link>
                                        <Link className={styles.footerLink} to="/">Warehousing Equipment</Link>
                                        <Link className={styles.footerLink} to="/">Tractors</Link>
                                        <Link className={styles.footerLink} to="/">Agri Equipment</Link>
                                    </div>
                                </div>


                            </div>
                            <div className={`${styles.footerLinkSection} ${styles.industries}`}>
                                <p>Industries</p>
                                <div className={styles.footerLinks}>
                                    <Link className={styles.footerLink} to="/">Infrastructure</Link>
                                    <Link className={styles.footerLink} to="/">Metro & Rail</Link>
                                    <Link className={styles.footerLink} to="/">Renewable Energy</Link>
                                    <Link className={styles.footerLink} to="/">Ports & Logistics</Link>
                                    <Link className={styles.footerLink} to="/">Manufacturing</Link>
                                    <Link className={styles.footerLink} to="/">Mining & Heavy Industry</Link>
                                </div>
                            </div>
                            <div className={`${styles.footerLinkSection} ${styles.company}`}>
                                <p>Company</p>
                                <div className={styles.footerLinks}>
                                    <Link className={styles.footerLink} to="/">About ACE</Link>
                                    <Link className={styles.footerLink} to="/">Our Heritage</Link>
                                    <Link className={styles.footerLink} to="/">Leadership</Link>
                                    <Link className={styles.footerLink} to="/">Manufacturing</Link>
                                    <Link className={styles.footerLink} to="/">Careers</Link>
                                    <Link className={styles.footerLink} to="/">News & Media</Link>
                                </div>
                            </div>
                            <div className={`${styles.footerLinkSection} ${styles.investors}`}>
                                <p>Investors</p>
                                <div className={styles.footerLinks}>
                                    <Link className={styles.footerLink} to="/">Overview</Link>
                                    <Link className={styles.footerLink} to="/">Financials</Link>
                                    <Link className={styles.footerLink} to="/">Reports</Link>
                                    <Link className={styles.footerLink} to="/">Governance</Link>
                                    <Link className={styles.footerLink} to="/">Shareholder Info</Link>
                                </div>
                            </div>
                            <div className={`${styles.footerLinkSection} ${styles.support}`}>
                                <p>Support</p>
                                <div className={styles.footerLinks}>
                                    <Link className={styles.footerLink} to="/">Service Support</Link>
                                    <Link className={styles.footerLink} to="/">Spare Parts</Link>
                                    <Link className={styles.footerLink} to="/">Operator Training</Link>
                                    <Link className={styles.footerLink} to="/">Downloads</Link>
                                    <Link className={styles.footerLink} to="/">Dealer Network</Link>
                                </div>
                            </div>
                            <div className={`${styles.footerLinkSection} ${styles.contact}`}>
                                <p>Contact</p>
                                <div className={styles.footerLinks}>
                                    <Link className={styles.footerLink} to="/">Get In Touch</Link>
                                    <Link className={styles.footerLink} to="/">+1800 1800 004</Link>
                                    <Link className={styles.footerLink} to="/">info@ace-cranes.com</Link>
                                    <Link className={styles.footerLink} to="/">Governance</Link>
                                    <Link className={styles.footerLink} to="/">100+ Locations Across India</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.miniFooter}>
                        <p>© 2026 Action Construction Equipment Ltd.</p>
                        <div className={styles.termLinks}>
                            <Link to="/" className={styles.termLink}>Privacy Policy</Link>
                            <Link to="/" className={styles.termLink}>Terms of Use</Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
import logo from "../assets/ace-logo.svg";
import styles from "../css/nav.module.css"
import { NavLink } from 'react-router'
import { GoSearch } from "react-icons/go";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
    const [isSearch, setIsSearch] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [searchQuery,setSearchQuery] =useState("");

    const handleSearchChange = (e) => {
    const value = e.target.value;

    setSearchQuery(value);

    if (value === "") {
        // User ne built-in clear button click kiya
        // ya manually saara text delete kiya
        console.log("Search cleared");
        setIsSearch(false);
    }
};
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.mainNav}>
                    <div className={styles.leftNav}>
                        <img src={logo} alt="" className={styles.logo} />
                        <div className={styles.navlinks}>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ""}>Products</NavLink> 
                       <NavLink to="/industries" className={({ isActive }) => isActive ? styles.activeLink : ""}>industries</NavLink>
                      <NavLink to="/projects" className={({ isActive }) => isActive ? styles.activeLink : ""}>Projects</NavLink>
                        <NavLink to="/innovation" className={({ isActive }) => isActive ? styles.activeLink : ""}>INNOVATION</NavLink> 
                        <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ""}>about Ace</NavLink>
                        <NavLink to="/investors" className={({ isActive }) => isActive ? styles.activeLink : ""}>investors</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : ""}>contact</NavLink> 
                        </div>
                    </div>
                    <div className={styles.searchSection}>
                        {!isSearch && <div className={styles.search} onClick={(e) => setIsSearch((prev) => !prev)}>
                            <GoSearch size={20} />
                            <p>Search</p>
                        </div>
                        }
                        {isSearch && <div className={styles.realSearch}>
                            <input type="search" name="" id="" className={styles.searchInput} placeholder="type to search..." value={searchQuery}
    onChange={handleSearchChange} />
                        </div>

                        }
                    </div>
                </div>
            </nav>

            <nav className={styles.mobileNav}>
                <div className={styles.mainNav}>
                    <img src={logo} alt="" className={styles.logo} />
                    <div className={styles.rightNav}>
                        <div className={styles.searchSection}>
                            {!isSearch && <div className={styles.search} onClick={(e) => setIsSearch((prev) => !prev)}>
                                <GoSearch size={16} />
                                <p>Search</p>
                            </div>
                            }
                            {isSearch && <div className={styles.realSearch}>
                                <input type="search" name="" id="" className={styles.searchInput} placeholder="type to search..." />
                            </div>

                            }
                        </div>
                        <div className={styles.menu}>
                            {!openMenu && <CiMenuBurger size={16} className={styles.menuIcon} onClick={(e) => { setOpenMenu(true) }} />}
                            {openMenu && <div className={styles.mobNavlinks}>
                                <div className={styles.closeBtn} onClick={(e) => { setOpenMenu(false) }}><IoMdClose size={20} /></div>
                                <div className={styles.linkBox} ><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ""}>Products</NavLink></div>
                                <div className={styles.linkBox} ><NavLink to="/industries" className={({ isActive }) => isActive ? styles.activeLink : ""}>industries</NavLink></div>
                                <div className={styles.linkBox}> <NavLink to="/projects" className={({ isActive }) => isActive ? styles.activeLink : ""}>Projects</NavLink></div>
                                <div className={styles.linkBox}> <NavLink to="/innovation" className={({ isActive }) => isActive ? styles.activeLink : ""}>INNOVATION</NavLink></div>
                                <div className={styles.linkBox}> <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ""}>about Ace</NavLink></div>
                                <div className={styles.linkBox}> <NavLink to="/investors" className={({ isActive }) => isActive ? styles.activeLink : ""}>investors</NavLink></div>
                                <div className={styles.linkBox}> <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : ""}>contact</NavLink></div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
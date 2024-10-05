import '../assets/css/Header.css'
import instagramIcon from '../assets/img/InstagramIcon.png'
import facebookIcon from '../assets/img/facebookIcon.png';
import twitterIcon from '../assets/img/twitterIcon.png';
import searchIcon from '../assets/img/icon-search.png';
import logo from '../assets/img/Logo.png';
import cartIcon from '../assets/img/icon-cart.png';
import userImg from '../assets/img/UserImg.jpg'
import Image from "next/image";
import Link from 'next/link';

function Header(){
    return(
        <header>
            <div className="header1-Div">
                <div className='header1-content'>
                    <div className='language'>
                        <div>
                            <Link href=''>ქართული</Link>
                        </div>
                        <div className='lang-divider'></div>
                        <div>
                            <Link href=''>English</Link>
                        </div>
                    </div>
                    <div className='socialNetwork'>
                        <Image src={facebookIcon} alt="" />
                        <Image src={instagramIcon} alt=''/>
                        <Image src={twitterIcon} alt=''/>
                    </div>
                    <div className='login-Account'>
                        <button className='sign-button'>Sign up</button>
                    </div>
                    <div className='user'>
                        <div className='userImg-div'>
                            <Image className='userImg' src={userImg} alt="" />
                        </div>
                        <ul className='userProfile'>
                            <Link href='/myAccount' className='navName'><li>My Account &#129171;</li></Link>
                            <Link href='' className='navName'><li>Check out &#129171;</li></Link>
                            <Link href='' className='navName'><li>Shopping cart &#129171;</li></Link>
                            <Link href='' className='navName'><li>Wish list &#129171;</li></Link>
                            <Link href='' className='navName'><li>Log out</li></Link>           
                        </ul>
                    </div>
                </div>
            </div>
            <div className='header2-div'>
                <div className='header2-content'>
                    <div className='search-Div'>
                        <input placeholder='Search...' className='search-input'/>
                        <button id='search-button'><Image src={searchIcon} alt="" /></button>
                    </div>
                    <div className='Logo-Div'>
                        <Image className='header-logo-img' src={logo} alt="" />
                    </div>
                    <div className='cart-Div'>
                        <div className='img-container'>
                            <Image className='header-logo-img' src={cartIcon} alt="" /> 
                            <p id='HeaderCartID'>6</p>
                        </div>
                        <p>Item(s) - <span>50$</span></p>                   
                    </div>
                </div>
            </div>
            <div className='header3-div'>
                <nav className='header3-content'>
                    <div className='navName-div'>
                        <Link href="/" className='navName'>Home</Link>
                    </div>
                    <div className='navName-div'>
                        <Link href='' className='navName'>Women <i className="fa fa-angle-down"></i></Link>
                        <div className='drop-down-manu'>
                            <div>
                                <h3 className='category-name'>Clothing</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div>
                            <h3 className='category-name'>Shoes</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div className='category-name'>
                                <h3>Shoes</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='navName-div'>
                        <Link href='' className='navName'>Mens <i className="fa fa-angle-down"></i></Link>
                        <div className='drop-down-manu'>
                            <div>
                                <h3 className='category-name'>Clothing1</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div>
                            <h3 className='category-name'>Shoes2</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div className='category-name'>
                                <h3>Shoes3</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='navName-div'>
                        <Link href='' className='navName'>Kids <i className="fa fa-angle-down"></i></Link>
                        <div className='drop-down-manu'>
                            <div>
                                <h3 className='category-name'>test</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div>
                            <h3 className='category-name'>tes2</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                            <div className='category-name'>
                                <h3>test3</h3>
                                <ul>
                                    <li>Shirt</li>
                                    <li>Tops</li>
                                    <li>Jeans</li>
                                    <li>View all</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='navName-div'>
                        <Link href='/aboutUs' className='navName'>About us</Link>
                    </div>
                    <div className='navName-div'>
                        <Link href='/contact' className='navName'>Contact</Link>
                    </div>
                    <div className='navName-div'>
                        <Link href='/blog' className='navName'>Blog</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;

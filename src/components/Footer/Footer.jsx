import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <Container  className='footerContainer'>
                    <div className='ek-container'>
                        <div className="ek-footer-part-one">
                            <div className="ek-footerContent-1">
                                <img className='logo' src='./../../../public/imges/LOGO.png' alt="" />
                                <p className='ek-contentUnderLogo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="ek-footerContent-2">
                                <h4 className='ek-content-f-2'>Get help</h4>
                                <div className="ek-links-footer-part-2">
                                    <p><Link to='/Contact'>Contact Us</Link></p>
                                    <p><a href="#">Latest Article</a></p>
                                    <p><Link to='/FAQS'>FAQ</Link></p>
                                </div>
                            </div>
                            <div className="ek-footerContent-3">
                                <h4>PROGRAMS</h4>
                                <div>
                                    <p>Art & Design</p>
                                    <p><span>Business</span></p>
                                    <p>IT & Software</p>
                                    <p>Languages</p>
                                    <p>Programming</p>
                                </div>
                            </div>
                            <div className="ek-footerContent-4">
                                <h4>contact us</h4>
                                <div className="ek-content-footer-part-4">
                                    <p className='ek-address'>Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</p>
                                    <p className='ek-mail'>Tel: + (123) 2500-567-8988 <br />Mail: supportlms@gmail.com</p>
                                    <div className='social-media'>
                                        <a href="#"><img src='./../../../public/imges/Icon.png' /></a>
                                        <a href="#"><img src='./../../../public/imges/Icon-1.png' /></a>
                                        <a href="#"><img src='./../../../public/imges/Icon-2.png' /></a>
                                        <a href="#"><img src='./../../../public/imges/Icon-3.png' /></a>
                                        <a href="#"><img src='./../../../public/imges/Icon-4.png' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ek-footer-copyRight">
                        <p className='copy-right'>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
                    </div>
                </Container>
            </footer>


        </>
    )
}

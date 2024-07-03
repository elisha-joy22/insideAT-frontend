import React from "react";


let footerArr=["FAQ","Help Centre","Contact Us"]

function Footer(){
    return(
        <div className="section-common footer-section">
            <div className="footer-header">Questions? Call 000-800-040-1843</div>
            <div className="footer-grid">
                {
                    footerArr.map((content)=>{
                        return(
                            <div className="footer-contents"><p>{content}</p></div>
                        )
                    })
                }
            </div>    
                <div className="footer-bottom"><button>English</button></div>
                <div className="footer-bottom footer-contents">InsideAt-India</div>
            
        </div>
    )
}

export default Footer;
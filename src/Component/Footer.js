import React, { useState } from 'react';
import './Footer.css'

function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const stylesLink = {
        textDecoration: 'none',
        color: isHovered ? '#de3500' : '#ff531d',
        fontWeight: 'bold',
        transition: '.2s',
    };

    const stylesPragraph = {
        padding:'35px 20px',
        width: '80%',
        textAlign: 'center' ,
        margin: 'auto',
        color: '#626262',
        fontSize: '14px',
        lineHeight: '1.6'
    }

    return (
        <p className='quiz-notice' style={stylesPragraph}>
            يرجى ملاحظة: لا يهدف اختبار فحص اضطرابات الأكل عبر الإنترنت إلى تشخيص المرض. إذا كنت تعاني من سلوكيات اضطرابات الأكل،
            فنحن نشجعك على الاتصال بنا على الرقم 
            <a 
                href='tel:+201124066021' 
                style={stylesLink}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            +201124066021
            </a> أو العثور على متخصص ذي خبرة في علاج اضطرابات الأكل بالقرب منك. 
        </p>
    )
}

export default Footer;

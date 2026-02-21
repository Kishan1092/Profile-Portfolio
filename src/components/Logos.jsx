import { useState } from 'react';
import './Logos.css';

const LOGOS = [
    { name: "HDFC Bank", domain: "hdfcbank.com" },
    { name: "Axis Bank", domain: "axisbank.com" },
    { name: "SBI", domain: "sbi.co.in" },
    { name: "Bandhan Bank", domain: "bandhanbank.com" },
    { name: "ESAF Bank", domain: "esafbank.com" },
    { name: "Canara Bank", domain: "canarabank.com" },
    { name: "AU Small Finance", domain: "aubank.in" },
    { name: "DBS digibank", domain: "dbs.com" },
    { name: "IDBI Bank", domain: "idbibank.in" },
    { name: "Vahana Cloud", domain: "vahanacloud.com" },
    { name: "Decimal Tech", domain: "decimaltech.com" },
    { name: "Ministry of Culture", domain: "indiaculture.gov.in" }
];

const LogoItem = ({ company }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="logo-item glass" title={company.name}>
            {!imgError ? (
                <img
                    src={`https://logo.clearbit.com/${company.domain}`}
                    alt={company.name}
                    className="company-logo-img"
                    onError={() => setImgError(true)}
                />
            ) : (
                <span className="logo-text">{company.name}</span>
            )}
        </div>
    );
};

const Logos = () => {
    return (
        <section className="logos-section">
            <div className="container">
                <p className="logos-title animate-in">Driving Product Strategy & Design at</p>
            </div>
            <div className="logos-container">
                <div className="logos-track">
                    {/* Double the array for infinite scrolling effect */}
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((company, index) => (
                        <LogoItem key={index} company={company} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;

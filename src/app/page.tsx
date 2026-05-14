"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import config from "../data/config.json";

const banners = [
  "/banners/banner1.png",
  "/banners/banner2.png",
  "/banners/banner3.png"
];

const MaskedPhone = ({ phone }: { phone: string }) => {
  const [revealed, setRevealed] = useState(false);
  const masked = phone.substring(0, 4) + "XXXX" + phone.substring(8);
  
  return (
    <span 
      onClick={() => setRevealed(true)} 
      style={{ cursor: revealed ? 'text' : 'pointer' }}
      title={revealed ? '' : 'Click to reveal'}
    >
      +91 {revealed ? phone : masked}
    </span>
  );
};

export default function Home() {
  const { brand, services, companies } = config;
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          CAREER <span>ELEVATE</span>
        </div>
        <a href={`https://wa.me/91${brand.contact.whatsapp[0]}`} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
          Contact Us
        </a>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          {banners.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Career Elevate Banner ${index + 1}`}
              fill
              className={`${styles.heroImage} ${currentBanner === index ? styles.active : styles.inactive}`}
              priority={index === 0}
            />
          ))}
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`${styles.heroContent} ${styles["animate-fade-up"]}`}>
          <span className={styles.heroSubtitle}>{brand.subtitle}</span>
          <h1 className={styles.heroTitle}>
            Let's Build Your <span>Success</span> Story Together!
          </h1>
          <p className={styles.heroText}>
            Elevate your professional career with expert CV building, LinkedIn optimization, and personal mentorship.
          </p>
          <a href="#services" className={styles.ctaBtn}>
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceId}>{service.id}</div>
              <div className={styles.serviceTitle}>{service.title}</div>
              <p className={styles.serviceDesc}>{service.description}</p>
              
              <ul className={styles.featureList}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <div className={styles.serviceFooter}>
                <div className={styles.express}>
                  {service.expressDelivery ? (
                    <>
                      Express Service:
                      <span>{service.expressDelivery}</span>
                    </>
                  ) : (
                    <span>Standard Delivery</span>
                  )}
                </div>
                <div className={styles.price}>{service.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Section */}
      <section className={styles.companies}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>We Work With Top Companies</h2>
        </div>
        
        <div className={styles.companyGroup}>
          <h3 className={styles.companyGroupTitle}>IT & Consulting Companies</h3>
          <div className={styles.companyList}>
            {companies.itAndConsulting.map((company: {name: string, domain: string}, idx: number) => (
              <div key={idx} className={styles.companyCard}>
                <div className={styles.companyLogoWrapper}>
                  <img 
                    src={`/logos/${company.domain}.svg`} 
                    alt={company.name} 
                    className={styles.companyLogo}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <span className={styles.companyName}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.companyGroup}>
          <h3 className={styles.companyGroupTitle}>Healthcare & Pharma Companies</h3>
          <div className={styles.companyList}>
            {companies.healthcareAndPharma.map((company: {name: string, domain: string}, idx: number) => (
              <div key={idx} className={styles.companyCard}>
                <div className={styles.companyLogoWrapper}>
                  <img 
                    src={`/logos/${company.domain}.svg`} 
                    alt={company.name} 
                    className={styles.companyLogo}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <span className={styles.companyName}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo} style={{ marginBottom: "1rem" }}>
              CAREER <span>ELEVATE</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "300px" }}>
              Your career. Our commitment. Your success.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Contact Us</h3>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <div>
                {brand.contact.phoneNumbers.map((phone: string, idx: number) => (
                  <div key={idx}><MaskedPhone phone={phone} /></div>
                ))}
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <div>{brand.contact.email}</div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div>{brand.contact.address}</div>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h3>Availability</h3>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>🕒</span>
              <div>
                <div>Weekend Sessions Available</div>
                <div style={{ color: "var(--text-muted)" }}>{brand.contact.hours}</div>
              </div>
            </div>
            
            <a 
              href={`https://wa.me/91${brand.contact.whatsapp[0]}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappBtn}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
        </div>
        
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Career Elevate. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

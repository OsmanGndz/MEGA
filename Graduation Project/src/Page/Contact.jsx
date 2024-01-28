import React, { useState } from 'react';
import './Contact.css'; // CSS dosyasını eklediğinizden emin olun

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="contact-container"> {/* Ana div */}
            <h2>İletişim</h2>
            <div className="contact-info">
                <h3>İletişim Bilgileri</h3>
                <p><strong>Adres:</strong> Konya Meram Rehberi, Meram, Konya, Türkiye</p>
                <p><strong>Telefon:</strong> +90 123 456 7890</p>
                <p><strong>E-posta:</strong> info@konyameramrehberi.com</p>
                <h3>Sosyal Medya</h3>
                <ul className="social-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            <div className="contact-form">
                <h3>Bize Ulaşın</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Adınız" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="E-posta Adresiniz" value={formData.email} onChange={handleChange} required />
                    <textarea name="message" placeholder="Mesajınız" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Gönder</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

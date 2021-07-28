import './Footer.css';

export default function Footer({ show }) {
    if(!show) return null;

    return (
        <div className="footer">
            <div className="footer-description">
                Created by Kagen Hearn with React/Redux
            </div>
            <div className="footer-links">
                <div className="footer-link">
                    <a href="https://github.com/KagenLH" className="github-logo">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="footer-link">
                    <a href="https://www.linkedin.com/in/kagen-hearn-228b96130/" className="linkedin-logo">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
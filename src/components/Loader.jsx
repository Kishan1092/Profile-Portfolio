import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div className="loader-content">
                <div className="loader-logo">KT</div>
                <div className="loader-bar-container">
                    <div className="loader-bar"></div>
                </div>
                <div className="loader-text">Architecting Experiences...</div>
            </div>
        </div>
    );
};

export default Loader;

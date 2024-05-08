import { Row } from "react-bootstrap";
import './LoadingAnimation.css'

export function LoadingAnimation() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{marginBottom: '-15rem'}}>
                <Row>
                    <div className="spinner-grow text-blurple" style={{  width: "2.5rem", height: "2.5rem", marginTop: "2.75rem", marginRight: ".5rem", animationDuration: '1.5s' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-blurple" style={{ width: "5rem", height: "5rem", marginTop: "1.5rem", marginRight: ".5rem", animationDuration: '1.5s' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-blurple" style={{ width: "7.5rem", height: "7.5rem", animationDuration: '1.5s' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-blurple" style={{  width: "5rem", height: "5rem", marginTop: "1.5rem", marginLeft: ".5rem", animationDuration: '1.5s' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-blurple" style={{  width: "2.5rem", height: "2.5rem", marginTop: "2.75rem", marginLeft: ".5rem", animationDuration: '1.5s' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </Row>
            </div>
            <div className='loading-text'>Your Report will be ready momentarily</div>
        </>
    )
}
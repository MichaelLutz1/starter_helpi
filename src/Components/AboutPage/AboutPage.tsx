import React from 'react'
import './AboutPage.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import colin_headshot from './ProfessionalHeadshot.jpg'
import CircleImage from '../CircleImages/CircleImage';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export function AboutPage() {
    return (
        <div className='about-page-container'>
            <Container>
                <Row>
                    <Col md={6}>
                        <h2 className='our-team' style={{marginRight: 0}}>Our Team</h2>
                        <div className='headshots'>
                            <Row style={{marginBottom: 15}}>
                                <Col md={2} style={{marginRight: -15}}>
                                    <CircleImage imageUrl={colin_headshot}/>
                                </Col>
                                <Col md={9}>
                                    <p className='team-names'>Michael Lutz</p>
                                    <p className='team-names-info'>University of Delaware 202_</p>
                                    <p className='team-names-info'>Major: _</p>
                                    <p className='team-names-info' style={{fontSize: 13}}>Scrum Master</p>
                                    <Col>
                                        <a href="https://github.com/MichaelLutz1" target="_blank" rel="noreferrer">
                                            <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }}>
                                                <BsGithub />
                                            </Button>
                                        </a>
                                        <a href="https://www.linkedin.com/in/michael-p-lutz/" target='_blank' rel="noreferrer">
                                            <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff', marginLeft: 5 }}>
                                                <BsLinkedin />
                                            </Button>
                                        </a>
                                    </Col>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: 15}}>
                                <Col md={2} style={{marginRight: -15}}>
                                    <CircleImage imageUrl={colin_headshot}/>
                                </Col>
                                <Col md={9}>
                                    <p className='team-names'>Colin Parsons</p>
                                    <p className='team-names-info'>University of Delaware 2026</p>
                                    <p className='team-names-info' style={{marginTop: -14}}>Major: Computer Science B.S.</p>
                                    <Col>
                                        <a href="https://github.com/ColinP5" target="_blank" rel="noreferrer">
                                            <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }}>
                                                <BsGithub />
                                            </Button>
                                        </a>
                                        <a href="https://www.linkedin.com/in/colin-parsons5/" target='_blank' rel="noreferrer">
                                            <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff', marginLeft: 5 }}>
                                                <BsLinkedin />
                                            </Button>
                                        </a>
                                    </Col>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: 15}}>
                                <Col md={2} style={{marginRight: -15}}>
                                    <CircleImage imageUrl={colin_headshot}/>
                                </Col>
                                <Col md={9}>
                                    <p className='team-names'>Mike Forte</p>
                                    <p className='team-names-info'>University of Delaware 202_</p>
                                    <p className='team-names-info' style={{marginTop: -14}}>Major: _</p>
                                    <Col>
                                        <a href="https://github.com/Mforte5115" target="_blank" rel="noreferrer">
                                            <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }}>
                                                <BsGithub />
                                            </Button>
                                        </a>
                                        <a href="https://www.linkedin.com/in/forte-michael-meche/" target='_blank' rel="noreferrer">
                                            <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff', marginLeft: 5 }}>
                                                <BsLinkedin />
                                            </Button>
                                        </a>
                                    </Col>
                                </Col>
                            </Row>
                            <Row style={{marginBottom: 15}}>
                                <Col md={2} style={{marginRight: -15}}>
                                    <CircleImage imageUrl={colin_headshot}/>
                                </Col>
                                <Col md={9}>
                                    <p className='team-names'>Jacob Wilber</p>
                                    <p className='team-names-info'>University of Delaware 202_</p>
                                    <p className='team-names-info' style={{marginTop: -14}}>Major: _</p>
                                    <Col>
                                        <a href="https://github.com/jacobwilbe" target="_blank" rel="noreferrer">
                                            <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }}>
                                                <BsGithub />
                                            </Button>
                                        </a>
                                        <a href="https://www.linkedin.com/in/jacobwilber/" target='_blank' rel="noreferrer">
                                            <Button style={{ backgroundColor: '#6923ff', borderColor: '#6923ff', marginLeft: 5 }}>
                                                <BsLinkedin />
                                            </Button>
                                        </a>
                                    </Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <h1 className='our-team'>About Us</h1>
                            <div className='about-us-info'>
                                <p>Welcome to WorkWave! WorkWave is a comprehensive career test that utilizes ChatGPT to determine the ideal career for you!</p>
                                <p>At the heart of our service lies a simple yet insightful quiz featuring multiple-choice questions tailored to uncover your professional preferences, strengths, and interests. 
                                    Whether you're a recent graduate embarking on your career journey or a seasoned professional seeking a change, our user-friendly interface guides you through a series of thought-provoking questions designed to illuminate potential career paths aligned with your aspirations. 
                                    For those seeking a deeper dive into their professional identity, our detailed quiz provides an interactive experience where users can input short responses to prompts related to their skills, experiences, and career goals. 
                                    Powered by state-of-the-art AI models like ChatGPT, our platform analyzes your inputs to generate personalized career insights and recommendations.
                                </p>
                                <p>Our commitment to accuracy and relevance ensures that each result is carefully crafted to provide actionable guidance and valuable insights into your career trajectory. 
                                    Whether you're exploring new opportunities, considering a career transition, or simply seeking affirmation of your current path, 
                                    our Career Test is here to empower you with the knowledge and confidence to make informed decisions about your future.
                                </p>
                                <p>Discover your potential, unlock new possibilities, and embark on a journey of self-discovery with our AI-driven Career Test today. Welcome to a world of endless career possibilities!</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
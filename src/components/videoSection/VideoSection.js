import React from 'react'
import { Button, Col, Container, Row, Carousel } from 'react-bootstrap'
import './videosection.css'
import Vid1 from '../../assets/videos/vid1.MP4'
import Vid2 from '../../assets/videos/vid2.MP4'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom';

function VideoSection() {
    const navigate = useNavigate();
    const videoProperties =[
        {
            id: 1,
            title: "English Version",
            src: Vid1,
        },
        {
            id: 2,
            title: "Twi Version",
            src: Vid2,
        }
    ]
  return (
      <>
            <div className='videosection_container' style={{
                backgroundColor:'#dfdfdf',
                width:"100%",
                padding:"100px 0px"
            }} >
                <Container>
                    <Row>
                        <Col style={{borderRight:'2px solid #2F2E415C'}}>
                            <p className='videosection_text'>Are you a Taxi Driver, Bus Driver,<br></br> Company Driver,<br></br> 
                                Ride Hailing, Trotro, Haulage,<br></br> Dispatch Rider ?
                            </p>
                            <Button className='register_for_free'>Register For Free Now!</Button>
                        </Col>

                        <Col className='centerItems'>
                            <Carousel interval={null}>
                                {videoProperties.map((video) => (
                                    <Carousel.Item key={video.id}>
                                        <ReactPlayer
                                            className='player'
                                            url={video.src}
                                            pip={true}
                                            width= "100%"
                                            controls={true}
                                            // playing={true}
                                        />
                                        {/* <video autoPlay muted width="340" height="400" controls >
                                            <source src={video.src} type="video/mp4"/>
                                        </video> */}
                                        <Carousel.Caption>
                                            <h6>{video.title}</h6>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>  
                       </Col>
                    </Row>
                </Container>
            </div>

            <div className='mobile_vid_container'>
                <Container className='mobile_video_section centerItems'>
                    <p className='mobile_video_sectionn_text'>
                            Are you a Taxi Driver, Bus Driver, Company Driver, 
                        Ride Hailing, Trotro, Haulage, Dispatch Rider ?
                    </p>   
                    <Button className='mobile_video_section_button' onClick={() => navigate('/register')}>Register For Free Now!</Button>

                </Container>

                <p className='text-center mt-5'>Watch Intro Video</p>
                <div className='centerItems'>
                    <Carousel interval={null}>
                        {videoProperties.map((video) => (
                            <Carousel.Item key={video.id}>
                                <ReactPlayer
                                    url={video.src}
                                    pip={true}
                                    width= "100%"
                                    controls={true}
                                    playing={false}
                                />
                                {/* <video autoPlay muted width="340" height="400" controls >
                                    <source src={video.src} type="video/mp4"/>
                                </video> */}
                                <Carousel.Caption>
                                    <h6>{video.title}</h6>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                </div>
            </div>

      </>

  )
}

export default VideoSection
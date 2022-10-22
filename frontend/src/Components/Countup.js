import { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import React from 'react'
import CountUp from 'react-countup';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VisibilitySensor from "react-visibility-sensor";

const Countup = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Box sx={{
            width: '100%',
            height: 300,
            backgroundColor: 'primary.dark',
        }}
        >
            <Grid container pt={6}>
                <Grid item md={4} xs={8} data-aos="fade-right" data-aos-duration="1000">
                    <img src="/project.png" style={{ height: '50px' }} />
                    <Typography variant="h3" component="div" gutterBottom>
                        Projects
                    </Typography>
                    <CountUp
                        start={0}
                        end={30}
                        duration={2}
                        decimal=","
                        suffix='+'
                    >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor
                                onChange={start}
                            >
                                <span style={{ fontSize: '30px' }} ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </Grid>
                <Grid item md={4} xs={8} data-aos="fade-right" data-aos-duration="1000">
                    <img src="/award.png" style={{ height: '50px' }} />
                    <Typography variant="h3" component="div" gutterBottom>
                        Awards
                    </Typography>
                    <CountUp
                        start={0}
                        end={30}
                        duration={2}
                        decimal=","
                        suffix='+'
                    >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor
                                onChange={start}
                            >
                                <span style={{ fontSize: '30px' }} ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </Grid>
                <Grid item md={4} xs={8} data-aos="fade-right" data-aos-duration="1000">
                    <img src="/proile.png" style={{ height: '50px'}} />
                    <Typography variant="h3" component="div" gutterBottom>
                        Members
                    </Typography>
                    <CountUp
                        start={0}
                        end={100}
                        duration={2}
                        decimal=","
                        suffix='+'
                    >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor
                                onChange={start}
                            >
                                <span style={{ fontSize: '30px' }} ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Countup
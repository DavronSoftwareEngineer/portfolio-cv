import React from "react";
import { AboutStyle } from "./style";
import { Grid, Typography } from "@mui/material";
import user from "../dashboard/photo/user.jpg";
import { Animated } from "react-animated-css";

function About() {
  return (
    <AboutStyle>
      <Animated animationIn="zoomInDown" animationOut="zoomInDown" isVisible={true}>
      <div className="wrapabout">
        <h2 className="title">
          <span>About</span>
        </h2>
        <p className="text">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>
      </Animated>
      <Grid container columnSpacing={3} className="grid-wrap" component={'div'}>
        <Grid item xs={4} className="grid">
          <img src={user} alt="" />
        </Grid>
        <Grid item xs={8} className="grid1" component={'div'}>
        <Animated animationIn="slideInRight" animationOut="slideInRight" isVisible={true}>
          <Typography variant="h4" className="typ-title">
            Wep Developer
          </Typography>
          <Typography variant="body1" className="typ-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          
          <Grid container className="grid-cont">
            <Grid item xs={6} className="grid-6">
              <ul>
                <li>
                  <span>Birthday:</span>15 Yanvar 1997
                </li>
                <li>
                  <span>Website:</span> www.example.com
                </li>
                <li>
                  <span>Phone:</span> +998 93 289 32 32
                </li>
                <li>
                  <span>City:</span> Toshkent, UZB
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} className="grid-6">
              <ul>
                <li>
                  <span>Age:</span> 26
                </li>
                <li>
                  <span>Degree:</span> Junior
                </li>
                <li>
                  <span>Email:</span> davron.software.engineer@mail.ru
                </li>
              </ul>
            </Grid>
          </Grid>
          <p className="text-bottom">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
          </Animated>
        </Grid>
      </Grid>
    </AboutStyle>
  );
}

export default About;

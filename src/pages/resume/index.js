import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Animated } from "react-animated-css";



const resumeData = {
  summary: [
    {
      id: 1,
      title: "Davron Mamatov",
      text: "Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
      manzil: "Toshkent, UZB",
      tel: "+998 93 289 32 32",
      email: "davron.software.engineer@mail.ru",
    },
  ],
  education: [
    {
      id: 1,
      name: "MASTER OF FINE ARTS & GRAPHIC DESIGN",
      yil: "2015-2016",
      title: "Rochester Institute of Technology, Rochester, NY",
      text: "Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend",
    },
    {
      id: 2,
      name: "BACHELOR OF FINE ARTS & GRAPHIC DESIGN",
      yil: "2010 - 2014",
      title: "Rochester Institute of Technology, Rochester, NY",
      text: "Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila",
    },
  ],
  professionalExperience: [
    {
      id: 1,
      name: "SENIOR GRAPHIC DESIGN SPECIALIST",
      yil: "2019 - Present",
      title: "Experion, New York, NY",
      texts: [
        {
          id: 1,
          matn: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        },
        {
          id: 2,
          matn: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        },
        {
          id: 3,
          matn: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        },
        {
          id: 4,
          matn: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        },
      ],
    },
    {
      id: 2,
      name: "GRAPHIC DESIGN SPECIALIST",
      yil: "2017 - 2018",
      title: "Stepping Stone Advertising, New York, NY",
      texts: [
        {
          id: 1,
          matn: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        },
        {
          id: 2,
          matn: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        },
        {
          id: 3,
          matn: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        },
        {
          id: 4,
          matn: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
        },
      ],
    },
  ],
};

function Resume() {
  return (
    <Box component={'div'}
    sx={{
      p: "20px",
    }}
    >

      <Box
        component={"div"}
        sx={{
          marginTop: "20px",
        }}
      >
        <Box component={"span"}>
        <Animated animationIn="zoomInDown" animationOut="zoomInDown" isVisible={true}>
          <Typography
            variant="h4"
            component={"h4"}
            sx={{
              textAlign: "center",
            }}
          >
            <span
              style={{
                paddingLeft: 5,
                paddingRight: 5,
                borderBottom: "2px solid blue",
                color: "#173b6c",
              }}
            >
              Resume
            </span>
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              textAlign: "center",
              mt: 2,
              color: "grey",
              fontFamily: "sans-serif",
            }}
          >
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>
          </Animated>
        </Box>

        <Grid container mt={4} columnSpacing={4}>
          <Grid item xs={6}>
          <Animated animationIn="zoomIn" animationOut="zoomIn" isVisible={true}>
            <Typography variant="h4" component={"h4"}>
              Sumary
            </Typography>
            <Box component={"span"}
            sx={{
              mt: 1,
              display: 'block',
              position: 'relative',
              pl: 3,
              pb: 1
            }}
            >
              <Box component={'div'} sx={{
                width: "2px",
                height: "90%",
                backgroundColor: "#00B9FB",
                position: "relative",
                position: "absolute",
                left: "0%",
                bottom: '0%',
              }}>
                <Box component={"span"} sx={{
                  width: '10px',
                  height: '10px',
                  border: '2px solid #00B9FB',
                  display: 'block',
                  borderRadius: '50%',
                  position: "absolute",
                  top: "-8px",
                  left: "-4px",
                }}/>
              </Box>
              <Typography variant="h5" component={"h5"}>
                {resumeData.summary[0].title}
              </Typography>
              <Typography variant="body1" component={"p"}
              sx={{
                color: "#36454F",
                fontStyle: "italic",
                fontFamily:"sans-serif",
                mt: 1,
              }}
              >
                {resumeData.summary[0].text}
              </Typography>
              <Typography component={"ul"}
              sx={{
                pl: 2,
                mt: 1,
                color: "#36454F",
                fontFamily: "sans-serif",
              }}
              >
                <Typography component={"li"}
                sx={{
                  mb: 1,
                }}
                >
                  {resumeData.summary[0].manzil}
                </Typography>
                <Typography component={"li"}>
                  {resumeData.summary[0].tel}
                </Typography>
                <Typography component={"li"}>
                  {resumeData.summary[0].email}
                </Typography>
              </Typography>
            </Box>
            </Animated>
          </Grid>
          <Grid item xs={6}>
          <Animated animationIn="zoomIn" animationOut="zoomIn" isVisible={true}>
            <Typography variant="h4" component={'h4'} 
            sx={{
              mb: 2,
            }}>Education</Typography>
            {resumeData.education.map((item, index) => (
              <Box component={'div'}
              sx={{
                position: "relative",
                pl: 3,
                pb: 1,
                mb: 2,
              }}
              >
                <Box component={'div'} sx={{
                width: "2px",
                height: "90%",
                backgroundColor: "#00B9FB",
                position: "relative",
                position: "absolute",
                left: "0%",
                bottom: '0%',
              }}>
                <Box component={"span"} sx={{
                  width: '10px',
                  height: '10px',
                  border: '2px solid #00B9FB',
                  display: 'block',
                  borderRadius: '50%',
                  position: "absolute",
                  top: "-8px",
                  left: "-4px",
                }}/>
              </Box>
                <Typography variant="h5" component={'h5'} 
                sx={{
                mb: 2,
                }}
                >{item.name}</Typography>
                <Typography variant="h6" component={'h6'} 
                sx={{
                  mb: 2,
                  width: "20%",
                  textAlign: "center",
                  borderRadius: 1, 
                  padding: '0px 15px',
                  backgroundColor: "#E4EDF9",
                  fontFamily: 'sans-serif',
                }}
                >{item.yil}</Typography>
                <Typography variant="body1" component={'p'} 
                sx={{
                  fontFamily: "sans-serif",
                  fontStyle: 'italic',
                  letterSpacing: '1px',
                  mb: 2,
                  color: "#36454F",

                }}
                >{item.title}</Typography>
                <Typography variant="body1" component={'p'}
                sx={{
                  fontFamily: "sans-serif",
                  color: "#36454F",
                }}
                >{item.text}</Typography>
              </Box>
              
            ))}
            </Animated>
          </Grid>
          <Grid item xs={6}>
          <Animated animationIn="zoomIn" animationOut="zoomIn" isVisible={true}>
            <Typography variant="h4" component={"h4"} 
            sx={{
              mb: 2,
            }}
            >Professional Experience</Typography>
            {resumeData.professionalExperience.map((item, index) => (
              <Box component={"div"} key={item.id} 
              sx={{
                position: "relative",
                pl: 3,
                mb: 3 
              }}>
                <Box component={'div'} sx={{
                width: "2px",
                height: "94%",
                backgroundColor: "#00B9FB",
                position: "relative",
                position: "absolute",
                left: "0%",
                bottom: '0%',
              }}>
                <Box component={"span"} sx={{
                  width: '10px',
                  height: '10px',
                  border: '2px solid #00B9FB',
                  display: 'block',
                  borderRadius: '50%',
                  position: "absolute",
                  top: "-8px",
                  left: "-4px",
                }}/>
              </Box>
                <Typography variant="h5" component={"h5"}>{item.name}</Typography>
                <Typography variant="h6" component={"h6"} 
                  sx={{
                    width: '25%',
                    textAlign: 'center',
                    my: 1,
                    padding: "0px 15px",
                    borderRadius: 1,
                    backgroundColor: '#E4EDF9',
                  }}>{item.yil}</Typography>
                <Typography variant="body1" component={"p"} 
                sx={{
                  fontFamily: 'sans-serif',
                  fontStyle: 'italic',
                  color: '#36454F',
                  mb: 1,
                }}>{item.title}</Typography>
                <Typography component={"ul"}
                sx={{
                  pl: 2,
                  color: '#36454F',
                  fontFamily: 'sans-serif',
                }}
                >
                  {item.texts.map((item, index) => (
                    <Typography variant="body1" component={"li"} 
                    sx={{
                      mb: 1
                    }}
                    >{item.matn}</Typography>
                  ))}
                </Typography>
              </Box>
            ))}
            </Animated>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Resume;

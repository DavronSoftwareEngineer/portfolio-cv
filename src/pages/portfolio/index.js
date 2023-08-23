import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import port1 from './photo/port1.png';
import { Outlet } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import { BiLogoNetlify } from "react-icons/bi";
import fruit from './photo/fruit.png';
import test from './photo/test.png';
import demo from './photo/demo.png';
import fier from './photo/fier.png';

const portfolio = [
  {
    id: 1,
    name: "Widgets",
    img: port1,
    git_hub: 'https://github.com/DavronSoftwareEngineer/qalqon-react-components',
    netlify: "https://master--musical-figolla-4f60d3.netlify.app/",
  },
  {
    id: 2,
    name: "Fruit market",
    img: fruit,
    git_hub: 'https://github.com/DavronSoftwareEngineer/Fruit-market',
    netlify: "https://graceful-palmier-8a62f4.netlify.app/",
  },
  {
    id: 3,
    name: "Tests",
    img: test,
    git_hub: 'https://github.com/DavronSoftwareEngineer/Test',
    netlify: "https://cute-babka-580c8d.netlify.app/",
  },
  {
    id: 4,
    name: "Demo School",
    img: demo,
    git_hub: 'https://github.com/DavronSoftwareEngineer/Demo-School',
    netlify: "https://bucolic-rolypoly-5d3496.netlify.app/",
  },
  {
    id: 5,
    name: "Fierbase login page",
    img: fier,
    git_hub: 'https://github.com/DavronSoftwareEngineer/fierbase-login-page',
    netlify: "https://firebase-loginpage.netlify.app/",
  },
  {
    id: 6,
    name: "Fierbase login page",
    img: demo,
    git_hub: 'https://github.com/DavronSoftwareEngineer/Demo-School',
    netlify: "https://firebase-loginpage.netlify.app/",
  },
  {
    id: 7,
    name: "Fierbase login page",
    img: demo,
    git_hub: 'https://github.com/DavronSoftwareEngineer/Demo-School',
    netlify: "https://firebase-loginpage.netlify.app/",
  },
  {
    id: 8,
    name: "Fierbase login page",
    img: demo,
    git_hub: 'https://github.com/DavronSoftwareEngineer/Demo-School',
    netlify: "https://firebase-loginpage.netlify.app/",
  },
  {
    id: 9,
    name: "Fierbase login page",
    img: demo,
    git_hub: 'https://github.com/DavronSoftwareEngineer/Demo-School',
    netlify: "https://firebase-loginpage.netlify.app/",
  },
  {
    id: 10,
    name: "Fierbase login page",
    img: demo,
    git_hub: 'https://github.com/DavronSoftwareEngineer/Demo-School',
    netlify: "https://firebase-loginpage.netlify.app/",
  },
  {
    id: 11,
    name: "Fierbase login page",
    img: demo,
    git_hub: 'https://github.com/DavronSoftwareEngineer/Demo-School',
    netlify: "https://firebase-loginpage.netlify.app/",
  },
  
  
]
function Portfolio() {
  return (
    <Box
      sx={{
        p: 5,
      }}
    >
      <Box component={"span"}>
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
            Portfolio
          </span>
        </Typography>
        <Typography
          variant="body1"
          component={"p"}
          sx={{
            textAlign: "center",
            mt: 2,
            color: "#36454F",
            fontFamily: "sans-serif",
          }}
        >
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </Typography>
      </Box>

      <Grid container mt={0} columnSpacing={3} rowSpacing={5}>
        {portfolio.map((item, index) => (
          <Grid item xs={3}>
          <Box sx={{
            width: "100%",
            height: '300px',
            borderRadius: '10px',
            position: 'relative',
            overflow: "hidden",
            boxShadow: 5,
            "&:hover": {
              "& .btn-link": {
                transform: "translateY(0%)",                
              }
            }
          }}>
            <img src={item.img} alt="" 
            style={{
              width: "100%",
              height: "100%",
              borderRadius: '10px',
            }}
            />
            <Box className="btn-link"
            sx={{
              width: '100%',
              position: 'absolute',
              left: '0%',
              bottom: '0%',
              display: "flex",
              alignItems: 'center',
              justifyContent: "center",
              p: 2,
              transform: "translateY(100%)",
              transition: '0.3s'
            }}
            >
              <IconButton href={item.git_hub} component={'a'} 
              sx={{
                backgroundColor: '#2C2F3F',
                marginRight: "50px",
                "&:hover": {
                  backgroundColor: "#001440",
                },
                "&:active": {
                  transform: "translateY(1px)"                  
                }
              }}>
                <GitHubIcon sx={{fontSize: '2rem', color: "#fff"}}/>
              </IconButton>
              <IconButton href={item.netlify} component={'a'} 
              sx={{
                backgroundColor: '#2C2F3F',
                marginRight: "50px",
                "&:hover": {
                  backgroundColor: "#001440",
                },
                "&:active": {
                  transform: "translateY(1px)"                  
                }
              }}>
                <BiLogoNetlify style={{fontSize: '2.2rem', color: "#fff"}}/>
              </IconButton>
            </Box>
          </Box>
          <Typography variant="h5" component={'h5'} 
            sx={{color: "#2C2F3F", textAlign: "center", 
              mt: 1, fontWeight: "bold", fontFamily: "sans-serif"}}
              >{item.name}</Typography>
          </Grid>
        ))}
      </Grid>
      <Outlet/>
    </Box>
  );
}

export default Portfolio;

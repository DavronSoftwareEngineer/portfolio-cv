import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MapBox from "../../componenets/mapbox-gl";
import { Animated } from "react-animated-css";
function Contact() {
  return (
    <Box
      sx={{
        p: 5,
      }}
    >
      <Box component={"span"}>
      <Animated
            style={{height: "100%"}}
              animationIn="zoomIn"
              animationOut="zoomIn"
              isVisible={true}
            >
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
        </Animated>
      </Box>

      <Grid container mt={'50px'} columnSpacing={3}>
        <Grid item xs={6}>
          <Box sx={{
            boxShadow: 5,
            borderRadius: '5px',
            p: 3,
            height: "100%",
          }}>
            <Animated
              animationIn="zoomIn"
              animationOut="zoomIn"
              isVisible={true}
            >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                "&:hover": {
                  "& .icon-btn": {
                    backgroundColor: '#149DDD',
                  },
                  "& .icon": {
                    color: "#fff",
                  }
                }
              }}
              >
              <IconButton className="icon-btn" sx={{mr: 2,
                backgroundColor: '#DFF3FC',
              }}><LocationOnOutlinedIcon className="icon" sx={{color: "#149DDD"}}/></IconButton>
              <Box component={"div"} >
                <Typography variant="h5" component={"h5"}>
                  Location:
                </Typography>
                <Typography variant="body1" component={"p"}>
                  A108 Adam Street, New York, NY 535022
                </Typography>
              </Box>
            </Box>
            </Animated>
            <Animated
              animationIn="zoomIn"
              animationOut="zoomIn"
              isVisible={true}
            >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                "&:hover": {
                  "& .icon-btn": {
                    backgroundColor: '#149DDD',
                  },
                  "& .icon": {
                    color: "#fff",
                  }
                }
              }}>
              <IconButton className="icon-btn" sx={{mr: 2,
                backgroundColor: '#DFF3FC',
              }}>
                <MailOutlineIcon className="icon" sx={{color: "#149DDD"}}/>
              </IconButton>
              <Box component={"div"}>
                <Typography variant="h5" component={"h5"}>
                  Email:
                </Typography>
                <Typography variant="body1" component={"p"}>
                  info@example.com
                </Typography>
              </Box>
            </Box>
            </Animated>
            <Animated
              animationIn="zoomIn"
              animationOut="zoomIn"
              isVisible={true}
            >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                "&:hover": {
                  "& .icon-btn": {
                    backgroundColor: '#149DDD',
                  },
                  "& .icon": {
                    color: "#fff",
                  }
                }
              }}>
              <IconButton className="icon-btn" sx={{mr: 2,
                backgroundColor: '#DFF3FC',
              }}>
                <PhoneAndroidOutlinedIcon className="icon" sx={{color: "#149DDD"}}/>
              </IconButton>
              <Box component={"div"}>
                <Typography variant="h5" component={"h5"}>
                  Call:
                </Typography>
                <Typography variant="body1" component={"p"}>
                  +1 5589 55488 55
                </Typography>
              </Box>
            </Box>
            </Animated>
            <Box sx={{
              width: "100%",
              height: "400px",
              mt: 3,
              borderRadius: '5px',
              
            }}>
              <MapBox/>
            </Box>
          </Box>
          {/* </Animated> */}
        </Grid>
        <Grid item xs={6}>
        <Animated
            style={{height: "100%"}}
              animationIn="zoomIn"
              animationOut="zoomIn"
              isVisible={true}
            >
          <Box component={"div"} sx={{
            boxShadow: 5,
            p: 3,
            borderRadius: "5px",
            height: "100%",
          }}>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 3,
            }}>
              <TextField
                id="outlined-basic"
                label="F.I.SH"
                variant="outlined"
                size="small"
                sx={{
                  width: "49%",
                }}
              />
              <TextField
              size="small"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                  width: "49%",
                }}
              />
            </Box>
            <TextField
            size="small"
            fullWidth
                id="outlined-basic"
                label="Mavzu"
                variant="outlined"
                sx={{
                  mb: 3,
                }}
              />
            <TextField
            fullWidth
              id="outlined-multiline-flexible"
              label="Text..."
              multiline
              rows={10}
              maxRows={10}
            />

            <Box sx={{
              display: "flex",
              justifyContent: "center",
            }}>
              <Button variant="contained" 
              sx={{
                textTransform: "none",
                mt: '30px',
              }}
              >Xabarni jo'natish</Button>
            </Box>
          </Box>
          </Animated>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;

import { Box, Grid, Typography } from '@mui/material';
import React from 'react'

const SkillsData = [
  {
    id: 1,
    title: "Html",
    foyiz: "95",
  },
  {
    id: 2,
    title: "Css",
    foyiz: "90",
  },
  {
    id: 3,
    title: "Sass",
    foyiz: "90",
  },
  {
    id: 4,
    title: "Bootstrap",
    foyiz: "90",
  },
  {
    id: 5,
    title: "JavaScript",
    foyiz: "80",
  },
  {
    id: 6,
    title: "ReactJs",
    foyiz: "85",
  },
  {
    id: 7,
    title: "React-bootstrap",
    foyiz: "92",
  },
  {
    id: 8,
    title: "Api",
    foyiz: "85",
  },
  {
    id: 9,
    title: "Styled-components",
    foyiz: "88",
  },
  {
    id: 10,
    title: "Matrial Ui",
    foyiz: "80",
  },
  {
    id: 11,
    title: "Webpack",
    foyiz: "70",
  },
  {
    id: 12,
    title: "Redux",
    foyiz: "75",
  },
  {
    id: 13,
    title: "NextJs",
    foyiz: "70",
  },
];
function Skills() {
  return (
    <Box
        component={"div"}
        sx={{
          backgroundColor: "#F5F8FD",
          p: "40px"
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
              Skills
            </span>
          </Typography>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              textAlign: "center",
              mt: 2,
            }}
          >
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </Typography>
        </Box>
        <Grid container mt={1} columnSpacing={3} rowSpacing={3}>
          {SkillsData.map((item, index) => (
            <Grid item xs={6} key={item.id}>
              <Box
                component={"span"}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="body1"
                  component={"p"}
                  sx={{
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  component={"p"}
                  sx={{
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {item.foyiz}%
                </Typography>
              </Box>
              <Box
                component={"div"}
                sx={{
                  width: "100%",
                  height: "10px",
                  backgroundColor: "grey",
                }}
              >
                <Box
                  component={"span"}
                  sx={{
                    width: `${item.foyiz}%`,
                    height: "100%",
                    backgroundColor: "#318CE7",
                    display: "block",
                  }}
                ></Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}

export default Skills;
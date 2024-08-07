// components/MoreOption.js
import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import Image from "next/image";
import CommonButton from "@/app/components/CommonButton";

const MoreOption = ({ options=[], heading, backgroundColor }) => {
  return (
    <Box
      sx={{
        background:  backgroundColor,
        py: { xs: 3, sm: 3, md: 9 },
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Box
          sx={{
            textAlign: "center",
            mx: "auto",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontSize: { xs: "1.2rem", sm: "2.4rem", md: "3rem" },
              color: "rgba(52, 52, 53, 1)",
              fontWeight: 700,
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              fontSize: { xs: ".7rem", sm: "1rem", md: "1.1rem" },
              mt: { xs: 2, sm: 3 },
            }}
          >
            More Than <span style={{ color: "#3653a9" }}>15% Saving</span>
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
          {options.map((item, index) => (
            <Grid item xs={6} sm={6} md={3.7} key={index}>
              <Paper
                sx={{
                  padding: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  textAlign: "center",
                  border: "none",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                }}
                elevation={3}
              >
                <Box
                  sx={{
                    width: { xs: "50%", sm: "30%", md: "25%" },
                    marginX: "auto",
                    pb: 2,
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.text2}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(52, 52, 53, 1)",
                    fontSize: { xs: ".8rem", sm: ".8rem", md: ".9rem" },
                  }}
                >
                  {item.text}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(52, 52, 53, 1)",
                    pb: 1,
                    fontSize: { xs: ".8rem", sm: ".8rem", md: ".9rem" },
                  }}
                >
                  {item.text2}
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <CommonButton
                    font={{ xs: "10px", sm: "14px" }}
                    text={"Unlock Funds"}
                  />
                </Box>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{
                    mt: 1,
                    color: "rgba(52, 52, 53, 0.5) ",
                    fontSize: { xs: ".65rem", sm: ".8rem", md: ".9rem" },
                  }}
                >
                  {item.amount}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8 }}>
          <CommonButton text={" Explore More Credmudra"} />
        </Box>
      </Container>
    </Box>
  );
};

export default MoreOption;

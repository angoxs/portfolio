import { styled } from "../../stitches.config";
import Fade from "react-reveal/Fade";
import FooterLink from "./FooterLink";
import Example from "../Example";

const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "3rem 3rem",
  background: "#191d20",

  bp1: {
    padding: "20px",
  },
});

const Row = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "space-between",
  gridGap: 90,
  alignItems: "center",
  padding: "4rem 2rem",
  width: "100%",

  bp1: {
    gridTemplateColumns: "1fr",
    gridGap: 20,
  },
});

const Name = styled("h1", {
  margin: 0,
  fontSize: 38,
  fontWeight: 600,
  maxWidth: 600,
  color: "white",

  span: {
    color: "#2fbdff",
  },

  bp1: {
    fontSize: 30,
  },
});

const Description = styled("p", {
  margin: 0,
  marginTop: 30,
  marginBottom: 30,
  fontSize: 18,
  fontWeight: 300,
  color: "#989aa3",
  textDecoration: "underline",
  cursor: "pointer",

  bp1: {
    fontSize: 18,
    marginBottom: 40,
  },
});

const Title = styled("p", {
  margin: 0,
  marginTop: 20,
  marginBottom: 20,
  fontSize: 13,
  fontWeight: 400,
  color: "white",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, auto)",
  alignItems: "center",
  justifyContent: "stretch",
  width: "100%",
  gridGap: 20,
  marginBottom: 40,

  bp1: {
    gridTemplateColumns: "repeat(2, auto)",
    gridGap: 10,
  },
});

export default function Footer() {
  return (
    <Frame>
      <Fade>
        <Row>
          <div>
            <Name>Want to work together?</Name>
            <Description>Let's do it.</Description>
            <Grid>
              <FooterLink name02="Services" />
              <FooterLink name02="About" />
              <FooterLink name02="Work" />
              <FooterLink name02="Start a Project" />
            </Grid>
            <Title>
              © All rights reserved. Selected works by Angel Vazquez – 2021 –
              Made with love in USA 🇺🇸
            </Title>
          </div>
          <div>
            <Title>Email</Title>
            <FooterLink name02="angelCL0@outlook.com" />
            <Title>Follow me</Title>
            <Grid>
              <FooterLink name02="Dribble" />
              <FooterLink name02="Behance" />
              <FooterLink name02="Instagram" />
              <FooterLink name02="LinkedIn" />
            </Grid>
          </div>
        </Row>
      </Fade>
    </Frame>
  );
}

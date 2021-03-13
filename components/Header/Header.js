import { styled } from "../../stitches.config";
import Fade from "react-reveal/Fade";
import Collection from "./Collection";

const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "3rem 3rem",

  bp1: {
    padding: "1.5rem 0.5rem",
  },
});

const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4rem 2rem",
  width: "100%",

  bp1: {
    padding: "4rem 0.2rem",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

const Name = styled("h1", {
  margin: 0,
  fontSize: 60,
  fontWeight: 600,
  maxWidth: 700,

  span: {
    color: "#2fbdff",
  },

  bp1: {
    fontSize: 38,
  },
});

const Description = styled("p", {
  margin: 0,
  marginTop: 20,
  fontSize: 18,
  fontWeight: 300,
  color: "#989aa3",
  maxWidth: 700,

  bp1: {
    fontSize: 18,
    marginBottom: 40,
  },
});

const Button = styled("button", {
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: 1,
  padding: "15px 50px",
  background: "#fff",
  borderRadius: 30,
  border: "1px solid transparent",
  color: "black",
  cursor: "pointer",
  transition: "all 0.5s linear",
  boxShadow: "rgb(135 140 189 / 13%) 52px 52px 84px 0px",

  ":hover": {
    background: "#eeeff1",
    border: "1px solid white",
    color: "#191d20",
    boxShadow: "rgb(135 140 189 / 13%) 52px 52px 84px 0px",
  },

  bp1: {
    width: "100%",
  },
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(6, auto)",
  alignItems: "center",
  justifyContent: "stretch",
  width: "100%",
  gridGap: 20,

  bp1: {
    gridTemplateColumns: "repeat(3, auto)",
    gridGap: 10,
  },
});

export default function Header() {
  return (
    <Frame>
      <Fade>
        <Row>
          <div>
            <Name>
              I'm Sleak — a stylish personal site template for React & Stitches.
            </Name>
            <Description>
              Use this space to introduce yourself, and maybe share a few links
              to your work, or your Twitter profile. Duplicate this template for
              free from the Super Market. See instructions here.{" "}
            </Description>
          </div>
          <Button>Hire Me &rarr;</Button>
        </Row>
        <Grid>
          <Collection logo="/github02.svg" />
          <Collection logo="/figma01.svg" />
          <Collection logo="/apple02.svg" />
          <Collection logo="/spotify02.svg" />
          <Collection logo="/twitter02.svg" />
          <Collection logo="/framer02.svg" />
        </Grid>
      </Fade>
    </Frame>
  );
}

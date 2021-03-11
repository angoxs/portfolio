import { styled } from "../../stitches.config";
import Fade from "react-reveal/Fade";
import Collection from "./Collection";

const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
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
  fontSize: 74,
  fontWeight: 700,

  span: {
    color: "#2fbdff",
  },

  bp1: {
    fontSize: 64,
  },
});

const Description = styled("p", {
  margin: 0,
  marginTop: 20,
  fontSize: 20,
  fontWeight: 300,
  color: "#adb4c2",

  bp1: {
    fontSize: 18,
    marginBottom: 40,
  },
});

const Button = styled("button", {
  fontSize: 16,
  fontWeight: 600,
  letterSpacing: 1,
  padding: "15px 30px",
  background: "#2b374c",
  borderRadius: 8,
  border: "none",
  color: "white",
  cursor: "pointer",
  transition: "all 0.5s linear",

  ":hover": {
    background: "#fafafa",
    color: "black",
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
  },
});

export default function Header() {
  return (
    <Frame>
      <Fade>
        <Row>
          <div>
            <Name>
              <span>Design</span> & Code
            </Name>
            <Description>
              I’m a front-end designer & developer based in Florida.
            </Description>
          </div>
          <Button>Hire Me &rarr;</Button>
        </Row>
        <Grid>
          <Collection logo="/git-hub.svg" />
          <Collection logo="/figma03.svg" />
          <Collection logo="/git-hub.svg" />
          <Collection logo="/git-hub.svg" />
          <Collection logo="/git-hub.svg" />
          <Collection logo="/git-hub.svg" />
        </Grid>
      </Fade>
    </Frame>
  );
}

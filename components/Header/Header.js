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
  fontSize: 64,
  fontWeight: 600,
  maxWidth: 600,

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
  fontSize: 20,
  fontWeight: 300,
  color: "#989aa3",

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
  background: "#191d20",
  borderRadius: 8,
  border: "none",
  color: "white",
  cursor: "pointer",
  transition: "all 0.5s linear",

  ":hover": {
    background: "#fafafa",
    color: "#191d20",
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
            <Name>Digital designer based in Ocala. </Name>
            <Description>
              I’m a front-end designer & developer based in Florida.
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

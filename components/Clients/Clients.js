import { styled } from "../../stitches.config";
import Fade from "react-reveal/Fade";
import Client from "./Client";
import Example from "../Example";

const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "120px 90px",

  bp1: {
    padding: "90px 20px",
  },
});

const Row = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "space-between",
  gridGap: 40,
  alignItems: "center",
  width: "100%",

  bp1: {
    gridTemplateColumns: "1fr",
  },
});

const Name = styled("h1", {
  margin: 0,
  fontSize: 50,
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
  marginTop: 30,
  marginBottom: 30,
  fontSize: 18,
  fontWeight: 300,
  color: "#989aa3",

  bp1: {
    fontSize: 18,
    marginBottom: 40,
  },
});

const Title = styled("p", {
  margin: 0,
  marginTop: 20,
  marginBottom: 40,
  fontSize: 20,
  fontWeight: 500,

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

export default function Clients() {
  return (
    <Frame>
      <Fade>
        <Row>
          <div>
            <Name>Clients around the globe</Name>
            <Description>
              A pseudo-Latin text used in web design, layout, and printing in
              place of things to emphasise layouts for previewing layouts and
              visual mockups.{" "}
            </Description>
            <Grid>
              <Client name01="8" name02="Years" />
              <Client name01="4" name02="Continents" />
              <Client name01="7" name02="Countries" />
              <Client name01="14" name02="Cities" />
            </Grid>
            <Button>Let's work together</Button>
          </div>
          <div>
            <Example />
          </div>
        </Row>
      </Fade>
    </Frame>
  );
}

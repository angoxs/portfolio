import { styled } from "../../stitches.config";
import Fade from "react-reveal/Fade";
import Benefit from "./Benefit";

const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "3rem 3rem",

  bp1: {
    padding: "1.5rem 0.5rem",
  },
});

const Row = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "space-between",
  gridGap: 40,
  alignItems: "center",
  padding: "4rem 2rem",
  width: "100%",

  bp1: {
    gridTemplateColumns: "1fr",
    padding: "90px 0",
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
  marginTop: 20,
  marginBottom: 40,
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
  gridTemplateColumns: "repeat(2, auto)",
  alignItems: "center",
  justifyContent: "stretch",
  width: "100%",
  gridGap: 20,

  bp1: {
    gridTemplateColumns: "repeat(1, auto)",
    gridGap: 10,
  },
});

export default function Brief() {
  return (
    <Frame>
      <Fade>
        <Row>
          <div>
            <Name>A structured process to build amazing projects</Name>
            <Description>
              A pseudo-Latin text used in web design, layout, and printing in
              place of things to emphasise layouts for previewing layouts and
              visual mockups.{" "}
            </Description>
            <Button>See my services & approach</Button>
          </div>
          <div>
            <Title>Here's what I can help you with:</Title>
            <Grid>
              <Benefit
                name01="User Interface"
                name02="User Experience"
                name03="User flow"
                border="#ffd53f"
              />
              <Benefit
                name01="User Research"
                name02="Usability Testing"
                name03="Wireframe"
                border="#7ae5e5"
              />
              <Benefit
                name01="Prototype"
                name02="Icon Design"
                name03="Interface Animation"
                border="#4788e9"
              />
              <Benefit
                name01="Creative & Art Direction"
                name02="Design System"
                name03="3D Assets"
                border="#325677"
              />
            </Grid>
          </div>
        </Row>
      </Fade>
    </Frame>
  );
}

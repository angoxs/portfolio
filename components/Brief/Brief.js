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
            <Description>Here's what I can help you with:</Description>
            <Grid>
              <Benefit
                name01="User Interface"
                name02="User Experience"
                name03="User flow"
                logo="apple02.svg"
              />
              <Benefit
                name01="User Research"
                name02="Usability Testing"
                name03="Wireframe"
                logo="apple02.svg"
              />
              <Benefit
                name01="Prototype"
                name02="Icon Design"
                name03="Interface Animation"
                logo="apple02.svg"
              />
              <Benefit
                name01="Creative & Art Direction"
                name02="Design System"
                name03=""
                logo="apple02.svg"
              />
            </Grid>
          </div>
        </Row>
      </Fade>
    </Frame>
  );
}

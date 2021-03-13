import { styled } from "../../stitches.config";
import Fade from "react-reveal/Fade";

const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 8rem",

  bp1: {
    padding: "90px 0.5rem",
  },
});

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});

const Image = styled("img", {
  height: 420,
  width: "100%",
  objectfit: "cover",

  bp1: {
    height: 220,
  },
});

const Title = styled("p", {
  margin: 0,
  fontSize: 30,
  fontWeight: 600,
  color: "#2b374c",
});

const Name = styled("p", {
  margin: 0,
  fontSize: 26,
  fontWeight: 600,
  color: "#2b374c",
});

const Description = styled("p", {
  margin: 0,
  marginTop: 18,
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
  padding: "15px 50px",
  background: "#eeeff1",
  borderRadius: 30,
  border: "1px solid transparent",
  color: "black",
  cursor: "pointer",
  transition: "all 0.5s linear",
  boxShadow: "rgb(135 140 189 / 13%) 52px 52px 84px 0px",

  ":hover": {
    background: "#fff",
    border: "1px solid #eeeff1",
    color: "#191d20",
    boxShadow: "rgb(135 140 189 / 13%) 52px 52px 84px 0px",
  },

  bp1: {
    width: "100%",
  },
});

const Example = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: 40,
  marginTop: 60,
  background: "#fff",
  borderRadius: 12,

  bp1: {
    gridTemplateColumns: "1fr",
    gridGap: 30,
  },
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",

  bp1: {
    padding: 30,
  },
});

export default function Projects() {
  return (
    <Frame>
      <Column>
        <Title>Last Projects</Title>
        <Fade up>
          <Example>
            <Image src="/project03.webp" />
            <Container>
              <Name>Gymondo</Name>
              <Description>
                A pseudo-Latin text used in web design, layout, and printing in
                place of things to emphasise layouts for previewing layouts and
                visual mockups.{" "}
              </Description>
              <Button>See More</Button>
            </Container>
          </Example>
          <Example>
            <Image src="/project04.webp" />
            <Container>
              <Name>CaixaBank</Name>
              <Description>
                A pseudo-Latin text used in web design, layout, and printing in
                place of things to emphasise layouts for previewing layouts and
                visual mockups.{" "}
              </Description>
              <Button>See More</Button>
            </Container>
          </Example>
        </Fade>
      </Column>
    </Frame>
  );
}

import { styled } from "../../../stitches.config";
import Fade from "react-reveal/Fade";

const Frame = styled("div", {
  position: "absolute",
  top: 20,
  right: 20,
  padding: 30,
  background: "white",
  boxShadow: "rgb(135 140 189 / 13%) 52px 52px 84px 0px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: 10,
});

const Expertise = styled("p", {
  margin: 0,
  fontSize: 15,
  fontWeight: 500,
});

const DisplayImage = styled("img", {
  backgroundPosition: "center",
  backgroundSize: "cover",
  objectFit: "cover",
  borderRadius: 8,
  width: 60,
  height: 60,
  marginRight: 10,
});

const BoxFrame = styled("div", {
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: 10,
  padding: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "stretch",
  width: "100%",
  background: "#fff",

  ":hover": {
    border: "1px solid rgba(0, 0, 0, 0)",
    boxShadow: "0 20px 30px rgba(236,236,248,0.8)",
  },
});

const Quote = styled("span", {
  fontSize: 11,
  color: "rgba(0,0,0,0.5)",
  fontWeight: 500,
});

const Collections = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: 20,
  marginTop: 20,
});

const Name = styled("p", {
  margin: 0,
  fontSize: 14,
});

const Container = styled("div", {});

export default function Collection(props) {
  return (
    <Frame>
      <Expertise>Collections</Expertise>

      <Fade>
        <Collections>
          <div>
            <BoxFrame>
              <DisplayImage src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
              <Container>
                <Name>Angel Vazquez</Name>
                <Quote>SwiftUI</Quote>
              </Container>
            </BoxFrame>
          </div>
          <div>
            <BoxFrame>
              <DisplayImage src="https://images.unsplash.com/photo-1567407603465-3054a47b2eb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
              <Container>
                <Name>Angel Vazquez</Name>
                <Quote>SwiftUI</Quote>
              </Container>
            </BoxFrame>
          </div>
          <div>
            <BoxFrame>
              <DisplayImage src="https://images.unsplash.com/photo-1603700501120-de2ebf0ae131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" />
              <Container>
                <Name>Angel Vazquez</Name>
                <Quote>SwiftUI</Quote>
              </Container>
            </BoxFrame>
          </div>
          <div>
            <BoxFrame>
              <DisplayImage src="https://images.unsplash.com/photo-1553525302-38381e3e0c9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" />
              <Container>
                <Name>Angel Vazquez</Name>
                <Quote>SwiftUI</Quote>
              </Container>
            </BoxFrame>
          </div>
        </Collections>
      </Fade>
    </Frame>
  );
}

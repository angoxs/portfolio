import { styled } from "../../../stitches.config";
import Fade from "react-reveal/Fade";

const Frame = styled("div", {
  padding: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  borderRadius: 10,
  boxShadow: "rgb(135 140 189 / 13%) 52px 52px 84px 0px",

  ":hover": {
    background: "white",
    boxShadow: "rgb(135 140 189 / 13%) 52px 52px 84px 0px",
  },
});

const Name = styled("p", {
  margin: 0,
  marginBottom: 6,
  fontSize: 16,
  fontWeight: 400,
  color: "#989aa3",
});

const Number = styled("p", {
  margin: 0,
  marginBottom: 6,
  fontSize: 60,
  fontWeight: 700,
});

export default function Client(props) {
  return (
    <Fade up>
      <Frame>
        <Number>{props.name01}</Number>
        <Name>{props.name02}</Name>
      </Frame>
    </Fade>
  );
}

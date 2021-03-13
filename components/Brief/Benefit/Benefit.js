import { styled } from "../../../stitches.config";
import Fade from "react-reveal/Fade";

const Frame = styled("div", {
  padding: 30,
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

const Image = styled("img", {
  width: 44,
  height: 44,
  marginBottom: 20,

  bp2: {
    width: 38,
    height: 38,
  },
});

const Name = styled("p", {
  margin: 0,
  marginBottom: 6,
  fontSize: 16,
  fontWeight: 400,
});

export default function Benefit(props) {
  return (
    <Fade up>
      <Frame>
        <Image src={props.logo} />
        <Name>{props.name01}</Name>
        <Name>{props.name02}</Name>
        <Name>{props.name03}</Name>
      </Frame>
    </Fade>
  );
}

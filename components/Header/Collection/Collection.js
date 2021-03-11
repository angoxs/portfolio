import { styled } from "../../../stitches.config";
import Fade from "react-reveal/Fade";

const Frame = styled("div", {
  padding: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,

  ":hover": {
    background: "white",
    boxShadow: "rgb(135 140 189 / 13%) 52px 52px 84px 0px",
  },

  bp2: {
    padding: 15,
  },
});

const Image = styled("img", {
  width: 44,
  height: 44,

  bp2: {
    width: 38,
    height: 38,
  },
});

export default function Collection(props) {
  return (
    <Fade up>
      <Frame>
        <Image src={props.logo} />
      </Frame>
    </Fade>
  );
}

import { styled } from "../../stitches.config";
import Fade from "react-reveal/Fade";

const Frame = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  padding: "4rem 3rem",

  bp1: {
    padding: "20px",
  },
});

const Avatar = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Image = styled("img", {
  height: 44,
  width: 44,
  objectfit: "cover",
  borderRadius: "50%",
});

const Name = styled("p", {
  marginLeft: 12,
  fontSize: 16,
  fontWeight: 600,
  color: "#2b374c",
});

export default function Navigation() {
  return (
    <Frame>
      <Fade>
        <Avatar>
          <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" />
          <Name>Ángel Vázquez</Name>
        </Avatar>
      </Fade>
    </Frame>
  );
}

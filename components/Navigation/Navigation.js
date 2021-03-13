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
  objectFit: "cover",
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
          <Image src="/avatar.jpg" />
          <Name>Ángel Vázquez</Name>
        </Avatar>
      </Fade>
    </Frame>
  );
}

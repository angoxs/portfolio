import { styled } from "../../stitches.config";
import Fade from "react-reveal/Fade";

const Frame = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 8rem",

  bp1: {
    padding: "1.5rem 0.5rem",
  },
});

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: 40,
  alignItems: "center",
  justifyContent: "center",

  bp1: {
    gridTemplateColumns: "1fr",
  },
});

const Image = styled("img", {
  height: 420,
  width: "100%",
  objectfit: "cover",

  ":nth-child(2)": {
    marginTop: 160,

    bp1: {
      marginTop: 0,
    },
  },

  ":nth-child(4)": {
    marginTop: 160,

    bp1: {
      marginTop: 0,
    },
  },

  bp1: {
    height: 280,
  },
});

const Name = styled("p", {
  fontSize: 44,
  fontWeight: 600,
  color: "#2b374c",
});

export default function Projects() {
  return (
    <Frame>
      <Column>
        <Name>Last Projects</Name>
        <Fade up>
          <Grid>
            <Image src="/project03.webp" />
            <Image src="/project04.webp" />
            <Image src="/project03.webp" />
            <Image src="/project04.webp" />
          </Grid>
        </Fade>
      </Column>
    </Frame>
  );
}

import { Grid, propNames } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PictureGridProps {
  children: ReactNode;
}
export const PictureGrid: React.FC<PictureGridProps> = (props) => {
  return (
    <Grid
      h="500px"
      w="500px"
      templateRows="repeat(5, 1fr)"
      templateColumns="repeat(5, 1fr)"
    >
      {props.children}
    </Grid>
  );
};

import { GridItem } from "@chakra-ui/react";

interface PictureGridProps {
  color: string;
}
export const PictureGridItem: React.VFC<PictureGridProps> = (props) => {
  return <GridItem bg={props.color}></GridItem>;
};

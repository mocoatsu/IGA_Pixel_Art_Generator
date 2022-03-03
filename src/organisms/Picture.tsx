import { PictureGrid } from "src/atomsAndMolecules/PictureGrid";
import { PictureGridItem } from "src/atomsAndMolecules/PictureGridItem";
import React from "react";

interface PictureProps {
  pictureColors: string[][];
}

export const Picture: React.VFC<PictureProps> = (props) => {
  const pictureGrid = [];
  for (const pixelRow of props.pictureColors) {
    for (const pixelColor of pixelRow) {
      pictureGrid.push(<PictureGridItem color={pixelColor}></PictureGridItem>);
    }
  }

  return <PictureGrid>{pictureGrid}</PictureGrid>;
};

// export Picture

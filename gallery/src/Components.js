// import React from "react";
// import ReactDOM from "react-dom";
import  styled  from "@emotion/styled";
import "./index.css";
export const Header = styled("header")({
  padding: 16,
  backgroundColor: "hsl(0 0% 94%)"
});

export const TileView = styled ('div') (props => ({
  display: 'grid',
  padding: props.spacing,
  gridGap: props.spacing,
  gridTemplateColumns: `repeat(auto-fill, minmax(${props.minCellWidth}px, 1fr))`,
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(100%, 1fr))', // For smaller screens, one column
  },
}));


TileView.defaultProps = {
  spacing: 16,
  minCellWidth: 120,
};

const thumbnailStyles = {
    display: "block",
    width: "100%",
    objectFit: "cover"
    }

const fullscreenStyles = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: '80vh',
    margin:'auto'
    }


export const Photo = styled('img')(props => props.isActive ? fullscreenStyles: thumbnailStyles);

export const Frame = styled('div')({
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "hsla(0, 0%, 100%, 0.96)",
    zIndex: 5
    })
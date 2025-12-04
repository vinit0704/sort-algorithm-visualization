import React from "react";
import {
  Button,
  ToolbarWrapper,
  SliderWrapper,
  Span,
  Icon,
  Slider,
  StyledSelect,
  StyledOption,
  Controls,
  Link,
} from "./styles";

const Toolbar = ({
  algorithms,
  currentAlgo,
  len,
  visualizeSorting,
  handleLength,
  handleAlgo,
  handleShuffle,
  sorting,
  sorted,
}) => {
  return (
  <ToolbarWrapper>
          <StyledSelect onChange={handleAlgo} defaultValue={currentAlgo}>
        {algorithms.map((currentAlgo, index) => (
          <StyledOption key={index} value={index}>
            {currentAlgo.name}
          </StyledOption>
        ))}
      </StyledSelect>
      <SliderWrapper>
        <Span>Change size & speed</Span>
        <Slider
          type="range"
          min="50"
          max="250"
          onChange={handleLength}
          value={len}
          disabled={sorting}
        />
      </SliderWrapper>
      <Controls>
        <Button onClick={() => handleShuffle()} disabled={sorting}>
          <Icon className="fa-solid fa-arrow-rotate-right" /> Shuffle
        </Button>
        <Button
          onClick={() => visualizeSorting(currentAlgo)}
          disabled={sorting || sorted}
        >
          <Icon className="fa-solid fa-play" />
          Start
        </Button>
        <Link
          href="https://github.com/vinit0704"
          target="_blank"
        >
          <Icon className="fa-brands fa-github" />
          GitHub
        </Link>
      </Controls>
  </ToolbarWrapper>
  );
};

export default Toolbar;

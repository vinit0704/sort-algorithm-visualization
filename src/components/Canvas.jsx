import React, { useState, useEffect } from "react";
import {
  BubbleSort,
  GnomeSort,
  HeapSort,
  QuickSort,
  MergeSort,
} from "../algorithms/index";
import Toolbar from "./Toolbar";
import ShuffleArray from "../helpers/ShuffleArray";
import {
  PageWrapper,
  CanvasContainer,
  Bar,
} from "./styles";

const sortingAlgorithms = [
  { component: BubbleSort, name: "Bubble Sort" },
  { component: GnomeSort, name: "Gnome Sort" },
  { component: HeapSort, name: "Heap Sort" },
  { component: QuickSort, name: "Quick Sort" },
  { component: MergeSort, name: "Merge Sort" },
];

const Canvas = () => {
  const [data, setData] = useState([]);
  const [currentAlgo, setCurrentAlgo] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [dataLen, setDataLen] = useState(120);

  useEffect(() => {
    setIsSorted(false);
    const mountData = ShuffleArray(dataLen);
    setData([...mountData]);
  }, [dataLen]);

  const visualizeSorting = async (currentAlgo) => {
    setIsSorting(true);
    await sortingAlgorithms[currentAlgo].component({
      data: data,
      setData: setData,
    });
    setIsSorting(false);
    setIsSorted(true);
  };

  const handleLength = (event) => setDataLen(Number(event.target.value));

  const handleShuffle = () => {
    setIsSorted(false);
    const changes = ShuffleArray(dataLen);
    setData([...changes]);
  };

  // calculate width per bar
  const barWidthPercent = data.length > 0 ? 100 / data.length : 0;

  return (
    <PageWrapper>
      <Toolbar
        algorithms={sortingAlgorithms}
        currentAlgo={currentAlgo}
        len={dataLen}
        visualizeSorting={visualizeSorting}
        handleLength={handleLength}
        handleAlgo={setCurrentAlgo}
        handleShuffle={handleShuffle}
        sorting={isSorting}
        sorted={isSorted}
      />
      <CanvasContainer>
        {data.map((node, key) => {
          // Normalize node.num to 0..1 based on expected max of ~70 (from ShuffleArray)
          const maxHeight = 70; // same scale as ShuffleArray's 70
          const normalized = Math.min(node.num / maxHeight, 1);
          const heightPercent = normalized * 100; // percent of container height

          return (
            <Bar
              key={key}
              style={{
                width: `${barWidthPercent}%`,
                height: `${heightPercent}%`,
                backgroundColor: node.color,
              }}
            />
          );
        })}
      </CanvasContainer>
    </PageWrapper>
  );
};

export default Canvas;

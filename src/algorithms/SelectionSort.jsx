import Swap from "../helpers/Swap";
import Highlight from "../helpers/Highlight";

const SelectionSort = async ({ data, setData }) => {
  const length = data.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      // Highlight current comparison (current min and j)
      await Highlight({ nodes: [minIndex, j], data: data, setData: setData });

      if (data[j].num < data[minIndex].num) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      Swap(i, minIndex, data);
    }

    // Update array after each outer loop iteration
    setData([...data]);
  }
};

export default SelectionSort;

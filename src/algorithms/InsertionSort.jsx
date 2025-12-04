import Swap from "../helpers/Swap";
import Highlight from "../helpers/Highlight";

const InsertionSort = async ({ data, setData }) => {
  const length = data.length;

  for (let i = 1; i < length; i++) {
    let j = i;

    // Insert data[i] into the sorted part [0..i-1]
    while (j > 0 && data[j - 1].num > data[j].num) {
      // Highlight the pair being compared/swapped
      await Highlight({ nodes: [j - 1, j], data: data, setData: setData });

      Swap(j, j - 1, data);
      j--;

      // Update array after each swap for smooth animation
      setData([...data]);
    }
  }
};

export default InsertionSort;

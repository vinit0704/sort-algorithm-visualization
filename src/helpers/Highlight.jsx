import Colors from "./Colors";
import Sleep from "./Sleep";

const Highlight = async ({ nodes, data, setData }) => {
  // create a shallow copy and set colors on highlighted indices
  let tempData = [...data];

  for (let i of nodes) {
    if (i >= 0 && i < tempData.length) {
      // preserve the numeric value but override color
      tempData[i] = { ...tempData[i], color: Colors.highlight };
    }
  }

  // wait for small delay (dependent on array length)
  await Sleep(1000 / data.length);
  // update after wait
  setData([...tempData]);
};

export default Highlight;

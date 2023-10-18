// Libraries
import { useSelector } from "react-redux";

// Types
import { RootState } from "../../store";
import { BoxProperty } from "../../features";

// Components
import { BoxColorPicker, BoxRange } from "./";

export const BoxPanel = () => {
  // Call components from the Redux store
  const boxState = useSelector((state: RootState) => state.boxProperties);

  // Display components according to their props
  const boxInputs = boxState.map((input: BoxProperty, index: number) => {
    if (input.type === "range") {
      return <BoxRange key={index} inputData={input} />;
    } else if (input.type === "color") {
      return <BoxColorPicker key={index} inputData={input} />;
    }
  });

  return (
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-300">
      <p className="font-bold text-lg my-2">Boxpanel</p>
      {boxInputs}
    </div>
  );
};

// Libraries
import { useDispatch } from "react-redux";

// Types, functions
import { shadow, updateShadowValue } from "../../features/shadows";

// Typing
interface ShadowRangeProps {
  inputData: shadow;
  shadowId: string;
}

export const ShadowRange = ({ inputData, shadowId }: ShadowRangeProps) => {
  // useDispatch to make actions on dats in redux store
  const dispatch = useDispatch();

  // Make actions using the functions inside features files
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateShadowValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
        shadowId,
      })
    );
  };
  return (
    <div className="my-4">
      <div className="flex justify-between items-baseline">
        <p>{inputData.name}</p>
        <div className="flex items-baseline mb-2">
          <input
            value={inputData.value}
            onChange={handleInputs}
            type="number"
            className="w-14 h-8 mr-2 border border-gray-200 text-center"
          />
          <p>px</p>
        </div>
      </div>
      <div className="relative z-0 w-full flex items-center">
        <input
          value={inputData.value}
          onChange={handleInputs}
          type="range"
          min={inputData.minMax && inputData.minMax[0]}
          max={inputData.minMax && inputData.minMax[1]}
          className="w-full h-[2px] bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

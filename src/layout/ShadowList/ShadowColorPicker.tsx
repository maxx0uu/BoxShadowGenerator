// Libraries
import { useDispatch } from "react-redux";

// Types, functions
import { shadow, updateShadowValue } from "../../features/shadows";

// Typing
interface ShadowColorPickerProps {
  inputData: shadow;
  shadowId: string;
}

export const ShadowColorPicker = ({
  inputData,
  shadowId,
}: ShadowColorPickerProps) => {
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
    <div className="mt-3">
      <p>{inputData.name}</p>
      <div className="flex mt-2">
        <input
          value={inputData.value}
          onChange={handleInputs}
          type="text"
          className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
        />
        <input
          value={inputData.value}
          onChange={handleInputs}
          type="color"
          className="cursor-pointer h-[40px]"
        />
      </div>
    </div>
  );
};

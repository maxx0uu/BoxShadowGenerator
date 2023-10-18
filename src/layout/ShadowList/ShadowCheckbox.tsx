// Libraries
import { useDispatch, useSelector } from "react-redux";

// Types, functions
import { shadowsStructure, updateCheckbox } from "../../features/shadows";
import { RootState } from "../../store";

// Typing
interface ShadowCheckboxProps {
  name: string;
  shadowId: string;
}

export const ShadowCheckbox = ({ name, shadowId }: ShadowCheckboxProps) => {
  // useDispatch to make actions on dats in redux store
  const dispatch = useDispatch();

  // Select item in the Redux store using use Selector
  const checkboxShadow = useSelector((state: RootState) =>
    state.shadows.find(
      (shadowData: shadowsStructure) => shadowData.id === shadowId
    )
  );
  return (
    <>
      <input
        className="h-4 w-4 border-gray-300 rounded mr-2"
        type="checkbox"
        onChange={() => dispatch(updateCheckbox({ shadowId, name }))}
        checked={checkboxShadow && checkboxShadow[name]}
        id={`checkbox-${name}-${shadowId}`}
      />
      <label
        className="leading-4 mr-5"
        htmlFor={`checkbox-${name}-${shadowId}`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </>
  );
};

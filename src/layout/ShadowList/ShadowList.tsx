// Libraries
import { useDispatch, useSelector } from "react-redux";

// Types, functions
import { addShadow, shadowsStructure } from "../../features/shadows";
import { RootState } from "../../store";

// Components
import { Shadow } from "./Shadow";

export const ShadowList = () => {
  // Call components from the Redux store
  const shadows = useSelector((state: RootState) => state.shadows);
  // useDispatch to make actions on dats in redux store
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="font-bold text-lg">Customize Shadows</p>
        <button
          onClick={() => dispatch(addShadow(undefined))}
          className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-700 text-white"
        >
          Add a shadow
        </button>
      </div>
      <ul>
        {shadows.map((shadow: shadowsStructure, index: number) => {
          return (
            <Shadow
              panelNumber={index + 1}
              shadowsData={shadow}
              key={shadow.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

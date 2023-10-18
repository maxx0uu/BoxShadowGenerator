// Libraries
import { useState, useEffect } from "react";

// Types, functions
import { removeShadow, shadow, shadowsStructure } from "../../features";

// Components
import { ShadowCheckbox, ShadowColorPicker, ShadowRange } from "./";
import { useDispatch } from "react-redux";

// Typing
interface ShadowProps {
  panelNumber: number;
  shadowsData: shadowsStructure;
}

export const Shadow = ({ panelNumber, shadowsData }: ShadowProps) => {
  //
  const dispatch = useDispatch();

  // Make a state to set the shadow tab open or close
  const [toggleShadow, setToggleShadow] = useState(false);

  // Set the first shadow tab as open by default
  useEffect(() => {
    if (panelNumber === 1) [setToggleShadow(true)];
  }, []);

  // Display components according to their props recieve from ShadowProps
  const shadowsInputs = shadowsData.inputs.map(
    (input: shadow, index: number) => {
      if (input.type === "range") {
        return (
          <ShadowRange
            key={index}
            inputData={input}
            shadowId={shadowsData.id}
          />
        );
      } else if (input.type === "color") {
        return (
          <ShadowColorPicker
            key={index}
            inputData={input}
            shadowId={shadowsData.id}
          />
        );
      }
    }
  );

  return (
    <li className="bg-gray-50 border-b border-gray-300">
      <button
        onClick={() => setToggleShadow(!toggleShadow)}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"
      >
        <span>Shadow {panelNumber}</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chevron_right.svg/1024px-Chevron_right.svg.png"
          alt=""
          className="w-5"
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
        />
      </button>
      {toggleShadow && (
        <>
          <div className="flex items-end px-6 pt-4">
            <ShadowCheckbox name={"active"} shadowId={shadowsData.id} />
            <ShadowCheckbox name={"inset"} shadowId={shadowsData.id} />
            <button
              onClick={() => dispatch(removeShadow(shadowsData.id))}
              className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
            >
              Remove
            </button>
          </div>
          <div className="px-6 py-4">{shadowsInputs}</div>
        </>
      )}
    </li>
  );
};

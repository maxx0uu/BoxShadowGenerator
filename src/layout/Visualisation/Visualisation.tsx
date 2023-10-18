import { useSelector } from "react-redux";
import { getBoxShadowValue } from "../../utils/getBoxShadowValue";
import { ModalBtn } from "./Modal/ModalBtn";
import { RootState } from "../../store";

export const Visualisation = () => {
  const shadowValue = useSelector((state: RootState) => state.shadows);
  const boxProperties = useSelector((state: RootState) => state.boxProperties);
  return (
    <div className="flex flex-col p-5 ml-10 lg:ml-28">
      <ModalBtn />
      <div
        className="w-[250px] h-[250px] bg-white rounded-xl mb-20 lg:mb-40"
        style={{
          boxShadow: `${getBoxShadowValue(shadowValue).slice(0, -1)}`,
          borderRadius: `${boxProperties[0].value}px`,
          height: `${boxProperties[1].value}px`,
          width: `${boxProperties[2].value}px`,
          backgroundColor: `${boxProperties[3].value}`,
        }}
      ></div>
    </div>
  );
};

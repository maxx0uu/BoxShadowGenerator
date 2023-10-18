// Libraries
import { useState } from "react";

// Components
import { BoxPanel } from "./BoxPanel";
import { ShadowList } from "./ShadowList/ShadowList";

export const LeftContainer = () => {
  // Make a state to manage the active tab of the app
  const [tabs, setTabs] = useState(0);
  const tabList = [
    { name: "Shadow", component: <ShadowList /> },
    { name: "BoxPanel", component: <BoxPanel /> },
  ];

  return (
    <div className="relative mt-20 w-[600px] h-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-0">
      <div className="flex absolute -translate-y-full -left-[1px]">
        {tabList.map((tab, index) => {
          return (
            <button
              key={index}
              onClick={() => setTabs(index)}
              className="min-w-[125px] py-2 px-3 mr-4 font-bold border-t border-x border-gray-300 bg-slate-50 hover:bg-slate-200 text-slate-700 rounded-t focus:outline-none focus:ring-2 ring-inset focus:ring-blue-300"
            >
              {tab.name}
            </button>
          );
        })}
      </div>
      <div className="h-full overflow-auto">{tabList[tabs].component}</div>
    </div>
  );
};

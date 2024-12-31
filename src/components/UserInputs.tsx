import React from "react";

interface Fprops {
  currentCaption: string;
  timestamp: string;
  runTime: number;
  setCurrentCaption: React.Dispatch<React.SetStateAction<string>>;
  setTimestamp: React.Dispatch<React.SetStateAction<string>>;
  addCaption: () => void;
}

const UserInputs: React.FC<Fprops> = ({
  runTime,
  currentCaption,
  timestamp,
  setCurrentCaption,
  setTimestamp,
  addCaption,
}) => {
  return (
    <div className="w-full mt-2">
      <textarea
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder="Enter caption"
        value={currentCaption}
        onChange={(e) => setCurrentCaption(e.target.value)}
      />
      <div className="flex items-center justify-content-center">
        <div className="relative basis-9/12">
          <input
            type="number"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Timestamp (seconds)"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
          <button
            className="absolute right-1 top-1 rounded bg-sky-500 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => setTimestamp(runTime.toString())}
          >
            Pick Seconds
          </button>
        </div>
        <button
          className="rounded-md basis-3/12 bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
          onClick={addCaption}
        >
          Add Caption
        </button>
      </div>
    </div>
  );
};

export default UserInputs;

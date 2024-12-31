import { useState } from "react";
import { CaptionType } from "./utils/types";
import CaptionList from "./components/CaptionList";
import VedioPlayer from "./components/VedioPlayer";
import UserInputs from "./components/UserInputs";

function VideoCaptionApp() {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [captions, setCaptions] = useState<CaptionType[]>([]);
  const [currentCaption, setCurrentCaption] = useState<string>("");
  const [timestamp, setTimestamp] = useState<string>("");
  const [runTime, setRuntime] = useState<number>(0);
  const [visibleCaption, setVisibleCaption] = useState<string>(""); // To track the visible caption

  // Add caption to the list
  const addCaption = () => {
    if (currentCaption && timestamp) {
      setCaptions([
        ...captions,
        { text: currentCaption, time: parseFloat(timestamp) },
      ]);
      setCurrentCaption("");
      setTimestamp("");
    }
  };

  // Handle progress of the video
  const handleProgress = (progress: { playedSeconds: number }) => {
    const currentTime = progress.playedSeconds;
    setRuntime(Math.floor(currentTime));

    // Find caption for the current time
    const caption = captions.find(
      (c) => currentTime >= c.time && currentTime < c.time + 2 // Show for 2 seconds
    );

    if (caption) {
      setVisibleCaption(caption.text); // Show caption
    } else {
      setVisibleCaption(""); // Hide caption
    }
  };

  return (
    <div className="p-5 max-w-screen-md m-auto">
      <h1 className="text-3xl font-bold my-4 text-center">
        Video Caption Tool
      </h1>

      {/* Input for Video URL */}
      <div className="mb-2">
        <label className="block mb-1 text-sm text-slate-600">Vedio Url</label>
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type="text"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>

      {/* Vedio Player */}
      <VedioPlayer
        videoUrl={videoUrl}
        visibleCaption={visibleCaption}
        handleProgress={handleProgress}
      />

      {/* Input for Captions */}
      <UserInputs
        addCaption={addCaption}
        currentCaption={currentCaption}
        runTime={runTime}
        setCurrentCaption={setCurrentCaption}
        setTimestamp={setTimestamp}
        timestamp={timestamp}
      />

      {/* List Captions */}
      <CaptionList captions={captions} />
    </div>
  );
}

export default VideoCaptionApp;

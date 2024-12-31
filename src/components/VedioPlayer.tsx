import React from 'react'
import ReactPlayer from 'react-player'

interface Fprops {
    videoUrl: string,
    visibleCaption: string,
    handleProgress: (progress: {
        playedSeconds: number;
    }) => void
}

const VedioPlayer: React.FC<Fprops> = ({ videoUrl, handleProgress, visibleCaption }) => {
    return (
        <div className="bg-zinc-950 py-10 rounded-xl max-w-max relative m-auto">
            {/* Video Player */}
            <ReactPlayer
                style={{
                    minWidth: "725px",
                }}
                url={videoUrl}
                controls
                onProgress={handleProgress} // Track video progress
            />
            {!videoUrl
                &&
                <h3 className="text-slate-200 absolute w-full text-center">Please enter a vedio URL.</h3>
            }
            <h3 className="text-center w-full text-slate-200 absolute bottom-3">
                {visibleCaption}
            </h3>
        </div>
    )
}

export default VedioPlayer
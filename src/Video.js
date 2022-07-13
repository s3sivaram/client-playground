import { useEffect, useRef } from "react";

const Video = () => {
  let videoref = useRef();

  useEffect(() => {
    getusermedia();
  }, []);

  function getusermedia() {
    navigator.getUserMedia(
      { video: true },
      (stream) => {
        videoref.current.srcObject = stream;
        console.log(videoref);
      },
      (e) => console.log("error in getmedia", e)
    );
  }

  return (
    <div>
      video
      <video
        ref={videoref}
        style={{ width: "720", height: "560" }}
        controls
      ></video>
    </div>
  );
};

export default Video;

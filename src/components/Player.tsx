import ReactAudioPlayer from "react-audio-player";
import { useAppSelector } from "../app/hooks";
import { selectCurrentRadio } from "../features/radio/radioSlice";

const Player = () => {
  const currentRadio = useAppSelector(selectCurrentRadio);

  return (
    <div>
      {currentRadio && (
        <ReactAudioPlayer src={currentRadio.streams[0].url} autoPlay controls />
      )}
    </div>
  );
};

export default Player;

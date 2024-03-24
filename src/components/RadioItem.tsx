import { useDispatch } from "react-redux";
import { Radio } from "../types";
import { setCurrentRadio } from "../features/radio/radioSlice";
import { Button } from "./ui/button";
import { CardContent, CardTitle } from "./ui/card";

interface RadioItemProps {
  radio: Radio;
}

const RadioItem: React.FC<RadioItemProps> = ({ radio }) => {
  const dispatch = useDispatch();
  const handlePlayRadio = () => {
    dispatch(setCurrentRadio(radio));
  };

  return (
    <div className="glass h-[336px] w-[264px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div>
        <img
          src={radio.logo || `https://via.placeholder.com/150`}
          alt={radio.name}
          className="h-[160px] w-full bg-center bg-cover"
        />
      </div>

      <CardContent>
        <CardTitle className=" mt-6 mb-4 text-center">{radio.name}</CardTitle>
      </CardContent>
      <div className=" flex justify-center">
        <Button onClick={handlePlayRadio}>Play</Button>
      </div>
    </div>
  );
};

export default RadioItem;

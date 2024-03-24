import { Radio } from "../types";
import RadioItem from "./RadioItem";

interface RadioListProps {
  radios: Radio[];
}

const RadioList: React.FC<RadioListProps> = ({ radios }) => {
  return (
    <div className="grid place-items-center gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12">
      {radios.map((radio: Radio) => (
        <RadioItem key={radio.id} radio={radio} />
      ))}
    </div>
  );
};

export default RadioList;

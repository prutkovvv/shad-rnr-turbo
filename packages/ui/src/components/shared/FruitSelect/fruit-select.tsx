import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/Select";

const FruitSelect = () => {
  return (
    <Select defaultValue={{ value: "apple", label: "Apple" }}>
      <SelectTrigger className="w-[250px] mt-4">
        <SelectValue
          className="text-foreground text-sm native:text-lg"
          placeholder="Select a fruit"
        />
      </SelectTrigger>
      <SelectContent className="w-[250px]">
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem label="Apple" value="apple">
            Apple
          </SelectItem>
          <SelectItem label="Banana" value="banana">
            Banana
          </SelectItem>
          <SelectItem label="Blueberry" value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem label="Grapes" value="grapes">
            Grapes
          </SelectItem>
          <SelectItem label="Pineapple" value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { FruitSelect };

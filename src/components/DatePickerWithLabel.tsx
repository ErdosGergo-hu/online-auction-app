import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerWithLabel({
  label,
  selectedDate,
  onDateChange,
}: {
  label: string;
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="block text-sm/6 font-medium text-secondary-font">
        {label}
      </label>
      <DatePicker
        className="w-full rounded-md text-secondary-font bg-container-background border border-[#262626] px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
        selected={selectedDate}
        onChange={onDateChange}
      />
    </div>
  );
}

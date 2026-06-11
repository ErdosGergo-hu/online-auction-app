import { useTranslation } from "react-i18next";

export default function SelectWithLabel({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const { t } = useTranslation();
  return (
    <div>
      <label className="block text-sm/6 font-medium text-secondary-font">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full mt-2 rounded-md text-secondary-font bg-container-background border border-[#262626] px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {t("auction.category." + opt)}
          </option>
        ))}
      </select>
    </div>
  );
}

interface SelectProps {
  className: string;
  spanText: string;
  options: string[];
}

export default function Select({ className, spanText, options }: SelectProps) {
  return (
    <>
      <span className="filter-sort__span">{spanText}</span>
      <select className={className} name="filter-select">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </>
  );
}

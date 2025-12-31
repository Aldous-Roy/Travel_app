import Image from "next/image";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        className={`flexCenter gap-3 ${variant} rounded-full border `}
      >
        {icon && (
          <Image
            src={icon}
            alt="button icon"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        )}
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    </div>
  );
};

export default Button;

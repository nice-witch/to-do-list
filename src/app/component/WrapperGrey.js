import Image from "next/image";

export default function WrapperGrey({
  width,
  title,
  nameIcon,
  children,
  eventClickIcon,
}) {
  return (
    <div
      className={`flex flex-col ${width} h-full px-5 py-3.5 bg-neutral-100 rounded-xl`}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[21px] font-medium">{title}</h2>
        {nameIcon && (
          <Image
            src={`/${nameIcon}.svg`}
            alt={`${nameIcon} icon`}
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => eventClickIcon()}
          />
        )}
      </div>
      {children}
    </div>
  );
}

import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/vetech logo/vetech logo.png"
        alt="VETECH NDT & Metallurgical Services"
        width={380}
        height={140}
        priority
        className="h-14 w-auto object-contain"
      />
    </div>
  );
}

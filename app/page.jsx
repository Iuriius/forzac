import Image from "next/image";
import hero from "@/public/hero.jpg";

Image;
export default function Home() {
  return (
    <div>
      <div className="hero">
        <Image
          src={hero}
          alt="hero"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-blue-800  h-screen text-white text-9xl font-extrabold flex items-center justify-center text-center">
        <p>
          I will be here soon 😎
        </p>
      </div>
    </>
  );
}

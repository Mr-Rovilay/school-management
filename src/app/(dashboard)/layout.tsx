import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex h-screen">
    {/* left */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
      <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start p-3">
        <Image src="/logo.png" alt="logo" width={30} height={30} loading="lazy"/>
        <span className="hidden lg:block">Developer School</span>
      </Link>
      <Menu/>
    </div>
    {/* right */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]w-[14%] bg-[#f7f8fa] overflow-scroll">
      <Navbar/>
      {children}
    </div>
  
  </div>;
}

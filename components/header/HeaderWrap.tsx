"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrap() {
  const pathname = usePathname();

  return <>{pathname.includes("login") || <Header />}</>;
}

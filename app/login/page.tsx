import GoogleLoginButton from "@/components/login/GoogleLoginButton";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-main-bg-color">
      <Image
        src="/images/logo.png"
        width="165"
        height="45"
        alt="빌린지 로고"
        priority
      />
      <p className="text-white text-center mt-2 text-xl tracking-tighter">
        나만의 창의적인 챌린지로
        <br />
        새로운 수익을 창출해보세요
      </p>
      <div className="flex flex-col justify-center items-center absolute bottom-12 left-0 w-full px-8">
        <GoogleLoginButton />
        <div className="flex justify-center flex-wrap text-[#6F7B82] text-sm tracking-tighter mt-7 leading-7">
          <Link
            href="/"
            className="flex shrink-0 items-center after:block after:w-px after:h-4 after:bg-[#6F7B82] after:ml-3 after:mr-3"
          >
            사업자정보 확인
          </Link>
          <Link
            href="/"
            className="flex shrink-0 items-center after:block after:w-px after:h-4 after:bg-[#6F7B82] after:ml-3 after:mr-3"
          >
            이용약관
          </Link>
          <Link href="/" className="flex shrink-0 items-center">
            개인정보처리방침
          </Link>
          <br />
          <Link
            href="/"
            className="flex shrink-0 items-center after:block after:w-px after:h-4 after:bg-[#6F7B82] after:ml-3 after:mr-3"
          >
            서비스소개
          </Link>
          <Link href="/">FAQ</Link>
        </div>
      </div>
    </div>
  );
}

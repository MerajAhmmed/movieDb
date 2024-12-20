import Image from "next/image";

export default function SocialShareBtn() {
  return (
    <>
      <button className="text-center cursor-pointer">
        <Image
          src={`http://facebook.com/favicon.ico`}
          alt="Facebook"
          className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          width={100}
          height={100}
        />
        <p className="text-sm">Facebook</p>
      </button>

      <button className="text-center cursor-pointer">
        <Image
          src={`http://x.com/favicon.ico`}
          alt="Facebook"
          className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          width={100}
          height={100}
        />
        <p className="text-sm">X</p>
      </button>

      <button className="text-center cursor-pointer">
        <Image
          src={`http://linkedin.com/favicon.ico`}
          alt="Facebook"
          className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
          width={100}
          height={100}
        />
        <p className="text-sm">Linkedin</p>
      </button>
    </>
  );
}

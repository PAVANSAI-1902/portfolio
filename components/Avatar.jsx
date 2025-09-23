import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={800}
        height={800}
        className="w-full h-full object-contain max-w-full max-h-full"
        priority
      />
    </div>
  );
};

export default Avatar;

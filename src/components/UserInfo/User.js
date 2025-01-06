import Image from "next/image";

function User({ data }) {
  const { name, email, image } = data;
  return (
    <div className="flex gap-4 items-center justify-center">
      <Image
        src={image}
        alt={`${name}'s avatar`}
        width={100}
        height={100}
        quality={100}
        className="rounded-full"
      />
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-[14px] italic opacity-70">{email}</p>
      </div>
    </div>
  );
}

export default User;

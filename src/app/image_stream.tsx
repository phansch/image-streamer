'use client';

import Image from "next/image";

export default function ImageStream() {

  return (
    <div>
      <Image
        src="https://placehold.co/800x600/EEE/31343C/png"
        alt="streamed image"
        width={800}
        height={600}
        className="rounded-md outline outline-2 outline-offset-2 outline-violet-500 mb-3"
      />
    </div>
  );
}

import Image from 'next/image';

export default function FooterSection() {
  return (
    <div className="bg-paper relative h-screen w-screen">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image src="/sky.png" fill alt="footer" className="object-cover" />
        <div className="absolute bottom-0 left-0 h-full w-full">
          <Image
            src="/footer-cargo.png"
            fill
            alt="footer"
            className="object-cover md:object-fill"
          />
        </div>
      </div>
    </div>
  );
}

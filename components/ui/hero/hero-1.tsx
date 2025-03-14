import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { stegaClean } from "next-sanity";
import PortableTextRenderer from "@/components/portable-text-renderer";
import { PAGE_QUERYResult } from "@/sanity.types";

type Hero1Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "hero-1" }
>;

export default function Hero1({
  tagLine,
  title,
  body,
  image,
  links,
}: Hero1Props) {
  return (
    <div className="relative w-full h-screen dark:bg-background pt-20 lg:pt-40 -mt-20">
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-10">      
          {image && image.asset?._id && (
            <div className="relative w-full h-full h-screen lg:h-full">
            <Image
              className="absolute inset-0 object-cover w-full h-full opacity-0 animate-fade-up [animation-delay:500ms]"
              src={urlFor(image).url()}
              alt={image.alt || ""}
              layout="fill"
              placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
              blurDataURL={image?.asset?.metadata?.lqip || ""}
              quality={100}
            />
            </div>
          )}
        <div className="absolute inset-0 flex flex-col justify-center p-4 lg:relative md:pt-10 pl-20 md:pl-50 lg:pl-20 z-1">
          {tagLine && (
            <h1 className="leading-[0] font-sans animate-fade-up [animation-delay:100ms] opacity-0">
              <span className="text-base font-semibold">{tagLine}</span>
            </h1>
          )}
          {title && (
            <h2 className="mt-6 font-bold leading-[1.1] text-4xl md:text-5xl lg:text-6xl animate-fade-up [animation-delay:200ms] opacity-0 text-white">
              {title}
            </h2>
          )}
          {body && (
            <div className="text-lg mt-6 animate-fade-up [animation-delay:300ms] opacity-0 text-white">
              <PortableTextRenderer value={body} />
            </div>
          )}
          {links && links.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:400ms] opacity-0">
              {links.map((link) => (
                <Button
                  key={link.title}
                  variant={stegaClean(link?.buttonVariant)}
                  asChild
                >
                  <Link
                    href={link.href as string}
                    target={link.target ? "_blank" : undefined}
                    rel={link.target ? "noopener" : undefined}
                  >
                    {link.title}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-bl from-[#01030f] to-[#313233] via-transparent via-300% xl:via-100%"></div>

    </div>
  );
}

import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface CertificateCardProps {
  title: string;
  issuer: string;
  imageSource: string;
}

export default function CertificateCard({
  title,
  imageSource,
  issuer,
}: CertificateCardProps) {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-md p-4",
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15",
      )}
    >
      <AspectRatio ratio={16 / 9} className="mb-3">
        <img
          src={imageSource}
          alt={title}
          className="h-full w-full rounded-lg object-contain"
        />
      </AspectRatio>
      <div className="flex flex-col gap-1">
        <figcaption className="text-xs font-medium dark:text-white">
          {title}
        </figcaption>
        <p className="text-xs font-medium dark:text-white/40">{issuer}</p>
      </div>
    </figure>
  );
}

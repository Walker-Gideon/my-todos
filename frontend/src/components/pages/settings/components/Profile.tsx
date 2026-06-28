import { MdAddPhotoAlternate } from "react-icons/md";

import Span from "@/components/ui/Span";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

import { useUserProfile } from "@/components/hooks/useUserProfile";

interface ProfileProps {
  primary?: boolean;
  showBtn?: boolean;
  preview?: string | null;
  onImageChange?: (file: File) => void;
}

export default function Profile({
  primary = true,
  showBtn = false,
  preview,
  onImageChange,
}: ProfileProps) {
  const { name, capName, email } = useUserProfile();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
    onImageChange?.(file);
  };

  return (
    <Container
      variant="div"
      className={`my-8 flex md:flex-row items-center gap-2 md:gap-4 ${primary ? "flex-col" : "flex-row"}`}
    >
      <Container variant="div" className={"relative flex shrink-0"}>
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className={`rounded-full border-2 border-white object-cover ${primary ? "w-30 h-30 text-3xl" : "w-18 h-18 text-2xl"}`}
          />
        ) : (
          <Span
            className={`rounded-full bg-dark flex items-center justify-center text-white font-bold  ${primary ? "w-30 h-30 text-3xl" : "w-18 h-18 text-2xl"}`}
          >
            {capName}
          </Span>
        )}

        {showBtn && (
          <label
            htmlFor="profile-upload"
            className={
              "absolute right-0 bottom-0 flex items-center justify-center cursor-pointer h-7 w-7 rounded-full bg-btn-col border-2 border-white shadow-sm hover:opacity-90 transition-opacity"
            }
            title={preview ? "Change Photo" : "Add Photo"}
          >
            <MdAddPhotoAlternate size={16} className="text-white" />
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        )}
      </Container>
      <Container
        variant="div"
        className={`flex flex-col md:items-start md:justify-start ${primary ? "items-center justify-center" : "items-start justify-start"}`}
      >
        <Paragraph
          className={`font-semibold leading-none truncate ${primary ? "text-2xl" : "text-xl"}`}
        >
          {name}
        </Paragraph>
        <Paragraph className={"leading-none truncate"}>{email}</Paragraph>
      </Container>
    </Container>
  );
}

import { FileText } from "lucide-react";
import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { LuHouse } from "react-icons/lu";
import { SiGmail } from "react-icons/si";

export interface NavItem {
  name: string;
  url: string;
  icon: IconType;
}

export const navigation: NavItem[] = [
  {
    name: "Home",
    url: "#hero",
    icon: LuHouse,
  },

  {
    name: "Resume",
    url: "resume-johncedricpanti.pdf",
    icon: FileText,
  },
];

export const externalLinks: NavItem[] = [
  {
    name: "GitHub",
    url: "https://github.com/Cedrickkk",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/cedric-panti",
    icon: GrLinkedin,
  },
  {
    name: "Gmail",
    url: "mailto:inhog.cedrick@gmail.com",
    icon: SiGmail,
  },
];

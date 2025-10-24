import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import type { IconType } from "react-icons";
import { LuHouse } from "react-icons/lu";
import { FileText } from "lucide-react";
import { GrLinkedin } from "react-icons/gr";

export interface NavItem {
  name: string;
  url: string;
  icon: IconType;
}

export const homeNavItems: NavItem[] = [
  {
    name: "Home",
    url: "#hero",
    icon: LuHouse,
  },

  {
    name: "Resume",
    url: "/resume.pdf",
    icon: FileText,
  },
];

export const externalNavItems: NavItem[] = [
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

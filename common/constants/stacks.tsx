import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm } from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiLaravel,
  SiPhp,
  SiRedux,
  SiVuedotjs,
  SiFirebase,
  SiReactrouter,
  SiEthers,
  SiThreedotjs,
  SiMysql,
  SiPostgresql,
  SiNpm,
  SiFigma,
  SiLaragon,
  SiPostman,
  SiSupabase,
  SiShadcnui,
  SiDocker,
  SiRadixui,
} from "react-icons/si";

export type SkillProps = {
  [key: string]: JSX.Element;
};

const iconSize = 22;

export const STACKS: SkillProps = {
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className="text-violet-600" />
  ),
  "Tailwind CSS": <SiTailwindcss size={iconSize} className="text-cyan-400" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  "Vue.js": <SiVuedotjs size={iconSize} className="text-green-400" />,
  "React.js": <SiReact size={iconSize} className="text-cyan-400" />,
  "React Router": <SiReactrouter size={iconSize} className="text-red-500" />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  "Framer Motion": (
    <TbBrandFramerMotion size={iconSize} className="text-fuchsia-500" />
  ),
  Redux: <SiRedux size={iconSize} className="text-violet-500" />,
  "Next.js": <SiNextdotjs size={iconSize} />,
  "Express.js": <SiExpress size={iconSize} />,
  PHP: <SiPhp size={iconSize} className="text-indigo-400" />,
  Laravel: <SiLaravel size={iconSize} className="text-red-600" />,
  PostgreSQL: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  MySQL: <SiMysql size={iconSize} className="text-blue-400" />,
  Firebase: <SiFirebase size={iconSize} className="text-yellow-500" />,
  Supabase: <SiSupabase size={iconSize} className="text-emerald-500" />,
  Docker: <SiDocker size={iconSize} className="text-blue-500" />,
  NPM: <FaNpm size={iconSize} className="text-red-500" />,
  Figma: <SiFigma size={iconSize} className="text-pink-500" />,
  Laragon: <SiLaragon size={iconSize} className="text-blue-500" />,
  Postman: <SiPostman size={iconSize} className="text-orange-500" />,
  "Shadcn UI": <SiShadcnui size={iconSize} className="text-white" />,
  "Radix UI": <SiRadixui size={iconSize} className="text-purple-700" />,
  "Three.js": <SiThreedotjs size={iconSize} className="text-white" />,
  Ethers: <SiEthers size={iconSize} className="text-indigo-500" />,
  Github: <SiGithub size={iconSize} />,
  Framer: <SiFramer size={iconSize} className="text-white" />,
};

import Link from "next/link";
import {FaGithub, FaLinkedin, FaPaperclip} from "react-icons/fa";

const icons = [
  { icon: <FaGithub />, href: "https://www.github.com/murfasa",},
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/murfasa/",},
  { icon: <FaPaperclip />, href: "https://docs.google.com/document/d/1DmOtYtMghmHFQPKvn0mJwlhHE_PgHeAV01EvEzpiP_k/edit?usp=sharing"},
];

interface SocialsProps {
  styles: string;
}

const Socials = ({ styles }: SocialsProps) => {
  return (
    <>
      {
        icons.map((icon, index) => {
          return (
            <Link key={index} href={icon.href} target="_blank" className={styles}>
              {icon.icon}
            </Link>
          )
        })
      }
    </>
  );
};

export default Socials;
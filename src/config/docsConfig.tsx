import { AiFillEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { SiUpwork } from "react-icons/si";
import { SlSocialFacebook, SlSocialGithub, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
export interface Company {
    _id: string;
    title: string;
    LinkDir: string;
}

export interface MyWorksProps {
    id: number;
    title: string;
    des: string;
    link: string;
    image: string;
}
export interface MySocialsProps {
    id: number;
    title: string;
    des: string;
    link: string;
    image?: string;
    icon?: React.ReactNode;
}
export interface MedicalProps {
    Icon: React.ReactNode;
    Title: string;
    Des: string
}

export interface docsConfigProps {
    SocialIcons: React.ReactNode[],
    MyWorks: MyWorksProps[],
    MySocials: MySocialsProps[],
}
export const docsConfig: docsConfigProps = {
    SocialIcons: [
        <SlSocialFacebook key={0} size={23} />,
        <SlSocialLinkedin key={1} size={20} />,
        <SlSocialGithub key={2} size={20} />,
        <SlSocialTwitter key={3} size={20} />
    ],
    MyWorks: [
        {
            id: 1,
            title: 'Architectural Studio Website',
            des: 'Proin fauÑbus lania purus et porttitor. Ouisque plaat falisis QiL utfgiat diam vtibulum id.Don et pretium tortor.PQltque finibus, nisi va laort intdum-',
            link: '',
            image: '/Images/portfolio/01.png'
        },
        {
            id: 2,
            title: 'Architectural Studio Website',
            des: 'Proin fauÑbus lania purus et porttitor. Ouisque plaat falisis QiL utfgiat diam vtibulum id.Don et pretium tortor.PQltque finibus, nisi va laort intdum-',
            link: '',
            image: '/Images/portfolio/02.png'
        },
        {
            id: 3,
            title: 'Architectural Studio Website',
            des: 'Proin fauÑbus lania purus et porttitor. Ouisque plaat falisis QiL utfgiat diam vtibulum id.Don et pretium tortor.PQltque finibus, nisi va laort intdum-',
            link: '',
            image: '/Images/portfolio/03.png'
        },
    ],
    MySocials: [
        {
            id: 1,
            title: 'Architectural Studio Website',
            des: 'My Linkdin',
            link: '',
            image: '/Images/Social/linkdin.png',
        },
        {
            id: 2,
            title: 'FaceBook',
            des: 'My Linkdin',
            link: '',
            // image: '/Images/portfolio/02.png',
            icon: <FaFacebookF  size={25} />
        },
        {
            id: 3,
            title: 'LinkdIn',
            des: 'My Linkdin',
            link: '',
            // image: '/Images/portfolio/03.png',
            icon: <IoLogoLinkedin size={30} />
        },
        {
            id: 4,
            title: 'Github',
            des: 'My Linkdin',
            link: '',
            // image: '/Images/portfolio/03.png',
            icon: <BsGithub size={30} />
        },
        {
            id: 5,
            title: 'UpWork',
            des: 'My Linkdin',
            link: '',
            // image: '/Images/portfolio/03.png',
            icon: <SiUpwork size={30} />
        },
        {
            id: 6,
            title: 'FaceBook',
            des: 'My Linkdin',
            link: '',
            // image: '/Images/portfolio/03.png',
            icon: <FaFacebookF size={25} />
        },
    ],
};

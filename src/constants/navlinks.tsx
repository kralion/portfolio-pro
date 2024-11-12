import { IconBriefcase2, IconUserPentagon } from "@tabler/icons-react";

export const navlinks = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/about",
    label: "About",
    icon: AboutIcon,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: ProjectsIcon,
  },
  {
    href: "/resume",
    label: "Resume",
    icon: ResumeIcon,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: ContactIcon,
  },
];

function HomeIcon() {
  return (
    <>
      <style>
        {`
          @keyframes airplay {
            0% {
              transform: translateY(1px);
            }
            to {
              transform: translateY(-1px);
            }
          }
        `}
      </style>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          className="dark:fill-white fill-neutral-500"
          d="M8.165 16.75a.75.75 0 000-1.5v1.5zm7.603-1.5a.75.75 0 000 1.5v-1.5zM8 6.75h8v-1.5H8v1.5zM18.25 9v4h1.5V9h-1.5zm-12.5 4V9h-1.5v4h1.5zm2.415 2.25H8v1.5h.165v-1.5zm7.835 0h-.232v1.5H16v-1.5zM4.25 13A3.75 3.75 0 008 16.75v-1.5A2.25 2.25 0 015.75 13h-1.5zm14 0A2.25 2.25 0 0116 15.25v1.5A3.75 3.75 0 0019.75 13h-1.5zM16 6.75A2.25 2.25 0 0118.25 9h1.5A3.75 3.75 0 0016 5.25v1.5zm-8-1.5A3.75 3.75 0 004.25 9h1.5A2.25 2.25 0 018 6.75v-1.5z"
        />
        <path
          className="fill-sky-500"
          fillRule="evenodd"
          d="M10.412 14.86c.706-1.112 2.47-1.112 3.176 0l1.058 1.666c.706 1.111-.176 2.5-1.588 2.5h-2.117c-1.41 0-2.293-1.389-1.587-2.5l1.058-1.667zm2.117.555c-.235-.37-.823-.37-1.058 0l-1.059 1.667c-.235.37.06.833.53.833h2.117c.47 0 .764-.463.529-.833l-1.059-1.667z"
          clipRule="evenodd"
          style={{
            animation: "airplay .8s ease-in infinite alternate both",
          }}
        />
      </svg>
    </>
  );
}

function ProjectsIcon() {
  return (
    <>
      <style>
        {`
          @keyframes gift-open {
            0% {
              transform: translateY(0);
            }
            to {
              transform: translateY(-3px);
            }
          }
        `}
      </style>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          className="dark:stroke-white stroke-neutral-500"
          strokeWidth="1.5"
          d="M6.921 12.535h12v4a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4z"
        />
        <path
          className="fill-sky-500"
          fillRule="evenodd"
          d="M10.963 6.487a.717.717 0 011.009.102c.147.18.337.578.428.984.044.2.058.373.044.502-.014.133-.05.165-.051.165 0 0-.038.03-.172.017a1.618 1.618 0 01-.483-.144c-.38-.17-.73-.436-.878-.617a.717.717 0 01.103-1.009zm1.676-.442a1.578 1.578 0 00-2.445 1.996c.211.26.576.538.962.744H8.921a2.75 2.75 0 00-2.75 2.75v1.75h13.5v-1.75a2.75 2.75 0 00-2.75-2.75h-2.235c.386-.206.75-.485.963-.744a1.578 1.578 0 00-2.446-1.996 2.492 2.492 0 00-.282.45 2.497 2.497 0 00-.282-.45zm1.231.544a.717.717 0 011.112.907c-.147.18-.498.446-.878.617a1.619 1.619 0 01-.483.144c-.134.013-.172-.017-.172-.017s-.037-.032-.051-.165c-.014-.13 0-.302.044-.502.091-.406.281-.803.428-.984zm4.301 4.946v.25h-10.5v-.25c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25z"
          clipRule="evenodd"
          style={{
            animation:
              "gift-open 1s cubic-bezier(0,.32,.45,1.24) infinite alternate both",
          }}
        />
      </svg>
    </>
  );
}

function AboutIcon() {
  return (
    <>
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotateZ(0);
            }
            to {
              transform: rotateZ(90deg);
            }
          }
        `}
      </style>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <g
          style={{
            animation:
              "rotate 3s cubic-bezier(.7,-.03,.43,.72) both infinite alternate-reverse",
            transformOrigin: "center center",
          }}
        >
          <path
            className="dark:stroke-white stroke-neutral-500"
            strokeWidth="1.5"
            d="M12 20a8 8 0 100-16 8 8 0 000 16z"
          />
          <path
            className="fill-sky-500"
            fillRule="evenodd"
            d="M14.246 9.033l-.516 3.97-3.18 2.431a.5.5 0 01-.8-.461l.516-3.97 3.18-2.431a.5.5 0 01.8.461zM12 13a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    </>
  );
}

function ContactIcon() {
  return (
    <>
      <style>
        {`
          .send {
            animation: send 2s cubic-bezier(1, -0.47, 0.01, 1.37) infinite both;
          }
          @keyframes send {
            0% {
              transform: translateY(0) translateX(0);
            }
            100% {
              transform: translateY(-20px) translateX(20px);
            }
          }
          @keyframes open {
            0% {
              transform: translateX(10px) scale(0);
              transform-origin: 50% 100%;
            }
            to {
              transform: scale(1);
              transform-origin: 50% 100%;
            }
          }
        `}
      </style>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <rect
          width="12"
          height="10"
          x="6"
          y="8.804"
          className="dark:stroke-white stroke-neutral-500"
          strokeWidth="1.5"
          rx="2"
        />
        <path
          fill="#fff"
          stroke="#265BFF"
          strokeWidth="1.5"
          d="M9 6.196a1 1 0 011-1h4a1 1 0 011 1v5.082a1 1 0 01-.37.777l-2.006 1.628a1 1 0 01-1.263-.002l-1.993-1.626A1 1 0 019 11.28V6.196z"
          style={{
            animation: "open 2s cubic-bezier(.49,.39,.35,1.06) both infinite",
          }}
        />
        <path
          className="dark:stroke-white stroke-neutral-500"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8.465 11.413l3.573 2.783 3.497-2.783"
        />
      </svg>
    </>
  );
}
function ResumeIcon() {
  return (
    <>
      <style>
        {`
          .user-1 {
            animation: user-1 1s cubic-bezier(0.83, -0.07, 0, 1.04) both infinite alternate-reverse;
          }
          @keyframes user-1 {
            0% {
              transform: translateY(0) translateX(0);
            }
            100% {
              transform: translateY(-1px) translateX(-2px);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="user-1 stroke-sky-500 "
          cx="12"
          cy="8.245"
          r="2.5"
          stroke="#265BFF"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="15.926"
          className="dark:stroke-white stroke-neutral-500"
          strokeWidth="1.5"
          rx="5"
          ry="2.329"
        />
      </svg>
    </>
  );
}

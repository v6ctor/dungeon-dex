import Link from "next/link";

export default function SideMenu() {
  return (
    <aside className="pl-4 pt-10 pr-4">
      <ul className="menu bg-base-100 rounded-box justify-center items-center">
        <li>
          <Link
            className="tooltip tooltip-right tooltip-warning p-2 hover:shadow-none hover:bg-base-100 [--tooltip-tail:none] [--tooltip-border-radius:0px] group"
            data-tip="Home"
            href="/home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-colors duration-200 group-hover:stroke-white active:shadow-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            className="tooltip tooltip-right tooltip-warning hover:shadow-none hover:bg-base-100 group"
            data-tip="Search"
            href="/search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-colors duration-200 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            className="tooltip tooltip-right tooltip-warning hover:shadow-none hover:bg-base-100 group"
            data-tip="Trending"
            href="/collection"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-colors duration-200 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="/collection"
            className="tooltip tooltip-right tooltip-warning p-2 hover:shadow-none focus:outline-none hover:bg-base-100 group"
            data-tip="Collection"
          >
            <svg
              className="transition-colors duration-200 group-hover:stroke-white"
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="gray"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <rect height="11.5" width="8.25" y="2.75" x="1.75" />
              <path d="m10 3.75 4.25 2-4.25 7.5" />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            className="tooltip tooltip-right tooltip-warning hover:shadow-none text-[#808080] hover:bg-base-100 group hover:text-white"
            data-tip="News"
            href="/news"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-colors duration-200 stroke-current"
            >
              <g clipPath="url(#clip0_429_11031)">
                <path
                  d="M3 4V18C3 19.1046 3.89543 20 5 20H17H19C20.1046 20 21 19.1046 21 18V8H17"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 4H17V18C17 19.1046 17.8954 20 19 20V20"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 8L7 8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 12L9 12"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_429_11031">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

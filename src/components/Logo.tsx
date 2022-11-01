const Logo = () => {
  return (
    <div className={"flex cursor-pointer items-center space-x-2"}>
      <svg
        width="47"
        height="47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M46.543 46.4033H.3838L15.0709.6641h16.1556L46.543 46.4033z"
          fill="url(#lazer-gradient)"
        ></path>
        <defs>
          <linearGradient
            id="lazer-gradient"
            x1="14.184"
            y1="-2.04"
            x2="53.8496"
            y2="46.4033"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DE2BB5"></stop>
            <stop offset=".2698" stopColor="#D720FB"></stop>
            <stop offset=".5998" stopColor="#EC4042"></stop>
            <stop offset="1" stopColor="#DB27CD"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div className={"lazersea-logo"}>LazerSea</div>
    </div>
  );
};

export default Logo;

const SvgController = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="rgb(255, 70, 85)"
    {...props}>
    <path
      fill="rgb(255, 70, 85)"
      fillRule="evenodd"
      d="M29.97 16.934c.02-.309.03-.62.03-.934 0-7.732-6.268-14-14-14S2 8.268 2 16c0 .335.012.666.035.995L16 5.294l13.968 11.64Zm-1.387 5.212L16 11.47 3.437 22.186a14.048 14.048 0 0 0 3.193 4.216l9.373-7.931 9.54 7.773a14.046 14.046 0 0 0 3.04-4.098Zm-7.322 6.832-5.258-4.33-5.26 4.331A13.96 13.96 0 0 0 16 30c1.86 0 3.637-.363 5.261-1.022Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgController;

import { useState } from "react";

const Profile = () => {
  const [youPay, setYouPay] = useState("");
  const [youReceive, setYouReceive] = useState("");

  return (
    <div className="flex xl:h-[100vh] w-full xl:px-0 lg:px-48 md:px-32 items-center justify-center bg-[#100A24]">
      <div className="grid xl:grid-cols-[305px_511px_305px] grid-cols-1 gap-4 xl:py-0 py-32 md:mx-0 mx-4 items-center bg-radial-gradient-custom">
        <div className="h-[477px] rounded-sm border border-[#FFFFFF13]">
          <div className="flex flex-row items-center justify-between p-4 border-b-[0.5px] border-gray-800">
            <h2 className="text-[18px] text-gray-50 font-Jost font-semibold tracking-wide">
              Holdings
            </h2>
            <div className="flex flex-col items-end">
              <span className="text-[24px] font-Jost text-gray-50 font-semibold tracking-wide">
                $1,125
              </span>
              <p className="text-[14px] font-IBM text-[#FFFFFF80] tracking-wide">
                Estimated Value
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between p-4 border-b-[0.5px] border-gray-800">
            <div className="flex flex-row">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="21" height="21" fill="url(#pattern0_1_39)" />
                <defs>
                  <pattern
                    id="pattern0_1_39"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1_39"
                      transform="scale(0.0078125)"
                    />
                  </pattern>
                  <image
                    id="image0_1_39"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <h2 className="text-[18px] text-gray-50 mx-2 font-Jost font-normal tracking-wide uppercase">
                ETE
              </h2>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[24px] font-Jost text-gray-50 font-semibold tracking-wide">
                0.3
              </span>
              <p className="text-[14px] font-IBM text-gray-50 tracking-wide">
                $672.32
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between p-4 border-b-[0.5px] border-gray-800">
            <div className="flex flex-row">
              <svg
                width="20"
                height="20"
                viewBox="0 0 51 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.9936 0.777463C26.8257 0.537428 26.6023 0.341399 26.3422 0.206041C26.0822 0.0706834 25.7933 0 25.5 0C25.2067 0 24.9178 0.0706834 24.6578 0.206041C24.3977 0.341399 24.1743 0.537428 24.0064 0.777463L12.5023 17.1835L3.111 7.80603C2.85626 7.55112 2.53142 7.37744 2.17767 7.30702C1.82392 7.2366 1.45718 7.27261 1.12396 7.41048C0.790734 7.54835 0.506026 7.78188 0.305929 8.08145C0.105832 8.38103 -0.000642471 8.73316 2.91666e-06 9.09321V32.7278C2.91666e-06 34.6565 0.767603 36.5062 2.13394 37.87C3.50028 39.2338 5.35342 40 7.28572 40H43.7143C45.6466 40 47.4997 39.2338 48.8661 37.87C50.2324 36.5062 51 34.6565 51 32.7278V9.09321C51.0006 8.73316 50.8942 8.38103 50.6941 8.08145C50.494 7.78188 50.2093 7.54835 49.876 7.41048C49.5428 7.27261 49.1761 7.2366 48.8223 7.30702C48.4686 7.37744 48.1437 7.55112 47.889 7.80603L38.4977 17.1835L26.9936 0.777463Z"
                  fill="white"
                />
              </svg>
              <h2 className="text-[18px] text-gray-50 mx-2 font-Jost font-normal tracking-wide uppercase">
                KNG
              </h2>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[24px] font-Jost text-gray-50 font-semibold tracking-wide">
                999.400
              </span>
              <p className="text-[14px] font-IBM text-gray-50 tracking-wide">
                $153.20
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between p-4 border-b-[0.5px] border-gray-800">
            <div className="flex flex-row">
              <div className="flex items-center justify-center w-[25px] h-[25px] bg-[#FFFFFF33] rounded-full opacity-85">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.17235 12.5061C4.48816 10.743 5.2075 9.79504 5.40049 9.56469V9.55583C5.48822 9.44951 5.56717 9.36978 5.64612 9.2989C5.62858 9.29004 5.61103 9.28118 5.59349 9.27232C5.15487 9.07741 4.6022 8.82934 3.95304 8.75846C3.2951 8.68758 2.63717 8.81162 1.95291 9.1217C1.46166 9.3432 1.06689 9.72416 0.786175 10.2469V10.238C0.654588 10.4595 0.523001 10.7342 0.400187 11.0443C0.286145 11.3278 0.215965 11.6024 0.16333 11.8416L0.180875 11.9391C0.83881 15.3058 3.25124 18.1054 6.50583 19.1951C3.78636 17.4675 3.83899 14.3489 4.17235 12.5061Z"
                    fill="white"
                  />
                  <path
                    d="M18.0593 5.9408C18.0593 6.19773 18.0505 6.45466 18.0242 6.72045C17.6294 10.5035 14.2783 13.2412 10.5237 12.8513C8.51481 12.6387 6.80418 11.5667 5.69885 10.034C5.46199 10.3529 4.93565 11.1946 4.69002 12.6033C4.44439 13.9677 4.33035 16.2889 5.81289 17.9368C5.81289 17.9368 5.81289 17.9368 5.82167 17.9456C5.98834 18.1317 6.18134 18.3089 6.39188 18.4772C6.65505 18.6987 6.94454 18.9202 7.2779 19.1328C7.55861 19.31 7.83056 19.4607 8.08496 19.5847C8.22532 19.6024 8.36568 19.629 8.51481 19.6378C13.7344 20.1871 18.4014 16.3598 18.9541 11.0971C19.1295 9.25431 18.7961 7.49124 18.0593 5.9408Z"
                    fill="white"
                  />
                  <path
                    d="M12.2344 7.84578C11.9274 7.67745 10.6905 6.96868 10.2431 6.33078C10.1027 6.08271 10.0676 5.86122 10.0238 5.59543V5.60429C10.0238 5.57771 10.015 5.55999 10.015 5.53341C10.0062 5.47139 9.99744 5.40937 9.98867 5.3385C9.73427 4.18674 8.44471 3.32735 8.44471 3.32735H8.49735C8.46226 3.30963 8.44471 3.30077 8.44471 3.30077L8.45349 3.29191L10.1378 1.78577C9.30442 1.6263 8.36576 1.90095 7.69905 2.1756C8.03241 1.28077 8.97984 0.625153 9.19915 0.483398C4.52342 0.625153 0.549491 4.2399 0.0494606 9.07728C-0.00317423 9.62658 -0.0119467 10.1582 0.0143707 10.6897C0.286317 9.86579 0.786348 9.0507 1.725 8.62543C4.05848 7.56227 5.58489 8.78491 6.40073 9.0064C6.42705 9.01526 6.45336 9.02412 6.47091 9.03298C6.97094 9.16587 7.63765 9.65315 9.14651 9.87465C11.7519 10.2645 12.5853 8.74947 12.6555 8.30649C12.7169 7.96982 12.3836 7.87236 12.2344 7.84578ZM8.04995 5.01955L8.0675 4.99297C8.20786 5.09043 8.39208 5.23218 8.56753 5.44481C8.78684 5.71946 8.90088 5.98525 8.96229 6.16245V6.17131C7.40956 5.90551 7.94468 5.15244 8.04995 5.01955Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 className="text-[18px] text-gray-50 mx-2 font-Jost font-normal tracking-wide uppercase">
                PEPE
              </h2>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[24px] font-Jost text-gray-50 font-semibold tracking-wide">
                124,512,484
              </span>
              <p className="text-[14px] font-IBM text-gray-50 tracking-wide">
                $72.32
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 py-4 h-[477px] border border-[#FFFFFF13] rounded-sm">
          <div className="flex flex-row w-full mx-2 mb-2 items-center justify-between">
            <div className="flex items-center justify-center">
              <svg
                width="26"
                height="20"
                viewBox="0 0 51 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.9936 0.777463C26.8257 0.537428 26.6023 0.341399 26.3422 0.206041C26.0822 0.0706834 25.7933 0 25.5 0C25.2067 0 24.9178 0.0706834 24.6578 0.206041C24.3977 0.341399 24.1743 0.537428 24.0064 0.777463L12.5023 17.1835L3.111 7.80603C2.85626 7.55112 2.53142 7.37744 2.17767 7.30702C1.82392 7.2366 1.45718 7.27261 1.12396 7.41048C0.790734 7.54835 0.506026 7.78188 0.305929 8.08145C0.105832 8.38103 -0.000642471 8.73316 2.91666e-06 9.09321V32.7278C2.91666e-06 34.6565 0.767603 36.5062 2.13394 37.87C3.50028 39.2338 5.35342 40 7.28572 40H43.7143C45.6466 40 47.4997 39.2338 48.8661 37.87C50.2324 36.5062 51 34.6565 51 32.7278V9.09321C51.0006 8.73316 50.8942 8.38103 50.6941 8.08145C50.494 7.78188 50.2093 7.54835 49.876 7.41048C49.5428 7.27261 49.1761 7.2366 48.8223 7.30702C48.4686 7.37744 48.1437 7.55112 47.889 7.80603L38.4977 17.1835L26.9936 0.777463Z"
                  fill="white"
                />
              </svg>
              <h1 className="text-gray-100 md:text-2xl text-lg mx-2 my-4 text-center tracking-wide font-Jost">
                King Swap
              </h1>
            </div>
            <div className="flex flex-row items-center justify-center md:mx-4 mx-1 bg-[#160F2E80] px-3 py-2 rounded-full">
              <span className="text-[#B69FFF] text-[14px] font-bold mr-2">
                MevSafep{" "}
              </span>
              <p className="text-[#B69FFF] text-[14px]">50% Slippage</p>
              <svg
                className="hover:text-white ml-2 hover:rotate-90 hover:scale-125 transition delay-150 duration-300 cursor-pointer"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.9646 10.0636C8.9311 10.0636 9.7146 9.2801 9.7146 8.3136C9.7146 7.3471 8.9311 6.5636 7.9646 6.5636C6.9981 6.5636 6.2146 7.3471 6.2146 8.3136C6.2146 9.2801 6.9981 10.0636 7.9646 10.0636Z"
                  stroke="#B69FFF"
                />
                <path
                  d="M2.18867 2.95861L2.40742 2.57886C2.32154 2.52921 2.22133 2.51022 2.12323 2.525C2.02514 2.53979 1.93498 2.58747 1.86755 2.66024L2.18867 2.95861ZM0.439549 5.98961L0.0212985 5.86011C-0.00781288 5.9548 -0.00393087 6.05656 0.0323094 6.14875C0.0685498 6.24094 0.135003 6.3181 0.220799 6.36761L0.439549 5.98961ZM0.437799 10.6367L0.219049 10.2579C0.133068 10.3074 0.0664882 10.3847 0.0302366 10.4771C-0.0060149 10.5695 -0.00978376 10.6714 0.0195486 10.7662L0.437799 10.6367ZM2.1878 13.6677L1.86667 13.9652C1.9341 14.038 2.02426 14.0857 2.12236 14.1005C2.22046 14.1153 2.32066 14.0963 2.40655 14.0466L2.1878 13.6677ZM6.2128 15.9909H5.7753C5.77525 16.0902 5.80901 16.1866 5.87103 16.2642C5.93305 16.3418 6.01964 16.396 6.11655 16.4179L6.2128 15.9909ZM9.71367 15.9926L9.8108 16.4196C9.90755 16.3976 9.99393 16.3433 10.0558 16.2657C10.1176 16.1881 10.1513 16.0918 10.1512 15.9926H9.71455H9.71367ZM13.7395 13.6686L13.5208 14.0475C13.6067 14.0971 13.7069 14.1161 13.805 14.1013C13.9031 14.0866 13.9932 14.0389 14.0607 13.9661L13.7395 13.6686ZM15.4878 10.6359L15.906 10.7654C15.9352 10.6707 15.9313 10.5689 15.895 10.4767C15.8588 10.3845 15.7923 10.3074 15.7065 10.2579L15.4878 10.6359ZM15.4895 5.98874L15.7083 6.36761C15.7943 6.31806 15.8609 6.24075 15.8971 6.14838C15.9334 6.056 15.9371 5.95404 15.9078 5.85924L15.4895 5.98874ZM13.7395 2.95686L14.0607 2.65936C13.9932 2.5866 13.9031 2.53891 13.805 2.52413C13.7069 2.50934 13.6067 2.52833 13.5208 2.57799L13.7395 2.95686ZM9.71455 0.635487H10.152C10.1519 0.536414 10.1182 0.440309 10.0564 0.362898C9.99455 0.285488 9.90827 0.231357 9.81167 0.209363L9.71455 0.635487ZM6.21455 0.633738L6.11742 0.206738C6.02051 0.228593 5.93393 0.28278 5.87191 0.360386C5.80989 0.437991 5.77612 0.534394 5.77617 0.633738H6.21367H6.21455ZM0.857799 6.11911C1.18609 5.05259 1.75044 4.07373 2.50892 3.25524L1.86755 2.66024C1.01955 3.57495 0.38851 4.66807 0.0212985 5.86011L0.857799 6.11911ZM1.5228 12.0324C1.24472 11.5507 1.02138 11.0394 0.856924 10.5081L0.0204235 10.7671C0.204758 11.3607 0.454807 11.9318 0.765924 12.4699L1.5228 12.0324ZM2.5098 13.3711C2.13225 12.963 1.80062 12.5139 1.5228 12.0324L0.765924 12.4699C1.07623 13.0081 1.44574 13.51 1.86755 13.9661L2.5098 13.3711ZM9.61742 15.5674C8.52936 15.8151 7.39947 15.8145 6.31167 15.5656L6.11742 16.4179C7.33302 16.6961 8.59568 16.697 9.81167 16.4205L9.61742 15.5674ZM15.0713 10.5081C14.743 11.5746 14.1787 12.5535 13.4202 13.372L14.0615 13.967C14.9095 13.0523 15.5406 11.9583 15.9078 10.7662L15.0713 10.5081ZM14.4063 4.59486C14.6898 5.08749 14.9112 5.59849 15.073 6.11911L15.9087 5.86011C15.7244 5.26652 15.4744 4.69539 15.1632 4.15736L14.4063 4.59486ZM13.4193 3.25611C13.7971 3.66401 14.1288 4.11308 14.4063 4.59486L15.1632 4.15736C14.8529 3.61911 14.4834 3.11724 14.0615 2.66111L13.4193 3.25611ZM6.31167 1.05986C7.39974 0.812153 8.52962 0.812751 9.61742 1.06161L9.81167 0.209363C8.59608 -0.0688986 7.33341 -0.0697958 6.11742 0.206738L6.31167 1.05986ZM6.65205 2.25161V0.632863H5.77705V2.25161H6.65205ZM3.8083 3.38736L2.40742 2.57886L1.96992 3.33574L3.36992 4.14511L3.8083 3.38736ZM1.6208 9.44936L0.219049 10.2579L0.657423 11.0156L2.05742 10.2071L1.6208 9.44936ZM2.0583 6.41836L0.658299 5.61074L0.220799 6.36849L1.6208 7.17611L2.0583 6.41836ZM6.65205 15.9909V14.3747H5.77705V15.9909H6.65205ZM3.3708 12.4804L1.96992 13.2889L2.40742 14.0466L3.80742 13.2381L3.3708 12.4804ZM13.9592 13.2897L12.5583 12.4804L12.1208 13.239L13.5208 14.0475L13.9592 13.2897ZM10.152 15.9935V14.3747H9.27705V15.9935H10.152ZM15.2717 5.60986L13.8708 6.41836L14.3083 7.17611L15.7083 6.36761L15.2717 5.60986ZM15.7074 10.257L14.3083 9.45111L13.8708 10.2089L15.2708 11.0165L15.7083 10.2587L15.7074 10.257ZM10.152 2.25161V0.635487H9.27705V2.25161H10.152ZM13.5217 2.57886L12.1208 3.38824L12.5583 4.14599L13.9592 3.33661L13.5217 2.57886ZM9.27705 2.25161C9.27705 3.93511 11.0997 4.98774 12.5583 4.14599L12.1208 3.38824C11.9212 3.50347 11.6948 3.56412 11.4643 3.56408C11.2339 3.56404 11.0075 3.50332 10.8079 3.38803C10.6084 3.27273 10.4427 3.10693 10.3276 2.90728C10.2124 2.70764 10.1519 2.48208 10.152 2.25161H9.27705ZM13.8708 6.41924C12.4122 7.26099 12.4122 9.36624 13.8708 10.208L14.3083 9.45024C14.1088 9.33504 13.9431 9.16935 13.8279 8.96983C13.7127 8.77032 13.6521 8.54399 13.6521 8.31361C13.6521 8.08323 13.7127 7.85691 13.8279 7.65739C13.9431 7.45787 14.1088 7.29219 14.3083 7.17699L13.8708 6.41924ZM12.5583 12.4812C11.0997 11.6395 9.27705 12.6904 9.27705 14.3747H10.152C10.1521 14.1443 10.2127 13.9189 10.3279 13.7194C10.4431 13.5199 10.6088 13.3542 10.8083 13.239C11.0078 13.1238 11.2342 13.0631 11.4646 13.0631C11.6949 13.0631 11.9213 13.1238 12.1208 13.239L12.5583 12.4812ZM6.65205 14.3747C6.65205 12.6912 4.82942 11.6395 3.3708 12.4812L3.8083 13.239C4.00789 13.1238 4.2343 13.0631 4.46476 13.0631C4.69522 13.0632 4.92161 13.1239 5.12116 13.2392C5.32071 13.3545 5.48639 13.5203 5.60152 13.7199C5.71666 13.9196 5.7772 14.146 5.77705 14.3765H6.65205V14.3747ZM2.0583 10.208C3.51692 9.36624 3.51692 7.26099 2.0583 6.41924L1.6208 7.17699C2.4958 7.68186 2.4958 8.94361 1.6208 9.44936L2.0583 10.208ZM5.77705 2.25161C5.77689 2.48193 5.71613 2.70815 5.60087 2.90754C5.4856 3.10694 5.3199 3.2725 5.12041 3.38759C4.92091 3.50268 4.69464 3.56324 4.46432 3.5632C4.23401 3.56316 4.00776 3.50252 3.8083 3.38736L3.3708 4.14599C4.82942 4.98774 6.65205 3.93599 6.65205 2.25161H5.77705Z"
                  fill="#B69FFF"
                />
              </svg>
            </div>
          </div>
          <div className="relative flex flex-col bg-[#131229] p-4 rounded-sm">
            <div className="flex flex-col h-32 bg-[#D9D9D90D] px-2 rounded-sm">
              <div className="flex w-full items-start justify-start p-2">
                <p className="text-gray-500 text-lg font-Jost">You pay</p>
              </div>
              <div className="flex w-full p-2 items-center justify-between">
                <input
                  placeholder="2.35"
                  type={"number"}
                  style={{
                    background: "none",
                  }}
                  className={
                    "text-white md:text-5xl text-4xl font-IBM w-1/2 bg-black focus:border-none focus:outline-none arrow-hide"
                  }
                />
                <div className="flex flex-row px-3 py-1 bg-[#131229] items-center rounded-md">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="21" height="21" fill="url(#pattern0_1_39)" />
                    <defs>
                      <pattern
                        id="pattern0_1_39"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_1_39"
                          transform="scale(0.0078125)"
                        />
                      </pattern>
                      <image
                        id="image0_1_39"
                        width="128"
                        height="128"
                        xlinkHref="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                  <select
                    value={youPay}
                    onChange={(event) => setYouPay(event.target.value)}
                    className="text-gray-100 font-Jost pr-2 py-1 md:text-lg text-sm bg-inherit border border-none focus:border-none active:outline-none focus:outline-none"
                  >
                    <option value="ete">ETE</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="xrp">Xrp</option>
                    <option value="bnb">Bnb</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center absolute top-[130px] xl:left-52 lg:left-72 md:left-52 left-40 w-[42px] h-[42px] bg-[#131229] rounded-full">
              <div className="flex items-center justify-center w-[32px] h-[32px] bg-[#D9D9D90D] rounded-full">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 51 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.9936 0.777463C26.8257 0.537428 26.6023 0.341399 26.3422 0.206041C26.0822 0.0706834 25.7933 0 25.5 0C25.2067 0 24.9178 0.0706834 24.6578 0.206041C24.3977 0.341399 24.1743 0.537428 24.0064 0.777463L12.5023 17.1835L3.111 7.80603C2.85626 7.55112 2.53142 7.37744 2.17767 7.30702C1.82392 7.2366 1.45718 7.27261 1.12396 7.41048C0.790734 7.54835 0.506026 7.78188 0.305929 8.08145C0.105832 8.38103 -0.000642471 8.73316 2.91666e-06 9.09321V32.7278C2.91666e-06 34.6565 0.767603 36.5062 2.13394 37.87C3.50028 39.2338 5.35342 40 7.28572 40H43.7143C45.6466 40 47.4997 39.2338 48.8661 37.87C50.2324 36.5062 51 34.6565 51 32.7278V9.09321C51.0006 8.73316 50.8942 8.38103 50.6941 8.08145C50.494 7.78188 50.2093 7.54835 49.876 7.41048C49.5428 7.27261 49.1761 7.2366 48.8223 7.30702C48.4686 7.37744 48.1437 7.55112 47.889 7.80603L38.4977 17.1835L26.9936 0.777463Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col h-32 px-2 mt-3 bg-[#D9D9D90D]">
              <div className="flex w-full items-start justify-start p-2">
                <p className="text-gray-500 text-lg font-Jost">You receive</p>
              </div>
              <div className="flex p-2 items-center justify-between">
                <input
                  placeholder="0"
                  type={"number"}
                  style={{ background: "none" }}
                  className={
                    "text-gray-500 md:text-5xl text-4xl font-IBM w-1/2 focus:border-none focus:outline-none arrow-hide"
                  }
                />
                <div className="flex flex-row md:px-3 px-2 md:py-1 py-0 bg-[#131229] items-center border border-lemon rounded-md">
                  <select
                    value={youReceive}
                    onChange={(event) => setYouReceive(event.target.value)}
                    className="text-lemon font-Jost px-4 py-1 md:text-lg text-sm bg-inherit border border-none focus:border-none active:outline-none focus:outline-none"
                  >
                    <option value="Select">SELECT</option>
                    <option value="ete">Ethereum</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="xrp">Xrp</option>
                    <option value="bnb">Bnb</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="relative mt-2">
              <button
                type="submit"
                className="relative w-full uppercase text-gray-600 text-lg md:py-5 py-3 font-IBM border border-0.5 border-gray-700 drop-shadow-2xl rounded-md tracking-wider hover:drop-shadow-2xl"
              >
                Select a Token
              </button>
            </div>
          </div>
        </div>
        <div className="h-[477px] rounded-sm border border-[#FFFFFF13]">
          <div className="flex flex-row items-center justify-between py-8 px-4 border-b-[0.5px] border-gray-800">
            <h2 className="text-[18px] text-gray-50 font-Jost font-semibold tracking-wide">
              Active Trades
            </h2>
          </div>
          <div className="flex flex-row bg-[#FFFFFF13] h-[27px] items-center justify-between p-4 border-t-[0.5px] border-b-[0.5px] border-gray-800">
            <span className="text-[18px] text-gray-50 font-IBM font-semibold uppercase">
              Entry
            </span>
            <span className="text-[18px] text-gray-50 font-IBM font-semibold uppercase">
              Current
            </span>
          </div>
          <div className="flex flex-row items-center justify-between p-4 border-b-[0.5px] border-gray-800">
            <div className="flex flex-col">
              <p className="text-[18px] text-gray-50 font-IBM font-normal uppercase">
                0.1
              </p>
              <p className="text-[14px] text-gray-50 font-IBM font-normal uppercase">
                $220.17
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[18px] text-gray-50 font-IBM font-normal uppercase">
                PEPE
              </p>
              <div className="flex bg-[#51FF9F26] rounded-full w-[40px] h-[18px] items-center justify-center">
                <p className="text-[14px] text-lemon font-IBM font-normal uppercase">
                  3X
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[18px] text-gray-50 font-IBM font-normal uppercase">
                0.32
              </p>
              <p className="text-[14px] text-gray-50 font-IBM font-normal uppercase">
                $220.17
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between p-4 border-b-[0.5px] border-gray-800">
            <div className="flex flex-col">
              <p className="text-[18px] text-gray-50 font-IBM font-normal uppercase">
                0.07
              </p>
              <p className="text-[14px] text-gray-50 font-IBM font-normal uppercase">
                $153.20
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-[18px] text-gray-50 font-IBM font-normal uppercase">
                KNG
              </p>
              <div className="flex bg-[#FFFFFF26] rounded-full w-[40px] h-[18px] items-center justify-center">
                <p className="text-[14px] text-gray-50 font-IBM font-normal uppercase">
                  0X
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[18px] text-gray-50 font-IBM font-normal uppercase">
                0.07
              </p>
              <p className="text-[14px] text-gray-50 font-IBM font-normal uppercase">
                $153.20
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { useState } from "react";
import GeneratedTokenModal from "../components/GeneratedTokenModal";

const Home = () => {
  const [youPay, setYouPay] = useState("");
  const [youReceive, setYouReceive] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModel = () => {
    setIsModalOpen(true);
  };
  const handleCloseModel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex w-full items-center justify-center bg-[#100A24]">
      <div className="flex w-full h-screen items-center justify-center bg-radial-gradient-custom my-8">
        <div className="flex flex-col px-4 py-4 md:max-w-[511px] max-w-[375px] border border-[#FFFFFF13] rounded-sm">
          <div className="flex flex-row w-full mx-2 mb-2 items-center">
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
            <h1 className="text-gray-50 md:text-2xl text-xl mx-2 my-4 text-center tracking-wide font-Jost">
              King Swap
            </h1>
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
                  className={
                    "text-white md:text-5xl text-4xl font-IBM w-1/2 bg-inherit focus:border-none focus:outline-none arrow-hide"
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
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADxdJREFUeJztXVtzFMcVplwuP8VVeYmf7HJ+RKqSl/AQP6X8H+yqXUEIjhMnQY5jO9oVCIzA5mowdzAYG4xAGAyWLC5G3IyDL8gOASUYKrarYGZWC7qi23b6692VV6uZ7e6ZnT3di07VV6JUaLfnnG+6z+lz+vScOXUoL6SzP52/2PtlQ9p7piHlLU2k3P2JJqcjkXLO8589/OdN/tPjvx8VEP8Wv+sp/J8O/A3+Fp+Bz8JnUj/XrPjIwjT7ybxm57fJlLsy2eR2cwPe4QZksYB/Nr4D34XvxHdTP/8DJ+k0e4S/lb9Jpr2WZJNzgRtjPDaDS4DvFmPgY8GYMDZq/dStNKQzv0qmnA1c6RkqgysQIoMxYqzU+qoLWZDO/jyZdl7lir1ObdwQZLiOseMZqPVonSTS7i+4AtsTTW6O2pDR4ebEs/Bnotar8dKw2Pk1n0I76Y0W16zgdOIZqfVsnCSbvaeEB2+AkWpCBEQS/Jmp9U4u3Fl6nIdWB6gNQgb+7NABtR1qLjxcejiZdhfxKXGA3AjUswHXAXQBnVDbpSbCPeO5fAr8hlrxpgE6gW6o7ROb5N96Z3l9ePZxgUcMXEd1NxssbMk8kWxyztEr2A5AV3XjGySb3acTSLYYoFjL4EF31PYLLXwaeyiZcltnp/woEJtIrdAltT21BEkR7tnuo1dgfQC6tCbRlGh1H02k3C5qpalg/bt3WdOGDPk4lACdct1S27eiLEgPPMbDmcvkylLAgiUOc/sm2LHuITavmX48KoBun1828DNqO/tKsiX7JF+zeqmVpIqPzg2xyckc++Sfw2ImoB6POtxe6Jra3tMEb75Nxv/Hmxk2MZGbIsCpz4bZn1d45OPSIQF0Tm13IViXbJn2i+i9NcYgRQIA+zsGyMelA6Fzap8AnqktDl8RO9r7WVFKCQAs3dJHPj4tcN2TRQcizrcs1Hv+NZf1D04GEqDj/JBwDqnHqYNCiFj7fYL8Jg+9AnTQfXmYlUo5AYAtbffIx6lNAm6L2hpfbO/atcO3dGsfy+VyUgIAL66yySEE3FzNto2R2ElYtrffkHbYd7fHWbkEEeDQyUHk6cnHrQkPtonV+CKla2FWDx6+nwQRAFi5K0s+bl3ANrGmkvP5fPoH1cFfX/fYyP2cNgG6Lg6z55a55OPXJgG3UVzGn2vbug98fvW+r/FlBADePtJPPn59iKKS6lYW5ad++8q4Vu+5G2h8FQIAr663JFlUAtiqqksBZ1Uj9UPp4neLHeb0TUQmwNEzg2xemv559OE2VsX4KE2ysXoXhpOJCgGAdXttShblAZtVpayMe5Zt1A+ji5fXZdj4uL/jF4YApy4NsxdaLXQIue2iGb/Ze4r6IcLg6rejUuPrEAB47yO7kkVTJIhyAsnG41rYylUVHQIAizdZlixqyh9DC2V8HGKkHrwuELffHZiUWz4kAVBEAueS+jl1EepAqo2ndLFW64guAYBNB2xMFjmdWsbHWXbqQesC0zMMGjcBgEVv2JYs4tDpT5BvzmDAoBWBxM2tH8a0jB+FAAe77EsWwaZKxkdLE9u2fPce65dbu4oEAFp32JYscnNK7WrQ14Z+sOpAMefwiLrjVy0CdF0cYguX2rU3ANtKCWBTdS9wqWcklPGjEgDYcdiuZBEaV1U0PtqbUQ9SB6/vyoY2fjUIALy81q5kUcUWduhxRz1AVcxvdthtb2aVT60JcOT0oKg4otaHKmBjX+OLA50GN2Esx+FT8mRPLQgAIO1MrQ91ArgZ31JytDqlHpwqXlrjsbExvZg/TgKcvDTM/rjcHocQtp45/ae9FuqBqeLr/6gle2pFAAChKLVeVAFbzyRAk3OBemAq2LhfPdlTSwIA6Y12JItg62nGR9tzyq7bqljY4rK+e5WrfCgJcPzskHBOqfUkJQC39bRW9+h9Tz0oFXx8Yahqxo+DAMCGfXY4hLB5SfjnrqQekAypjRntZA8FAU5/NixK0an1JQNsXrL+m1/4ceM7/WRPJcExsas3Rtn7nQNVJ8GBj82vHppWKBLrNStVAOrzqyWjPHzEWQGEbjBW81t9bPn2LNt9tF/UE1SLBMu2Ge4QcpsL4+MyJPLBVADi68HhcMmeUrnbP8kufDUyw8ggQBHoD7Dt4D3WyX2NqASAv/L7Fnr9VYK4CAs3YlEPpBLOfxk+2QP5wRlnZy7ztTnAUKUEKGLJpj72JnfmUFoehQTbDpldPQTb8/Xfe5Z6IEHA1BxWem+N8rdd/ib7EaAUq/dkxZoelgTYtaTWYxBwJR7y/8uoB+IHnMbB26sjY+M59uU1vr5/qj6FywhQxIodWfbOh/2ioZQOAZCzMLV6CLafU7hUkXww5Wjr8j/S7Sdo+3LxyojSGx+WAFN+wtY+tp1P7V0afsIbbxtaPcRtb2T1b+Mqj90flcf8t91x1v158PoeBwGKWLy5j23kfsIxBT/h5KfDoj8RtV7LIaqFTcwBfHUt+Eg35L//G2WnqxSyhSVAKdZwP+FgV2U/Yc9R85JFIieQwH25BgymCHTt9JPxiRy7ch3xe/QQrdoEKGLlzqzICgb5CQb2Je6ZU7g0mXogAmjR5mWnJ3uwB3Dp65nxu4kEKGIZ9xN2tN9jJy5OJ6txfYm57TEDGNPwCdm0otzJTLCzX+T31uMwfJwEmNpP2NLHNu2/y453/0gEw/oSe3MK16dTD2Sqf+/N78diN3qtCDDlMG7qY2v33mWHTg6Y1ZeY294YAhw7Ozi1P19L1IIA0/yEXdxpfMeQWUAQwJAlAClUtHOrdwL8fW3GpBPGnlFOIIDp8lh3dT19EwiAJe4PprWdKziBRoWBALaB1/JpEhsothMAdYJY8w3dDhZh4HkDBuIL7J7t+qDfWgKg57BRYV85uO0xA3SQD0SCl9ZkRP9eWwjwyrqM8bUABXQYkwySpU0xhb62Lcs6z5u7E4idPpUDIn8ypeOYSAYZkg5esTPLPr0yIu2+gd1CnA3QTcvGSYA0B6IY2TpfXNLQxo5a30BDyluKI2HPUA+kCHj/qNlDDl0WKsGxevd49LAxqvGxPM2XjBV+AJpNYp/DpJ1AURBiUkkYvP9i9S9yAnjTZX+DaffoJ+H9g7CGR1j3nEKDCIS12OLGd6HGwaRoQJSEmVYU+rfVHhu+/2MR6LWbo+JMQGUmO6Lo4kSIsDFMWKfSNRRLWWnJOdrPm3aAVBSFmlgWXt7sEQc4kB+QKRBv5Pb2e7ERAIUqssbROL629eDMMSzZbFiZeLEs3NSDISjhLpeh4Umx7ssaMiD+bpMUaOgQAE6b7DYxjAkdS7ouzoxScFUdtT7LMe1giIlHw/AmORn/g6AoFlWps0OdP7p7hiUA/AuVUi74A+gU4vf5KC2XOYkkBCg9Gmbq4VBMm0gRBwkqgGX7B1A+PO+ggpKgsO4vK+VhHXwBVAAFkQuhqqk3kE07HGry8XDU5FcStIWHl40Zo9LnwH9AXZ6MAHBCZUe8EaLiFLBsL2LVbjOrgWccDze5QQTeQpX27zj6tV3hJM4r6zPsg5Lpemr7lv9eRiIA5V4dCruR+wxuLz+jQYTpLWIwHQ8MqZ0P/Pb7MdYiuQMYpMLOI87vIcRU2ZrFUnPwhNp+A7arTb5xzLdFjOlNorCTpio4+o0zhSBOpc+EZy+LKJDD33lYLyNpYPXvNPg2ibKhTRzqA3QE9wUiHAzTtgXx/po9+jUJpreTD2wTlw8HzW4UCY/e7wpYmSCc1NmDRxQQpioJOQzTbxgLbBSZXwbMbxWLmDtsj8B/3RiteA8gMnr7QtYlItEjW3JMQMVWsflZwL1OPUgZEM6FFWwrI2dQWp+H4o3NB/S2kMuBo+zUepFB2ixaEMCSdvFf/Lvy+UGZIKpAW5hiNBDF+Cae+/MlgEq7eFsujMAWbdSegdXoEoZNKFmewAwoXhhRWAasuDIGTRuitI57kNrFK18ZA7Hp0qgPz4RvHhmVACZV90ihc2lUfhYwr3GEHxrS4XsIRiEAchQmVfdUgva1cRCbLo58sayKKG4CIOdvWnVPxZckzMWRYhYwsFAkCDpXxkYlgHHVPRUQ+upYQQDLLo/W7SkYhgAoOaN+Ti0CRLk8GpJIOQeoH0IVSOfeCagiqgYBUH1sYnVPILjtIhkf0pDOPM6diAHyh1EEpufxClVEYQmA4o9Gi66Mhc1gu8gEgCTT7iLqB9KBrIooDAGM7fUXRABus6oYH5JOs4e5M/EN9UNpsF+0gq8WAd4zuLrH9/m5rWCzqhEAkkw7c23YIi4CmTl0EI1KAFHdY9UVsW4Otqqq8UtIsJz+AdWBJhNRCYD0M/Vz6AA2isX4kPxS4JyjfkgdVKoikhHgrfctC/m4bao+9ZfLwpbMEwlDGkupoFIVUSUCtJ80v7qnDB5sE6vxi5Jsdp+2yR9AFdCoTxVREAEwaxjTy08JfN3nNqmJ8adIkHJb6R9cHbt9qoiCCIBOJNTj1QFsUVPjQ/ha8xCPNfdRP7wOcFmUjAC7j9hR3TNlfG4D2KLmBCiQ4JFEyu2iVoIqyquIyglgT3VPAVz3gSXetZJEq/tossm9TK4MRbSWVBGVEwDtXqjHpwqhc657UuMXZUF64DHuiPRSK0UVOLJdTgCcPKIelzrcXuic2u7TJNmSfdIWEhSriIoEsKm6BzqGrqnt7StgpS3LAc7to+MIqntMvM/HD9CtcW9+uWBdssUxxDk+dPGiHocSoFNT1nyZiIOmloWIJqMQ6tF6+7oi9gnEZpE9O4bmwc1Bh2RxfjUkv21sT+7AIHg1396NS5CksC2LSAnoqmaJnVqJSCWLeoLZJSEYophjeewpXUpBtYpN5WW1AnQSWyWPaQKGc7Y32lRtHJvhhQ7cxrp+64NElJw3OW3URqB76522qpVu2yw4vWLTMbTohne7I5/YqUfBIUZbTiWHMjx/ttAHNR8kwVn2fJOKeogYxGZOu/b5/FnJt6vJ9yyyI8tYZvhejF25LcusVBa0N0OPO5ObWWJsGKO0FdushBckRdDqFP1u0fSYsss5vluMgY8FY7IuYVMPgrbn6H2PCxBEJBHn9Tf8s4UHz78L3zmj5fqsmCG4DAk3YiWbvGfFvYgpdz888EJL/J7Chdkerk8XEP8Wv+vJzyo8EsHf8L/FZ+Czpi5YqjP5P2ey0rAsl+yGAAAAAElFTkSuQmCC"
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
            <div className="flex items-center justify-center absolute top-[130px] md:left-52 left-40 w-[42px] h-[42px] bg-[#131229] rounded-full">
              <div className="flex items-center justify-center w-[32px] h-[32px] bg-[#D9D9D90D] rounded-full">
                <svg
                  width="19"
                  height="20"
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
            </div>
            <div className="flex flex-col h-32 px-2 mt-3 bg-[#D9D9D90D]">
              <div className="flex w-full items-start justify-start p-2">
                <p className="text-gray-500 text-lg font-Jost">You receive</p>
              </div>
              <div className="flex p-2 items-center justify-between">
                <input
                  placeholder="0"
                  type={"number"}
                  className={
                    "text-gray-50 bg-inherit md:text-5xl text-4xl font-IBM w-1/2 focus:border-none focus:outline-none arrow-hide"
                  }
                />
                <div className="flex flex-row px-3 py-1 bg-[#131229] items-center border border-lemon rounded-md">
                  <select
                    value={youReceive}
                    onChange={(event) => setYouReceive(event.target.value)}
                    className="text-lemon font-Jost md:px-4 px-1 md:py-1 py-0 md:text-lg text-sm bg-inherit border border-none focus:border-none active:outline-none focus:outline-none"
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
            <div className="mb-8">
              <button
                onClick={handleOpenModel}
                type="submit"
                className="md:w-full w-80 transition-opacity ease-in-out duration-700 opacity-85 hover:opacity-100 uppercase md:text-[18px] text-[16px] text-[#0F3721] py-5 font-IBM bg-lemon rounded-md tracking-wider"
              >
                Generate Private Key
              </button>
            </div>
            {isModalOpen && (
              <GeneratedTokenModal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModel}
                content={<p>This is Model Body</p>}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

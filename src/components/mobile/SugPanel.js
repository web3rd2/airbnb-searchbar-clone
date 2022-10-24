import * as React from "react";

import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";

export default function SugPanel(props) {
  const { sugList, children, onClick } = props;

  return (
    <Box
      sx={{
        padding: 0,
        backgroundColor: "#FFFFFF",
        margin: 0,
        boxShadow: "0 0 0 1px rgb(0 0 0 / 4%), 0 6px 20px rgb(0 0 0 / 20%)",
        borderRadius: "24px",
        height: "100%",
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          padding: "24px",
        }}
      >
        {children}
        <Box sx={{ paddingTop: "16px" }}>
          {sugList.map((sug) => {
            return (
              <Box
                key={sug.place_id}
                onClick={() => {
                  onClick(sug);
                }}
                sx={{
                  cursor: "pointer",
                  listStyleType: "none",
                  width: "100%",
                  display: "flex",
                  padding: "8px 0px 8px 0px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "17px",
                    backgroundColor: "rgb(235, 235, 235)",
                    borderRadius: "12px",
                    minWidth: "48px",
                    height: "48px",
                    marginRight: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SvgIcon
                    viewBox={"0 0 32 32"}
                    sx={{
                      display: "block",
                      height: 22,
                      width: 22,
                      fontSize: "17px",
                      lineHeight: "20px",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="m15.9999.33325c6.4433664 0 11.6667 5.22332687 11.6667 11.66665 0 .395185-.0196984.7942624-.0585936 1.1970109-.3656031 3.7857147-2.3760434 7.7525726-5.487905 11.7201691-1.1932825 1.5214248-2.4696691 2.9382012-3.7464266 4.2149447l-.264609.2625401-.2565836.2505683-.4871024.4643445-.3377669.3126669-.2592315.2338445-.7684829.6644749-.6531219-.5633124-.7123549-.6476755-.4871002-.4643445c-.1682693-.1630063-.3422204-.3341398-.5211901-.5131084-1.2767516-1.2767436-2.5531323-2.69352-3.74640918-4.2149449-3.11184685-3.9675963-5.12227757-7.9344539-5.48787896-11.7201677-.03889501-.4027484-.05859326-.8018256-.05859326-1.1970105 0-6.44329813 5.22335863-11.66665 11.66665-11.66665zm0 2c-5.3387224 0-9.66665 4.32792195-9.66665 9.66665 0 .3301812.01653349.665142.04933146 1.004757.32161647 3.3302606 2.17313947 6.9835713 5.07084634 10.6781398.9771881 1.2459122 2.0157692 2.4217661 3.0628871 3.5026159l.5240256.5323924.4974749.4897834.4621846.4404115.2257179-.2133444.4810251-.4660964.252726-.2507558c1.2232503-1.2232369 2.4468714-2.5814442 3.5869296-4.0350084 2.8977203-3.6945683 4.7492518-7.3478787 5.0708697-10.6781384.0327981-.3396149.0493317-.6745755.0493317-1.0047566 0-5.33875305-4.3279026-9.66665-9.6667-9.66665zm.0001 4.66675c2.7614237 0 5 2.23857625 5 5 0 2.7614237-2.2385763 5-5 5s-5-2.2385763-5-5c0-2.76142375 2.2385763-5 5-5zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3z"></path>
                  </SvgIcon>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "16px",
                      lineHeight: "20px",
                      fontWeight: 400,
                      color: "rgb(34, 34, 34)",
                      overflow: "hidden",
                      height: "20px",
                    }}
                  >
                    {sug.description}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
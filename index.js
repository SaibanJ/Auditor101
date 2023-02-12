var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$react = require("react");
var $ltMAx$reactdom = require("react-dom");
var $ltMAx$reactrouterdom = require("react-router-dom");
var $ltMAx$reacttableui = require("react-table-ui");
var $ltMAx$headlessuireact = require("@headlessui/react");
var $ltMAx$heroiconsreact20solid = require("@heroicons/react/20/solid");
var $ltMAx$materialtailwindreact = require("@material-tailwind/react");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

















//import Ham from './Ham';
function $83cf667ea1134623$var$classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function $83cf667ea1134623$export$2e2bcd8739ae039() {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$headlessuireact.Menu), {
        as: "div",
        className: "relative inline-block text-left",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$headlessuireact.Menu).Button, {
                className: " inline-flex justify-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100",
                children: [
                    "Resources",
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$heroiconsreact20solid.ChevronDownIcon), {
                        className: "-mr-1 ml-2 h-5 w-5",
                        "aria-hidden": "true"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$headlessuireact.Transition), {
                as: (0, $ltMAx$react.Fragment),
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$headlessuireact.Menu).Items, {
                    className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "py-1",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$headlessuireact.Menu).Item, {
                                children: ({ active: active  })=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/LunchMeat",
                                        className: $83cf667ea1134623$var$classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-sm"),
                                        children: "LunchMeat"
                                    })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$headlessuireact.Menu).Item, {
                                children: ({ active: active  })=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/BulkBeef",
                                        className: $83cf667ea1134623$var$classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-sm"),
                                        children: "Bulk Beef"
                                    })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$headlessuireact.Menu).Item, {
                                children: ({ active: active  })=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/CottegeCheese",
                                        className: $83cf667ea1134623$var$classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-sm"),
                                        children: "Cottege Cheese"
                                    })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$headlessuireact.Menu).Item, {
                                children: ({ active: active  })=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/Links",
                                        className: $83cf667ea1134623$var$classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-sm"),
                                        children: "Links"
                                    })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$headlessuireact.Menu).Item, {
                                children: ({ active: active  })=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                        to: "/Mfolio",
                                        className: $83cf667ea1134623$var$classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-sm"),
                                        children: "Mfolio"
                                    })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function $83cf667ea1134623$var$useState(arg0) {
    throw new Error("Function not implemented.");
}



const $6837ec242db19fbd$var$Bulkbeef = ()=>{
    const data = (0, $ltMAx$react.useMemo)(()=>[
            {
                MIC: 250293,
                National: "6138",
                Excel: "81722",
                IBP: "D1306AH"
            },
            {
                MIC: 250009,
                National: "1428",
                Excel: "87121",
                IBP: "D6256AH"
            },
            {
                MIC: 250068,
                National: "6428/6488",
                Excel: "86921/86920",
                IBP: ""
            },
            {
                MIC: 250066,
                National: "6868",
                Excel: "86923",
                IBP: ""
            },
            {
                MIC: 250103,
                National: "4438",
                Excel: "87323",
                IBP: ""
            },
            {
                MIC: 250277,
                National: "4458",
                Excel: "87827",
                IBP: ""
            },
            {
                MIC: 139268,
                National: "4468",
                Excel: "88225",
                IBP: "D4576AH"
            },
            {
                MIC: 252081,
                National: "",
                Excel: "80240",
                IBP: ""
            },
            {
                MIC: 252084,
                National: "",
                Excel: "80243",
                IBP: ""
            },
            {
                MIC: 145523,
                National: "",
                Excel: "67104",
                IBP: ""
            },
            {
                MIC: 143883,
                National: "",
                Excel: "67667",
                IBP: ""
            },
            {
                MIC: 143350,
                National: "",
                Excel: "67897",
                IBP: ""
            },
            {
                MIC: 257001,
                National: "",
                Excel: "21136",
                IBP: ""
            },
            {
                MIC: 250231,
                National: "4451",
                Excel: "",
                IBP: ""
            },
            {
                MIC: 250218,
                National: "2731/2648 ",
                Excel: "93124",
                IBP: ""
            },
            {
                MIC: "037902",
                National: "4471",
                Excel: "",
                IBP: ""
            },
            {
                MIC: "250181",
                National: "2873",
                Excel: "",
                IBP: ""
            },
            {
                MIC: "266308",
                National: "",
                Excel: "88321",
                IBP: ""
            },
            {
                MIC: "878675",
                National: "7188",
                Excel: "",
                IBP: ""
            },
            {
                MIC: "252079",
                National: "578",
                Excel: "",
                IBP: "D00068HV"
            },
            {
                MIC: "187131",
                National: "4048",
                Excel: "",
                IBP: ""
            },
            {
                MIC: "851233",
                National: "2738",
                Excel: "",
                IBP: "D-2146"
            },
            {
                MIC: "264410",
                National: "2748",
                Excel: "",
                IBP: "D-2346"
            },
            {
                MIC: "144797",
                National: "1378",
                Excel: "",
                IBP: "D1566AH"
            },
            {
                MIC: "251198",
                National: "4798",
                Excel: "",
                IBP: "D-4086"
            },
            {
                MIC: "722904",
                National: "4508",
                Excel: "",
                IBP: ""
            },
            {
                MIC: "512417",
                National: "353",
                Excel: "",
                IBP: ""
            }
        ], []);
    const tableInstanceRef = (0, $ltMAx$react.useRef)(null);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("header", {
                className: " header pl-64 pr-20 md:pl-10 md:pt-10 md:pb-10 md:mb-0 ",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("nav", {
                    className: "header__wrapper",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "header__logo md:text-3xl md:mr-5",
                            children: "Auditor101"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                            className: "header__container-links items-center ",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                    to: "/",
                                    className: "md:hidden",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $83cf667ea1134623$export$2e2bcd8739ae039), {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "flex justify-center items-center h-[calc(100vh_-_10rem)]",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "w-2/5 h-96",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$reacttableui))), {
                        title: "Meijer Bulk Beef",
                        data: data,
                        tableInstanceRef: tableInstanceRef
                    })
                })
            })
        ]
    });
};
var $6837ec242db19fbd$export$2e2bcd8739ae039 = $6837ec242db19fbd$var$Bulkbeef;








const $2e988619ac36eb83$var$CottegeCheese = ()=>{
    const data = (0, $ltMAx$react.useMemo)(()=>[
            {
                MIC: 50054,
                Bills: "104326"
            },
            {
                MIC: 50055,
                Bills: "104335"
            },
            {
                MIC: 50056,
                Bills: "106811"
            },
            {
                MIC: 50068,
                Bills: "107508"
            },
            {
                MIC: 50069,
                Bills: "135092"
            },
            {
                MIC: 50070,
                Bills: "136348"
            },
            {
                MIC: 50071,
                Bills: "134911"
            },
            {
                MIC: 56246,
                Bills: "670735"
            },
            {
                MIC: 67348,
                Bills: "805009"
            }
        ], []);
    const tableInstanceRef = (0, $ltMAx$react.useRef)(null);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("header", {
                className: " header pl-64 pr-20 md:pl-10 md:pt-10 md:pb-10 md:mb-0 ",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("nav", {
                    className: "header__wrapper",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "header__logo md:text-3xl md:mr-5",
                            children: "Auditor101"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                            className: "header__container-links items-center ",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                    to: "/",
                                    className: "md:hidden",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $83cf667ea1134623$export$2e2bcd8739ae039), {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "flex justify-center items-center h-[calc(100vh_-_10rem)]",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "w-2/5 h-96",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$reacttableui))), {
                        title: "Meijer Cottege Cheese",
                        data: data,
                        tableInstanceRef: tableInstanceRef
                    })
                })
            })
        ]
    });
};
var $2e988619ac36eb83$export$2e2bcd8739ae039 = $2e988619ac36eb83$var$CottegeCheese;







const $e0a623cd8b4f5f3b$var$Header = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("header", {
        className: " header pl-64 pr-20 mb-52 md:pl-10 md:pt-10 md:pb-10 md:mb-0 ",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("nav", {
            className: "header__wrapper",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "header__logo md:text-3xl md:mr-5",
                    children: "Auditor101"
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                    className: "header__container-links items-center ",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                            className: "md:hidden",
                            href: "",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $83cf667ea1134623$export$2e2bcd8739ae039), {})
                    ]
                })
            ]
        })
    });
};
var $e0a623cd8b4f5f3b$export$2e2bcd8739ae039 = $e0a623cd8b4f5f3b$var$Header;




const $49e0e310520f4084$var$Hero = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
        className: " md:h-[calc(100vh-118px)] md:flex md:flex-col md:justify-start",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "hero__wrapper px-64 mb-24 md:px-10 md:py-10 md:flex hero__intro text-8xl md:text-5xl max-w-6xl md:max-w-md",
                children: "DISCOVER AUDITING PRO TIPS"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "px-64 md:px-10",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "chat chat-start",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "chat-image avatar",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "w-10 rounded-full",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                        src: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "chat-bubble",
                                children: "So, you’re an auditor now, huh?"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "chat chat-start",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "chat-image avatar",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                    className: "w-10 rounded-full",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                        src: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "chat-bubble max-w-md",
                                children: "Well, you may need some useful resources to speed up the learning process and access for convenience. Check out the resources drop down menu to get started with some useful resources or check out the tips tab for some meaningful suggestions"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $49e0e310520f4084$export$2e2bcd8739ae039 = $49e0e310520f4084$var$Hero;


const $0ffa1c630af0fb1d$var$Main = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $e0a623cd8b4f5f3b$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $49e0e310520f4084$export$2e2bcd8739ae039), {})
        ]
    });
};
var $0ffa1c630af0fb1d$export$2e2bcd8739ae039 = $0ffa1c630af0fb1d$var$Main;








function $39309b1f06c5f737$var$Icon({ id: id , open: open  }) {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: `${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M19 9l-7 7-7-7"
        })
    });
}
const $39309b1f06c5f737$var$links = ()=>{
    const [open, setOpen] = (0, $ltMAx$react.useState)(0);
    const handleOpen = (value)=>{
        setOpen(open === value ? 0 : value);
    };
    const customAnimation = {
        mount: {
            scale: 1
        },
        unmount: {
            scale: 0.9
        }
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("header", {
                className: " header pl-64 pr-20 md:pl-10 md:pt-10 md:pb-10 md:mb-0 ",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("nav", {
                    className: "header__wrapper",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "header__logo md:text-3xl md:mr-5",
                            children: "Auditor101"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                            className: "header__container-links items-center ",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                    to: "/",
                                    className: "md:hidden",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $83cf667ea1134623$export$2e2bcd8739ae039), {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "flex flex-col justify-center items-center h-[calc(100vh_-_10rem)]",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                    className: " ml-auto mr-auto bg-[#191d24] rounded-md w-4/12 md:w-full px-10 py-10",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$materialtailwindreact.Accordion), {
                            className: "mb-2",
                            open: open === 1,
                            icon: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($39309b1f06c5f737$var$Icon, {
                                id: 1,
                                open: open
                            }),
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionHeader), {
                                    className: "text-5xl",
                                    onClick: ()=>handleOpen(1),
                                    children: "Mfolio"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionBody), {
                                    className: "text-lg",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                        href: "https://meijer.mgpfolio.com",
                                        children: "https://meijer.mgpfolio.com"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$materialtailwindreact.Accordion), {
                            className: "mb-2",
                            open: open === 2,
                            icon: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($39309b1f06c5f737$var$Icon, {
                                id: 2,
                                open: open
                            }),
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionHeader), {
                                    className: "text-5xl",
                                    onClick: ()=>handleOpen(2),
                                    children: "Product Identifier"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionBody), {
                                    className: "text-lg",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                        href: "http://e-smartapps.meijer.com/MjrProductIdentifier/Default.aspx",
                                        children: "http:///MjrProductIdentifier/Default.aspx"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$materialtailwindreact.Accordion), {
                            className: "mb-2",
                            open: open === 3,
                            icon: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($39309b1f06c5f737$var$Icon, {
                                id: 3,
                                open: open
                            }),
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionHeader), {
                                    className: "text-5xl",
                                    onClick: ()=>handleOpen(3),
                                    children: "PO Inquiry"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionBody), {
                                    className: "text-lg",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                        href: "https://apps.meijer.com/PMMPOInquiry",
                                        children: "https://apps.meijer.com/PMMPOInquiry"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$materialtailwindreact.Accordion), {
                            className: "mb-2",
                            open: open === 4,
                            icon: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($39309b1f06c5f737$var$Icon, {
                                id: 4,
                                open: open
                            }),
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionHeader), {
                                    className: "text-5xl",
                                    onClick: ()=>handleOpen(4),
                                    children: "Daily Checklist"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionBody), {
                                    className: "text-lg",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                        href: "http://apps.meijer.com/dfdailychecklist/DailyChecklistMenu.aspx?strUnitId=85",
                                        children: "http://apps.meijer.com/dfdailychecklist/DailyChecklistMenu.aspx?strUnitId=85"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$materialtailwindreact.Accordion), {
                            className: "mb-2",
                            open: open === 5,
                            icon: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($39309b1f06c5f737$var$Icon, {
                                id: 5,
                                open: open
                            }),
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionHeader), {
                                    className: "text-5xl",
                                    onClick: ()=>handleOpen(5),
                                    children: "Pork SOP"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionBody), {
                                    className: "text-lg",
                                    children: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$materialtailwindreact.Accordion), {
                            className: "mb-2",
                            open: open === 6,
                            icon: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($39309b1f06c5f737$var$Icon, {
                                id: 6,
                                open: open
                            }),
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionHeader), {
                                    className: "text-5xl",
                                    onClick: ()=>handleOpen(6),
                                    children: "Buyers List"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionBody), {
                                    className: "text-lg",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                        href: "https://meijer365.sharepoint.com/:x:/r/sites/MerchHub/_layouts/15/Doc.aspx?sourcedoc=%7B88A21422-416D-4E02-AB89-62CF046B5438%7D&file=Foods%20Area.xlsx&action=default&mobileredirect=true",
                                        children: "Buyers"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$materialtailwindreact.Accordion), {
                            open: open === 7,
                            icon: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)($39309b1f06c5f737$var$Icon, {
                                id: 7,
                                open: open
                            }),
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionHeader), {
                                    className: "text-5xl",
                                    onClick: ()=>handleOpen(7),
                                    children: "Temp Guidelines"
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$materialtailwindreact.AccordionBody), {
                                    className: "text-lg",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                        href: "https://meijer365.sharepoint.com/:x:/r/sites/MerchHub/_layouts/15/Doc.aspx?sourcedoc=%7B88A21422-416D-4E02-AB89-62CF046B5438%7D&file=Foods%20Area.xlsx&action=default&mobileredirect=true",
                                        children: "Guidelines.docx"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
var $39309b1f06c5f737$export$2e2bcd8739ae039 = $39309b1f06c5f737$var$links;








const $286eb21d21d86d05$var$LunchMeat = ()=>{
    const data = (0, $ltMAx$react.useMemo)(()=>[
            {
                Bills: "0431",
                MIC: 265231
            },
            {
                Bills: "0427",
                MIC: 265228
            },
            {
                Bills: "1541",
                MIC: 265179
            },
            {
                Bills: "0429",
                MIC: 265229
            },
            {
                Bills: "0432",
                MIC: 265226
            },
            {
                Bills: "1542",
                MIC: 265187
            },
            {
                Bills: "0529",
                MIC: 143068
            },
            {
                Bills: "0430",
                MIC: 265225
            },
            {
                Bills: "0428",
                MIC: 265227
            },
            {
                Bills: "0531",
                MIC: 145052
            },
            {
                Bills: "0530",
                MIC: "041887"
            },
            {
                Bills: "0033",
                MIC: "039735"
            },
            {
                Bills: "0034",
                MIC: "029703"
            },
            {
                Bills: "0460",
                MIC: "265027"
            },
            {
                Bills: "0528",
                MIC: "031028"
            },
            {
                Bills: "1543",
                MIC: "265185"
            },
            {
                Bills: "1859",
                MIC: "265230"
            },
            {
                Bills: "0459",
                MIC: "265028"
            }
        ], []);
    const tableInstanceRef = (0, $ltMAx$react.useRef)(null);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("header", {
                className: " header pl-64 pr-20 md:pl-10 md:pt-10 md:pb-10 md:mb-0 ",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("nav", {
                    className: "header__wrapper",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "header__logo md:text-3xl md:mr-5",
                            children: "Auditor101"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                            className: "header__container-links items-center ",
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                                    to: "/",
                                    className: "md:hidden",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $83cf667ea1134623$export$2e2bcd8739ae039), {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "flex justify-center items-center h-[calc(100vh_-_10rem)]",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "w-2/5 h-96",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$reacttableui))), {
                        title: "Meijer Lunchmeat",
                        data: data,
                        tableInstanceRef: tableInstanceRef
                    })
                })
            })
        ]
    });
};
var $286eb21d21d86d05$export$2e2bcd8739ae039 = $286eb21d21d86d05$var$LunchMeat;






const $7714fb8d33da592d$var$Mfolio = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("header", {
        className: "md:hidden header pl-64 pr-20",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("nav", {
            className: "header__wrapper",
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                    className: "header__logo",
                    children: "Auditor101"
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                    className: "header__container-links items-center",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Link), {
                            to: "/",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $83cf667ea1134623$export$2e2bcd8739ae039), {})
                    ]
                })
            ]
        })
    });
};
var $7714fb8d33da592d$export$2e2bcd8739ae039 = $7714fb8d33da592d$var$Mfolio;


const $4b7f4b18f5f15172$var$App = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactrouterdom.Routes), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                path: "/",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0ffa1c630af0fb1d$export$2e2bcd8739ae039), {})
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                path: "/Links",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $39309b1f06c5f737$export$2e2bcd8739ae039), {})
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                path: "/Mfolio",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $7714fb8d33da592d$export$2e2bcd8739ae039), {})
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                path: "/BulkBeef",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $6837ec242db19fbd$export$2e2bcd8739ae039), {})
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                path: "/CottegeCheese",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $2e988619ac36eb83$export$2e2bcd8739ae039), {})
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.Route), {
                path: "/LunchMeat",
                element: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $286eb21d21d86d05$export$2e2bcd8739ae039), {})
            })
        ]
    });
};
var $4b7f4b18f5f15172$export$2e2bcd8739ae039 = $4b7f4b18f5f15172$var$App;


(0, ($parcel$interopDefault($ltMAx$reactdom))).render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$react))).StrictMode, {
    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouterdom.BrowserRouter), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $4b7f4b18f5f15172$export$2e2bcd8739ae039), {})
    })
}), document.getElementById("root"));


//# sourceMappingURL=index.js.map

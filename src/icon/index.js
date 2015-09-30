const svgTags = {
  arrow: '<svg width="5px" height="10px" viewBox="0 0 5 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="auth0-lock-icon-arrow"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Lock" transform="translate(-396.000000, -3521.000000)" fill="#000000" opacity="0.539999962"><g id="SMS" transform="translate(153.000000, 3207.000000)"><g transform="translate(35.000000, 299.000000)"><g transform="translate(210.000000, 20.000000) rotate(-90.000000) translate(-210.000000, -20.000000) translate(198.000000, 8.000000)"><path id="Shape" d="M7,10 L12,15 L17,10 L7,10 Z"></path></g></g></g></g></g></svg>',
  auth0: '<svg width="152px" height="168px" viewBox="0 0 152 168" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="badge" sketch:type="MSLayerGroup" transform="translate(1.000000, 0.000000)" fill="#EB5424"> <g id="Clipped" sketch:type="MSShapeGroup"> <path d="M119.127,135.861 L102.277,83.997 L146.384,51.952 L91.863,51.952 L75.011,0.09 L75.006,0.076 L129.536,0.076 L146.391,51.947 L146.391,51.946 L146.405,51.938 C156.195,82.03 146.113,116.256 119.127,135.861 L119.127,135.861 Z M30.893,135.861 L30.879,135.871 L74.998,167.924 L119.127,135.862 L75.012,103.808 L30.893,135.861 L30.893,135.861 Z M3.624,51.939 L3.624,51.939 C-6.68,83.66 5.281,117.272 30.884,135.867 L30.888,135.851 L47.74,83.99 L3.642,51.951 L58.15,51.951 L75.003,0.089 L75.007,0.075 L20.474,0.075 L3.624,51.939 L3.624,51.939 Z" id="Shape"></path> </g> </g> </g> </svg>',
  back: '<svg enable-background="new 0 0 24 24" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <polyline fill="none" points="12.5,21 3.5,12 12.5,3 " stroke="#000000" stroke-miterlimit="10" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="2" x1="22" x2="3.5" y1="12" y2="12"></line> </svg>',
  close: '<svg enable-background="new 0 0 128 128" id="Слой_1" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="#373737" points="123.5429688,11.59375 116.4765625,4.5185547 64.0019531,56.9306641 11.5595703,4.4882813     4.4882813,11.5595703 56.9272461,63.9970703 4.4570313,116.4052734 11.5244141,123.4814453 63.9985352,71.0683594     116.4423828,123.5117188 123.5126953,116.4414063 71.0732422,64.0019531   "></polygon></g></svg>',
  email: '<svg width="32px" height="26px" viewBox="0 0 32 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="auth0-lock-icon"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="32px" sketch:type="MSLayerGroup" transform="translate(-2155.000000, -2317.000000)" fill="#373A39"><g id="Group-856" transform="translate(1.000000, 1.000000)" sketch:type="MSShapeGroup"><path id="Fill-419" d="M2184,2339 C2184,2339.55 2183.55,2340 2183,2340 L2157,2340 C2156.45,2340 2156,2339.55 2156,2339 L2156,2319 C2156,2318.45 2156.45,2318 2157,2318 L2183,2318 C2183.55,2318 2184,2318.45 2184,2319 L2184,2339 L2184,2339 Z M2184,2316 L2156,2316 C2154.89,2316 2154,2316.89 2154,2318 L2154,2340 C2154,2341.1 2154.89,2342 2156,2342 L2184,2342 C2185.1,2342 2186,2341.1 2186,2340 L2186,2318 C2186,2316.89 2185.1,2316 2184,2316 L2184,2316 Z M2176,2322 L2180,2322 L2180,2326 L2176,2326 L2176,2322 Z M2174,2328 L2182,2328 L2182,2320 L2174,2320 L2174,2328 Z M2158,2332 L2172,2332 L2172,2330 L2158,2330 L2158,2332 Z M2158,2336 L2172,2336 L2172,2334 L2158,2334 L2158,2336 Z"></path></g></g></g></svg>',
  location: '<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="auth0-lock-icon auth0-lock-icon-location"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Lock" transform="translate(-201.000000, -3519.000000)" fill="#919191"><g id="SMS" transform="translate(153.000000, 3207.000000)"><g transform="translate(35.000000, 299.000000)"><path id="Fill-349-Copy" d="M22.4023125,22.8 C22.543625,21.9425 22.625,20.9975 22.625,20 L26.125,20 C26.125,21.316875 25.69275,22.52 24.9853125,23.5175 C24.3255625,23.2025 23.4383125,22.953125 22.4023125,22.8 L22.4023125,22.8 Z M21.372875,25.954375 C21.72725,25.3725 22.0234375,24.5675 22.2404375,23.6225 C22.8975625,23.696875 23.483375,23.80625 23.9624375,23.9375 L24.67075,23.9375 C23.829875,24.92625 22.6849375,25.6525 21.372875,25.954375 L21.372875,25.954375 Z M20,26.125 C19.412875,26.125 18.896625,25.105625 18.579,23.5525 C19.034,23.521875 19.503875,23.5 20,23.5 C20.4956875,23.5 20.966,23.521875 21.421,23.5525 C21.1029375,25.105625 20.5866875,26.125 20,26.125 L20,26.125 Z M15.3288125,23.9375 L16.0375625,23.9375 C16.5161875,23.80625 17.1024375,23.696875 17.759125,23.6225 C17.976125,24.5675 18.2723125,25.3725 18.6266875,25.954375 C17.3150625,25.6525 16.170125,24.92625 15.3288125,23.9375 L15.3288125,23.9375 Z M15.0146875,23.5175 C14.3068125,22.52 13.875,21.316875 13.875,20 L17.375,20 C17.375,20.9975 17.4559375,21.9425 17.59725,22.8 C16.56125,22.953125 15.6744375,23.2025 15.0146875,23.5175 L15.0146875,23.5175 Z M15.030875,16.45625 C15.6796875,16.78 16.5634375,17.03375 17.60075,17.195625 C17.501,17.799375 17.428375,18.4425 17.3964375,19.125 L13.951125,19.125 C14.0933125,18.13625 14.477,17.230625 15.030875,16.45625 L15.030875,16.45625 Z M18.6266875,14.04125 C18.27275,14.623125 17.977,15.42375 17.760875,16.373125 C17.1265,16.294375 16.558625,16.189375 16.0944375,16.0625 L15.34325,16.0625 C16.180625,15.069375 17.3168125,14.343125 18.6266875,14.04125 L18.6266875,14.04125 Z M20,13.875 C20.585375,13.875 21.0959375,14.894375 21.4118125,16.443125 C20.959875,16.478125 20.492625,16.5 20,16.5 C19.5069375,16.5 19.0396875,16.478125 18.58775,16.443125 C18.903625,14.894375 19.4141875,13.875 20,13.875 L20,13.875 Z M18.2749375,19.125 C18.3020625,18.473125 18.362,17.865 18.441625,17.29625 C18.9408125,17.344375 19.4596875,17.375 20,17.375 C20.5403125,17.375 21.0591875,17.344375 21.5579375,17.29625 C21.638,17.865 21.6979375,18.473125 21.724625,19.125 L18.2749375,19.125 L18.2749375,19.125 Z M21.75,20 C21.75,20.97125 21.6786875,21.88125 21.5631875,22.699375 C21.06225,22.65125 20.5420625,22.625 20,22.625 C19.4579375,22.625 18.9373125,22.65125 18.436375,22.699375 C18.320875,21.88125 18.25,20.97125 18.25,20 L21.75,20 L21.75,20 Z M24.6563125,16.0625 L23.905125,16.0625 C23.441375,16.189375 22.8730625,16.294375 22.2386875,16.373125 C22.0225625,15.42375 21.7268125,14.623125 21.372875,14.04125 C22.68275,14.343125 23.8189375,15.069375 24.6563125,16.0625 L24.6563125,16.0625 Z M24.9686875,16.45625 C25.5225625,17.230625 25.90625,18.13625 26.048875,19.125 L22.603125,19.125 C22.5711875,18.4425 22.499,17.799375 22.39925,17.195625 C23.4365625,17.03375 24.3203125,16.78 24.9686875,16.45625 L24.9686875,16.45625 Z M20,13 C16.1338125,13 13,16.1325 13,20 C13,23.863125 16.1338125,27 20,27 C23.86575,27 27,23.863125 27,20 C27,16.1325 23.86575,13 20,13 L20,13 Z"></path></g></g></g></g></svg>',
  phoneNumber: '<svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="auth0-lock-icon auth0-lock-icon-mobile"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Lock" transform="translate(-204.000000, -3459.000000)" fill="#888888"><g id="SMS" transform="translate(153.000000, 3207.000000)"><g transform="translate(35.000000, 239.000000)"><path d="M24.1,15.625 L16.9,15.625 L16.9,14.75 C16.9,14.264375 17.30275,13.875 17.8,13.875 L23.2,13.875 C23.6968,13.875 24.1,14.264375 24.1,14.75 L24.1,15.625 L24.1,15.625 Z M16.9,16.5 L24.1,16.5 L24.1,21.75 L16.9,21.75 L16.9,16.5 Z M24.1,25.25 C24.1,25.73125 23.6968,26.125 23.2,26.125 L17.8,26.125 C17.30275,26.125 16.9,25.73125 16.9,25.25 L16.9,22.625 L24.1,22.625 L24.1,25.25 L24.1,25.25 Z M23.2,13 L17.8,13 C16.80595,13 16,13.783125 16,14.75 L16,25.25 C16,26.216875 16.80595,27 17.8,27 L23.2,27 C24.19405,27 25,26.216875 25,25.25 L25,14.75 C25,13.783125 24.19405,13 23.2,13 L23.2,13 Z M20.5,25.25 C20.9968,25.25 21.4,24.85625 21.4,24.375 C21.4,23.889375 20.9968,23.5 20.5,23.5 C20.00275,23.5 19.6,23.889375 19.6,24.375 C19.6,24.85625 20.00275,25.25 20.5,25.25 L20.5,25.25 Z"></path></g></g></g></g></svg>',
  vcode: '<svg width="12px" height="14px" viewBox="0 0 12 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" class="auth0-lock-icon auth0-lock-icon-box"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g transform="translate(-964.000000, -3509.000000)" fill="#888888"><g transform="translate(915.000000, 3207.000000)"><g transform="translate(35.000000, 289.000000)"><path id="Fill-42" d="M25.0523108,22.8115806 L20.455448,26.0692401 L20.455448,20.6336024 L25.0523108,17.6924012 L25.0523108,22.8115806 L25.0523108,22.8115806 Z M20.1658456,19.763342 C20.1060864,19.786611 20.050924,19.8145338 19.9957617,19.8471103 C19.9451962,19.8191876 19.8946307,19.786611 19.8394683,19.7679958 L14.9392126,16.7616414 L19.986568,13.8949009 L25.0523108,16.7616414 L25.043117,16.7662952 L20.1658456,19.763342 L20.1658456,19.763342 Z M19.5360754,20.6336024 L19.5360754,26.0692401 L14.9392126,22.8115806 L14.9392126,17.6924012 L19.5360754,20.6336024 L19.5360754,20.6336024 Z M25.9716833,17.6924012 C25.9716833,17.5574411 25.9395053,17.4317885 25.8889398,17.3154435 C26.0728143,16.9664085 26.0314425,16.5242976 25.7418402,16.2311082 L20.4002856,13.2340614 C19.7980966,12.9408721 20.2393954,12.9036417 19.5590597,13.2340614 L14.2634738,16.2311082 C13.9692745,16.5242976 13.9279028,16.9571009 14.1071804,17.3107897 C14.0520181,17.4271347 14.01984,17.5527873 14.01984,17.6924012 L14.01984,22.8115806 C14.01984,23.3234985 14.4335577,23.7423404 14.9392126,23.7423404 L19.5360754,27 C19.7061593,27 19.8578558,26.9395006 19.9957617,26.8557322 C20.1336676,26.9395006 20.285364,27 20.455448,27 L25.511997,23.7423404 C26.017652,23.7423404 25.9716833,23.3234985 25.9716833,22.8115806 L25.9716833,17.6924012 L25.9716833,17.6924012 Z"></path></g></g></g></g></svg>'
}

export function iconTag(name) {
  return svgTags[name];
}

export function iconUrl(name) {
  return `data:image/svg+xml;utf8,${iconTag(name).replace(/#/g, "%23")}`;
}

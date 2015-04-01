var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":218,"id":3493,"methods":[{"el":41,"sc":2,"sl":38},{"el":89,"sc":2,"sl":43},{"el":110,"sc":2,"sl":91},{"el":130,"sc":2,"sl":112},{"el":153,"sc":2,"sl":133},{"el":180,"sc":2,"sl":155},{"el":209,"sc":2,"sl":183},{"el":216,"sc":2,"sl":211}],"name":"EccPointSpec","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_101":{"methods":[{"sl":91}],"name":"Verify that writeFixedFieldSizeKey writes to byte array with correct fieldsize[0]","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":101},{"sl":102}]},"test_102":{"methods":[{"sl":91}],"name":"Verify that writeFixedFieldSizeKey writes to byte array with correct fieldsize[2]","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":101},{"sl":102}]},"test_169":{"methods":[{"sl":43}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":45},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":52},{"sl":54},{"sl":55},{"sl":56},{"sl":57},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":65},{"sl":67},{"sl":69},{"sl":70},{"sl":71},{"sl":72},{"sl":73},{"sl":75},{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":82},{"sl":84},{"sl":86},{"sl":88}]},"test_233":{"methods":[{"sl":91}],"name":"Verify that writeFixedFieldSizeKey writes to byte array with correct fieldsize[1]","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":101},{"sl":102}]},"test_253":{"methods":[{"sl":211}],"name":"Verify toString","pass":true,"statements":[{"sl":213},{"sl":214},{"sl":215}]},"test_26":{"methods":[{"sl":133}],"name":"Verify serialization of EccPoint","pass":true,"statements":[{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":143},{"sl":144},{"sl":145},{"sl":146},{"sl":148},{"sl":150},{"sl":151},{"sl":152}]},"test_261":{"methods":[{"sl":91}],"name":"Verify that writeFixedFieldSizeKey writes to byte array with correct fieldsize[3]","pass":true,"statements":[{"sl":94},{"sl":95},{"sl":96},{"sl":98},{"sl":99},{"sl":101},{"sl":102}]},"test_304":{"methods":[{"sl":112}],"name":"Verify that readFixedFieldSizeKey reads from byte array with correct fieldsize[0]","pass":true,"statements":[{"sl":115},{"sl":116},{"sl":117},{"sl":119},{"sl":120},{"sl":122}]},"test_325":{"methods":[{"sl":183}],"name":"Verify hashCode and equals","pass":true,"statements":[{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192},{"sl":193},{"sl":195},{"sl":196},{"sl":197},{"sl":198},{"sl":199},{"sl":200},{"sl":201},{"sl":202},{"sl":203},{"sl":204},{"sl":205},{"sl":206},{"sl":207},{"sl":208}]},"test_342":{"methods":[{"sl":112}],"name":"Verify that readFixedFieldSizeKey reads from byte array with correct fieldsize[2]","pass":true,"statements":[{"sl":115},{"sl":116},{"sl":117},{"sl":119},{"sl":120},{"sl":122}]},"test_352":{"methods":[{"sl":112}],"name":"Verify that readFixedFieldSizeKey reads from byte array with correct fieldsize[3]","pass":true,"statements":[{"sl":115},{"sl":116},{"sl":117},{"sl":119},{"sl":120},{"sl":122}]},"test_47":{"methods":[{"sl":155}],"name":"Verify deserialization of EccPoint","pass":true,"statements":[{"sl":157},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":164},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":174},{"sl":175},{"sl":176},{"sl":177},{"sl":178}]},"test_97":{"methods":[{"sl":112}],"name":"Verify that readFixedFieldSizeKey reads from byte array with correct fieldsize[1]","pass":true,"statements":[{"sl":115},{"sl":116},{"sl":117},{"sl":119},{"sl":120},{"sl":122}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [169], [], [169], [], [169], [169], [169], [169], [], [169], [], [169], [169], [169], [169], [], [169], [], [169], [169], [169], [169], [169], [], [169], [], [169], [169], [169], [169], [169], [], [169], [], [169], [169], [169], [169], [], [169], [], [169], [], [169], [], [169], [], [], [261, 233, 101, 102], [], [], [261, 233, 101, 102], [261, 233, 101, 102], [261, 233, 101, 102], [], [261, 233, 101, 102], [261, 233, 101, 102], [], [261, 233, 101, 102], [261, 233, 101, 102], [], [], [], [], [], [], [], [], [], [342, 97, 304, 352], [], [], [342, 97, 304, 352], [342, 97, 304, 352], [342, 97, 304, 352], [], [342, 97, 304, 352], [342, 97, 304, 352], [], [342, 97, 304, 352], [], [], [], [], [], [], [], [], [], [], [26], [], [26], [], [26], [26], [26], [], [26], [], [26], [26], [26], [26], [], [26], [], [26], [26], [26], [], [], [47], [], [47], [], [47], [47], [47], [47], [], [47], [], [47], [47], [47], [47], [], [47], [], [47], [47], [47], [47], [47], [47], [], [], [], [], [325], [], [], [325], [325], [325], [325], [325], [325], [325], [325], [], [325], [325], [325], [325], [325], [325], [325], [325], [325], [325], [325], [325], [325], [325], [], [], [253], [], [253], [253], [253], [], [], []]

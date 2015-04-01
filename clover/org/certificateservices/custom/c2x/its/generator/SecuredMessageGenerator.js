var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":249,"id":3329,"methods":[{"el":83,"sc":2,"sl":70},{"el":108,"sc":2,"sl":100},{"el":145,"sc":2,"sl":125},{"el":180,"sc":2,"sl":162},{"el":204,"sc":2,"sl":196},{"el":239,"sc":2,"sl":220},{"el":248,"sc":2,"sl":246}],"name":"SecuredMessageGenerator","sl":48}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_191":{"methods":[{"sl":70},{"sl":162},{"sl":246}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":164},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":174},{"sl":175},{"sl":178},{"sl":247}]},"test_222":{"methods":[{"sl":196},{"sl":220},{"sl":246}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":197},{"sl":198},{"sl":199},{"sl":200},{"sl":202},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":228},{"sl":229},{"sl":230},{"sl":232},{"sl":233},{"sl":237},{"sl":247}]},"test_265":{"methods":[{"sl":162},{"sl":246}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":164},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":174},{"sl":175},{"sl":178},{"sl":247}]},"test_283":{"methods":[{"sl":100},{"sl":125},{"sl":246}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":101},{"sl":102},{"sl":103},{"sl":104},{"sl":106},{"sl":126},{"sl":130},{"sl":131},{"sl":132},{"sl":134},{"sl":135},{"sl":138},{"sl":139},{"sl":143},{"sl":247}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [191], [], [], [], [], [], [], [191], [191], [191], [191], [191], [191], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [283], [283], [283], [283], [283], [], [283], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [283], [283], [], [], [], [283], [283], [283], [], [283], [283], [], [], [283], [283], [], [], [], [283], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [265, 191], [], [265, 191], [], [], [], [265, 191], [265, 191], [265, 191], [265, 191], [], [], [265, 191], [265, 191], [], [], [265, 191], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [222], [222], [222], [222], [222], [], [222], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [222], [], [222], [222], [222], [222], [], [], [222], [222], [222], [], [222], [222], [], [], [], [222], [], [], [], [], [], [], [], [], [265, 191, 222, 283], [265, 191, 222, 283], [], []]

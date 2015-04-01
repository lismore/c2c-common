var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":215,"id":3224,"methods":[{"el":44,"sc":2,"sl":42},{"el":83,"sc":2,"sl":67},{"el":124,"sc":2,"sl":107},{"el":165,"sc":2,"sl":148},{"el":214,"sc":2,"sl":189}],"name":"AuthorityCertGenerator","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_236":{"methods":[{"sl":67},{"sl":189}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":81},{"sl":205},{"sl":206},{"sl":209},{"sl":213}]},"test_270":{"methods":[{"sl":67},{"sl":189}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":81},{"sl":205},{"sl":206},{"sl":209},{"sl":213}]},"test_32":{"methods":[{"sl":42},{"sl":107},{"sl":189}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":43},{"sl":122},{"sl":205},{"sl":206},{"sl":207},{"sl":213}]},"test_360":{"methods":[{"sl":189}],"name":"Verify illegal subjec type no root ca and CA certificate null throws illegal argument exception","pass":true,"statements":[{"sl":205},{"sl":206},{"sl":207},{"sl":213}]},"test_39":{"methods":[{"sl":67},{"sl":148},{"sl":189}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":81},{"sl":163},{"sl":205},{"sl":206},{"sl":207},{"sl":209},{"sl":213}]},"test_398":{"methods":[{"sl":67},{"sl":107},{"sl":189}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":81},{"sl":122},{"sl":205},{"sl":206},{"sl":207},{"sl":209},{"sl":213}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [32], [32], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [39, 236, 398, 270], [], [], [], [], [], [], [], [], [], [], [], [], [], [39, 236, 398, 270], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [32, 398], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [32, 398], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [39], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [39], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [39, 32, 236, 360, 398, 270], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [39, 32, 236, 360, 398, 270], [39, 32, 236, 360, 398, 270], [39, 32, 360, 398], [], [39, 236, 398, 270], [], [], [], [39, 32, 236, 360, 398, 270], [], []]

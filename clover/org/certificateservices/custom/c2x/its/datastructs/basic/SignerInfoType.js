var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":65,"id":1711,"methods":[{"el":47,"sc":2,"sl":45},{"el":51,"sc":2,"sl":49},{"el":63,"sc":2,"sl":56}],"name":"SignerInfoType","sl":36}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_105":{"methods":[{"sl":49}],"name":"Verify serialization","pass":true,"statements":[{"sl":50}]},"test_114":{"methods":[{"sl":49}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":50}]},"test_118":{"methods":[{"sl":49}],"name":"Verify that certificate_digest_with_ecdsap256 has bytevalue 1","pass":true,"statements":[{"sl":50}]},"test_119":{"methods":[{"sl":56}],"name":"Verify that SignerInfoType.getByValue returns self for 0","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_149":{"methods":[{"sl":49}],"name":"Verify that certificate_digest_with_other_algorithm has bytevalue 4","pass":true,"statements":[{"sl":50}]},"test_153":{"methods":[{"sl":49}],"name":"Verify serialization","pass":true,"statements":[{"sl":50}]},"test_160":{"methods":[{"sl":49},{"sl":56}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":50},{"sl":57},{"sl":58},{"sl":59}]},"test_163":{"methods":[{"sl":49},{"sl":56}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":50},{"sl":57},{"sl":58},{"sl":59}]},"test_171":{"methods":[{"sl":56}],"name":"Verify that SignerInfoType.getByValue returns certificate_digest_with_other_algorithm for 4","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_173":{"methods":[{"sl":49},{"sl":56}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":50},{"sl":57},{"sl":58},{"sl":59}]},"test_191":{"methods":[{"sl":49}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":50}]},"test_193":{"methods":[{"sl":49}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":50}]},"test_196":{"methods":[{"sl":49}],"name":"Verify serialization","pass":true,"statements":[{"sl":50}]},"test_20":{"methods":[{"sl":56}],"name":"Verify deserialization","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_209":{"methods":[{"sl":49}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":50}]},"test_22":{"methods":[{"sl":56}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_222":{"methods":[{"sl":49}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":50}]},"test_232":{"methods":[{"sl":49}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":50}]},"test_236":{"methods":[{"sl":49}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":50}]},"test_241":{"methods":[{"sl":56}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_244":{"methods":[{"sl":49}],"name":"Verify that certificate has bytevalue 2","pass":true,"statements":[{"sl":50}]},"test_246":{"methods":[{"sl":49},{"sl":56}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":50},{"sl":57},{"sl":58},{"sl":59}]},"test_249":{"methods":[{"sl":49},{"sl":56}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":50},{"sl":57},{"sl":58},{"sl":59}]},"test_259":{"methods":[{"sl":49}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":50}]},"test_265":{"methods":[{"sl":49}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":50}]},"test_270":{"methods":[{"sl":49}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":50}]},"test_281":{"methods":[{"sl":56}],"name":"Verify that SignerInfoType.getByValue returns certificate_digest_with_ecdsap256 for 1","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_283":{"methods":[{"sl":49}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":50}]},"test_32":{"methods":[{"sl":49}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":50}]},"test_337":{"methods":[{"sl":49}],"name":"Verify that self has bytevalue 0","pass":true,"statements":[{"sl":50}]},"test_339":{"methods":[{"sl":49}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":50}]},"test_340":{"methods":[{"sl":49}],"name":"Verify serialization","pass":true,"statements":[{"sl":50}]},"test_351":{"methods":[{"sl":56}],"name":"Verify deserialization","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_361":{"methods":[{"sl":56}],"name":"Verify deserialization","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_366":{"methods":[{"sl":49}],"name":"Verify that certificate_chain has bytevalue 3","pass":true,"statements":[{"sl":50}]},"test_367":{"methods":[{"sl":49}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":50}]},"test_381":{"methods":[{"sl":56}],"name":"Verify deserialization","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_39":{"methods":[{"sl":49}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":50}]},"test_396":{"methods":[{"sl":49}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":50}]},"test_398":{"methods":[{"sl":49}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":50}]},"test_401":{"methods":[{"sl":49},{"sl":56}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":50},{"sl":57},{"sl":58},{"sl":59}]},"test_5":{"methods":[{"sl":49}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":50}]},"test_50":{"methods":[{"sl":56}],"name":"Verify that SignerInfoType.getByValue returns certificate for 2","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_51":{"methods":[{"sl":56}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_52":{"methods":[{"sl":49},{"sl":56}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":50},{"sl":57},{"sl":58},{"sl":59}]},"test_66":{"methods":[{"sl":49}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":50}]},"test_76":{"methods":[{"sl":56}],"name":"Verify that SignerInfoType.getByValue returns certificate_chain for 3","pass":true,"statements":[{"sl":57},{"sl":58},{"sl":59}]},"test_96":{"methods":[{"sl":49},{"sl":56}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":50},{"sl":57},{"sl":58},{"sl":59}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [367, 191, 337, 222, 283, 339, 105, 32, 232, 398, 114, 39, 265, 340, 246, 236, 401, 366, 196, 160, 173, 149, 396, 118, 193, 259, 96, 153, 209, 52, 5, 66, 249, 163, 244, 270], [367, 191, 337, 222, 283, 339, 105, 32, 232, 398, 114, 39, 265, 340, 246, 236, 401, 366, 196, 160, 173, 149, 396, 118, 193, 259, 96, 153, 209, 52, 5, 66, 249, 163, 244, 270], [], [], [], [], [], [50, 20, 119, 381, 361, 76, 246, 401, 160, 241, 173, 171, 351, 96, 281, 52, 249, 51, 163, 22], [50, 20, 119, 381, 361, 76, 246, 401, 160, 241, 173, 171, 351, 96, 281, 52, 249, 51, 163, 22], [50, 20, 119, 381, 361, 76, 246, 401, 160, 241, 173, 171, 351, 96, 281, 52, 249, 51, 163, 22], [50, 20, 119, 381, 361, 76, 246, 401, 160, 241, 173, 171, 351, 96, 281, 52, 249, 51, 163, 22], [], [], [], [], [], []]

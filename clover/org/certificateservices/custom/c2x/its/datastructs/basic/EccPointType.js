var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":60,"id":844,"methods":[{"el":42,"sc":2,"sl":40},{"el":46,"sc":2,"sl":44},{"el":58,"sc":2,"sl":51}],"name":"EccPointType","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_105":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_114":{"methods":[{"sl":44}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":45}]},"test_136":{"methods":[{"sl":44}],"name":"Verify that compressed_lsb_y_0 has bytevalue 2","pass":true,"statements":[{"sl":45}]},"test_143":{"methods":[{"sl":44}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":45}]},"test_153":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_160":{"methods":[{"sl":44},{"sl":51}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_163":{"methods":[{"sl":44},{"sl":51}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_164":{"methods":[{"sl":51}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_168":{"methods":[{"sl":51}],"name":"Verify that EccPointType.getByValue returns compressed_lsb_y_0 for 2","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_173":{"methods":[{"sl":44},{"sl":51}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_186":{"methods":[{"sl":44},{"sl":51}],"name":"Verify that eCEISEncryptSymmetricKey and eCEISDecryptSymmetricKey encrypts and decrypts symmetric key correcly.","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_191":{"methods":[{"sl":44}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":45}]},"test_193":{"methods":[{"sl":44}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":45}]},"test_196":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_20":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_203":{"methods":[{"sl":51}],"name":"Verify that EccPointType.getByValue returns uncompressed for 4","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_209":{"methods":[{"sl":44}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":45}]},"test_212":{"methods":[{"sl":44}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":45}]},"test_213":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_216":{"methods":[{"sl":51}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_22":{"methods":[{"sl":51}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_222":{"methods":[{"sl":44}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":45}]},"test_232":{"methods":[{"sl":44}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":45}]},"test_234":{"methods":[{"sl":44}],"name":"Verify serialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":45}]},"test_236":{"methods":[{"sl":44}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":45}]},"test_241":{"methods":[{"sl":51}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_246":{"methods":[{"sl":44},{"sl":51}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_249":{"methods":[{"sl":44},{"sl":51}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_259":{"methods":[{"sl":44}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":45}]},"test_26":{"methods":[{"sl":44}],"name":"Verify serialization of EccPoint","pass":true,"statements":[{"sl":45}]},"test_265":{"methods":[{"sl":44}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":45}]},"test_270":{"methods":[{"sl":44}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":45}]},"test_275":{"methods":[{"sl":44}],"name":"Verify that uncompressed has bytevalue 4","pass":true,"statements":[{"sl":45}]},"test_283":{"methods":[{"sl":44}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":45}]},"test_29":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_294":{"methods":[{"sl":51}],"name":"Verify that EccPointType.getByValue returns x_coordinate_only for 0","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_303":{"methods":[{"sl":44}],"name":"Verify serialization of PublicKey","pass":true,"statements":[{"sl":45}]},"test_32":{"methods":[{"sl":44}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":45}]},"test_339":{"methods":[{"sl":44},{"sl":51}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_340":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45}]},"test_346":{"methods":[{"sl":44}],"name":"Verify that x_coordinate_only has bytevalue 0","pass":true,"statements":[{"sl":45}]},"test_351":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_361":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_362":{"methods":[{"sl":51}],"name":"Verify deserialization of EcdsaSignature","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_367":{"methods":[{"sl":44}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":45}]},"test_378":{"methods":[{"sl":44}],"name":"Verify that compressed_lsb_y_1 has bytevalue 3","pass":true,"statements":[{"sl":45}]},"test_381":{"methods":[{"sl":51}],"name":"Verify deserialization","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_39":{"methods":[{"sl":44}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":45}]},"test_396":{"methods":[{"sl":44}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":45}]},"test_398":{"methods":[{"sl":44}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":45}]},"test_401":{"methods":[{"sl":44},{"sl":51}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_47":{"methods":[{"sl":51}],"name":"Verify deserialization of EccPoint","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_5":{"methods":[{"sl":44}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":45}]},"test_51":{"methods":[{"sl":51}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_52":{"methods":[{"sl":44},{"sl":51}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]},"test_55":{"methods":[{"sl":51}],"name":"Verify that EccPointType.getByValue returns compressed_lsb_y_1 for 3","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_59":{"methods":[{"sl":51}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_61":{"methods":[{"sl":51}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_66":{"methods":[{"sl":44}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":45}]},"test_72":{"methods":[{"sl":44}],"name":"Verify serialization of EcdsaSignature","pass":true,"statements":[{"sl":45}]},"test_74":{"methods":[{"sl":51}],"name":"Verify deserialization of PublicKey","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":54}]},"test_84":{"methods":[{"sl":44}],"name":"Verify serialization of Signature","pass":true,"statements":[{"sl":45}]},"test_96":{"methods":[{"sl":44},{"sl":51}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":45},{"sl":52},{"sl":53},{"sl":54}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [136, 303, 367, 191, 222, 283, 339, 378, 105, 232, 32, 398, 114, 212, 39, 213, 265, 340, 72, 246, 236, 234, 346, 401, 196, 160, 186, 173, 275, 143, 396, 84, 26, 193, 259, 96, 153, 209, 52, 5, 66, 249, 163, 270], [136, 303, 367, 191, 222, 283, 339, 378, 105, 232, 32, 398, 114, 212, 39, 213, 265, 340, 72, 246, 236, 234, 346, 401, 196, 160, 186, 173, 275, 143, 396, 84, 26, 193, 259, 96, 153, 209, 52, 5, 66, 249, 163, 270], [], [], [], [], [], [55, 47, 20, 339, 381, 361, 362, 59, 294, 246, 203, 401, 160, 186, 241, 173, 74, 168, 61, 351, 96, 29, 216, 164, 52, 249, 51, 163, 22], [55, 47, 20, 339, 381, 361, 362, 59, 294, 246, 203, 401, 160, 186, 241, 173, 74, 168, 61, 351, 96, 29, 216, 164, 52, 249, 51, 163, 22], [55, 47, 20, 339, 381, 361, 362, 59, 294, 246, 203, 401, 160, 186, 241, 173, 74, 168, 61, 351, 96, 29, 216, 164, 52, 249, 51, 163, 22], [55, 47, 20, 339, 381, 361, 362, 59, 294, 246, 203, 401, 160, 186, 241, 173, 74, 168, 61, 351, 96, 29, 216, 164, 52, 249, 51, 163, 22], [], [], [], [], [], []]

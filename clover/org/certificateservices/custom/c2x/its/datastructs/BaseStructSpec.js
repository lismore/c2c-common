var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":90,"id":5097,"methods":[{"el":53,"sc":2,"sl":44},{"el":63,"sc":2,"sl":55},{"el":88,"sc":2,"sl":66}],"name":"BaseStructSpec","sl":42}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_105":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_106":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_110":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_111":{"methods":[{"sl":44}],"name":"Verify that serialization produces correct output[1]","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_117":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_130":{"methods":[{"sl":55}],"name":"Verify that deserialize decodes the value 0x8888 properly into: 2184","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_132":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_133":{"methods":[{"sl":44}],"name":"Verify that serialize ecodes the value 0x00 properly into: 0x00","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_134":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_137":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_142":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_143":{"methods":[{"sl":44}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_153":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_155":{"methods":[{"sl":55}],"name":"Verify deserialization of EncryptionParameters","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_160":{"methods":[{"sl":44},{"sl":55}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52},{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_162":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_163":{"methods":[{"sl":55}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_164":{"methods":[{"sl":55}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_173":{"methods":[{"sl":55}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_179":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_19":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_196":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_20":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_202":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_206":{"methods":[{"sl":44}],"name":"Verify that serialization produces correct output[2]","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_212":{"methods":[{"sl":44}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_213":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_216":{"methods":[{"sl":55}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_22":{"methods":[{"sl":55}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_226":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_234":{"methods":[{"sl":44}],"name":"Verify serialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_238":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_239":{"methods":[{"sl":44}],"name":"Verify that serialize ecodes the value 0x0a properly into: 0x0a","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_249":{"methods":[{"sl":55}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_25":{"methods":[{"sl":44}],"name":"Verify serialization of CrlSeries","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_250":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_26":{"methods":[{"sl":44}],"name":"Verify serialization of EccPoint","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_28":{"methods":[{"sl":55}],"name":"Verify deserialization of CrlSeries","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_287":{"methods":[{"sl":55}],"name":"Verify that deserialize decodes the value 0x0a properly into: 10","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_29":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_296":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_299":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_303":{"methods":[{"sl":44}],"name":"Verify serialization of PublicKey","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_310":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_319":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_328":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_33":{"methods":[{"sl":44}],"name":"Verify serialization of EncryptionParameters","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_340":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_345":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_348":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_35":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_351":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_354":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_357":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_361":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_362":{"methods":[{"sl":55}],"name":"Verify deserialization of EcdsaSignature","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_37":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_376":{"methods":[{"sl":55}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_381":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_383":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_389":{"methods":[{"sl":44}],"name":"Verify that serialize ecodes the value 0x0888 properly into: 0x8888","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_47":{"methods":[{"sl":55}],"name":"Verify deserialization of EccPoint","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_51":{"methods":[{"sl":55}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_52":{"methods":[{"sl":55}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_53":{"methods":[{"sl":44}],"name":"Verify that serialization produces correct output[0]","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_56":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_57":{"methods":[{"sl":55}],"name":"Verify deserialization of a hash value","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_58":{"methods":[{"sl":55}],"name":"Verify that deserialize decodes the value 0x01 properly into: 1","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_59":{"methods":[{"sl":55}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_6":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_61":{"methods":[{"sl":55}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_63":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_67":{"methods":[{"sl":44}],"name":"Verify serialization of SubjectInfo","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_72":{"methods":[{"sl":44}],"name":"Verify serialization of EcdsaSignature","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_73":{"methods":[{"sl":44}],"name":"Verify serialization of a hash value","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_74":{"methods":[{"sl":55}],"name":"Verify deserialization of PublicKey","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_79":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_83":{"methods":[{"sl":55}],"name":"Verify that deserialize decodes the value 0x00 properly into: 0","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_84":{"methods":[{"sl":44}],"name":"Verify serialization of Signature","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_88":{"methods":[{"sl":44}],"name":"Verify serialization","pass":true,"statements":[{"sl":45},{"sl":46},{"sl":48},{"sl":49},{"sl":52}]},"test_96":{"methods":[{"sl":55}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]},"test_99":{"methods":[{"sl":55}],"name":"Verify deserialization","pass":true,"statements":[{"sl":56},{"sl":57},{"sl":59},{"sl":60},{"sl":62}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [303, 348, 389, 239, 105, 67, 345, 63, 134, 296, 132, 73, 212, 111, 213, 19, 340, 72, 137, 206, 234, 196, 160, 310, 328, 33, 133, 25, 143, 106, 84, 26, 56, 162, 357, 153, 88, 226, 53], [303, 348, 389, 239, 105, 67, 345, 63, 134, 296, 132, 73, 212, 111, 213, 19, 340, 72, 137, 206, 234, 196, 160, 310, 328, 33, 133, 25, 143, 106, 84, 26, 56, 162, 357, 153, 88, 226, 53], [303, 348, 389, 239, 105, 67, 345, 63, 134, 296, 132, 73, 212, 111, 213, 19, 340, 72, 137, 206, 234, 196, 160, 310, 328, 33, 133, 25, 143, 106, 84, 26, 56, 162, 357, 153, 88, 226, 53], [], [303, 348, 389, 239, 105, 67, 345, 63, 134, 296, 132, 73, 212, 111, 213, 19, 340, 72, 137, 206, 234, 196, 160, 310, 328, 33, 133, 25, 143, 106, 84, 26, 56, 162, 357, 153, 88, 226, 53], [303, 348, 389, 239, 105, 67, 345, 63, 134, 296, 132, 73, 212, 111, 213, 19, 340, 72, 137, 206, 234, 196, 160, 310, 328, 33, 133, 25, 143, 106, 84, 26, 56, 162, 357, 153, 88, 226, 53], [], [], [303, 348, 389, 239, 105, 67, 345, 63, 134, 296, 132, 73, 212, 111, 213, 19, 340, 72, 137, 206, 234, 196, 160, 310, 328, 33, 133, 25, 143, 106, 84, 26, 56, 162, 357, 153, 88, 226, 53], [], [], [37, 47, 383, 20, 381, 83, 142, 299, 361, 362, 130, 59, 117, 202, 354, 250, 319, 99, 79, 160, 173, 74, 376, 28, 155, 61, 287, 351, 96, 29, 58, 238, 216, 57, 52, 164, 249, 110, 179, 6, 163, 35, 51, 22], [37, 47, 383, 20, 381, 83, 142, 299, 361, 362, 130, 59, 117, 202, 354, 250, 319, 99, 79, 160, 173, 74, 376, 28, 155, 61, 287, 351, 96, 29, 58, 238, 216, 57, 52, 164, 249, 110, 179, 6, 163, 35, 51, 22], [37, 47, 383, 20, 381, 83, 142, 299, 361, 362, 130, 59, 117, 202, 354, 250, 319, 99, 79, 160, 173, 74, 376, 28, 155, 61, 287, 351, 96, 29, 58, 238, 216, 57, 52, 164, 249, 110, 179, 6, 163, 35, 51, 22], [], [37, 47, 383, 20, 381, 83, 142, 299, 361, 362, 130, 59, 117, 202, 354, 250, 319, 99, 79, 160, 173, 74, 376, 28, 155, 61, 287, 351, 96, 29, 58, 238, 216, 57, 52, 164, 249, 110, 179, 6, 163, 35, 51, 22], [37, 47, 383, 20, 381, 83, 142, 299, 361, 362, 130, 59, 117, 202, 354, 250, 319, 99, 79, 160, 173, 74, 376, 28, 155, 61, 287, 351, 96, 29, 58, 238, 216, 57, 52, 164, 249, 110, 179, 6, 163, 35, 51, 22], [], [37, 47, 383, 20, 381, 83, 142, 299, 361, 362, 130, 59, 117, 202, 354, 250, 319, 99, 79, 160, 173, 74, 376, 28, 155, 61, 287, 351, 96, 29, 58, 238, 216, 57, 52, 164, 249, 110, 179, 6, 163, 35, 51, 22], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]

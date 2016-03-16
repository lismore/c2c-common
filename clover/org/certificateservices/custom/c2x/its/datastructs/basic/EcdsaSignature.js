var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":105,"id":5713,"methods":[{"el":52,"sc":2,"sl":45},{"el":63,"sc":2,"sl":61},{"el":70,"sc":2,"sl":68},{"el":77,"sc":2,"sl":75},{"el":84,"sc":2,"sl":80},{"el":92,"sc":2,"sl":86},{"el":102,"sc":2,"sl":97}],"name":"EcdsaSignature","sl":31}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_103":{"methods":[{"sl":80}],"name":"Verify serialization of RecipientInfo","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_105":{"methods":[{"sl":61},{"sl":80},{"sl":86}],"name":"Verify deserialization and serialization of reference ETSI Certificates works","pass":true,"statements":[{"sl":62},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_117":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization of EciesNistP256EncryptedKey","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_159":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Signed CAM Unrecognized Certificates Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_162":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":51},{"sl":62},{"sl":69},{"sl":76}]},"test_251":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_1","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_253":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_28":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify that signAndEncryptSecureMessage and verifyAndDecryptSecuredMessage both encrypts and signs properly","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_285":{"methods":[{"sl":61},{"sl":86}],"name":"Verify getEncryptionKey","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_292":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify SignSecuredMessage using signer info type: certificate generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_315":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Ticket with a digest as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_345":{"methods":[{"sl":45},{"sl":80}],"name":"Verify serialization of EcdsaSignature","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":82},{"sl":83}]},"test_353":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify signature of reference secure messages from interoperabiltity site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_359":{"methods":[{"sl":80}],"name":"verify that encryptSecureMessage and decryptSecureMessage encrypts and decrypts correctly","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_361":{"methods":[{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":99}]},"test_379":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_401":{"methods":[{"sl":45},{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":99}]},"test_450":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential v1 for interoperability testing","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_457":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":86}],"name":"Verify deserialization of EcdsaSignature","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_466":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_1 ecc point","pass":true,"statements":[{"sl":69}]},"test_479":{"methods":[{"sl":80}],"name":"Verify serialization","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_501":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate RootCA with Encryption Key and Geographic region and verify that all attributes are set.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_530":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a certificate as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_533":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType x_coordinate_only","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_570":{"methods":[{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":99}]},"test_575":{"methods":[{"sl":61},{"sl":80},{"sl":86}],"name":"Verify that findRecipientInfo find correct RecipientInfo","pass":true,"statements":[{"sl":62},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_597":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_622":{"methods":[{"sl":61},{"sl":86}],"name":"Verify getVerificationKey","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_66":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization CA v1 for interoperability testing","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_669":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Ticket and Signed Secured Message v1 for interoperability testing","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_679":{"methods":[{"sl":45},{"sl":68},{"sl":75}],"name":"Generate RootCA without Encryption Key and Geographic region and verify that all other attributes are set.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76}]},"test_682":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a digest as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_694":{"methods":[{"sl":61},{"sl":86}],"name":"Verify that it is possible to parse a SecureMessage generate by interoperability site at https://werkzeug.dcaiti.tu-berlin.de/etsi/ts103097/","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_709":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Signed CAM Message with and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_719":{"methods":[{"sl":80}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_736":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType uncompressed","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_757":{"methods":[{"sl":61},{"sl":68}],"name":"Verify calculateSignatureLength for public algorithm ecdsa_nistp256_with_sha256 and R EccPointType compressed_lsb_y_0","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_779":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with compressed_lsb_y_0 ecc point","pass":true,"statements":[{"sl":69}]},"test_786":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly no signature trailer field","pass":true,"statements":[{"sl":69}]},"test_808":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Ticket with a certificate as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_813":{"methods":[{"sl":61}],"name":"Verify constructors and getters and setters","pass":true,"statements":[{"sl":62}]},"test_819":{"methods":[{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":99}]},"test_846":{"methods":[{"sl":45},{"sl":61},{"sl":68},{"sl":75},{"sl":80},{"sl":86}],"name":"Verify SignSecuredMessage using signer info type: certificate_digest_with_ecdsap256 generates a valid signature and that verifySecuredMessage can verify it.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":62},{"sl":69},{"sl":76},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_857":{"methods":[{"sl":80}],"name":"Verify serialization","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_863":{"methods":[{"sl":61},{"sl":80},{"sl":86}],"name":"Verify that serializeCertWithoutSignature encodes the certificate without the signature correcly","pass":true,"statements":[{"sl":62},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_868":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Enrollment Credential with a certificate chain as signer info","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_880":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":86}],"name":"Verify deserialization ofSignature","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_888":{"methods":[{"sl":61},{"sl":68}],"name":"Verify that serializeDataToBeSignedInSecuredMessage serializes according to signature verification it ETSI specifification","pass":true,"statements":[{"sl":62},{"sl":69}]},"test_915":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Signed DENM Message and verify that all required fields are set and signature verifies.","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_949":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_95":{"methods":[{"sl":61},{"sl":86}],"name":"Verify deserialization","pass":true,"statements":[{"sl":62},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_952":{"methods":[{"sl":45},{"sl":80}],"name":"Verify serialization of Signature","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":82},{"sl":83}]},"test_959":{"methods":[{"sl":45},{"sl":68},{"sl":75},{"sl":80}],"name":"Generate Authorization Authority and verify that it is signed by the Root CA","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76},{"sl":82},{"sl":83}]},"test_963":{"methods":[{"sl":45},{"sl":68},{"sl":75}],"name":"Test to generate ITS ECDSA Signature and then verify the signature for algorithm: ecdsa_nistp256_with_sha256","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":69},{"sl":76}]},"test_965":{"methods":[{"sl":61},{"sl":68},{"sl":75},{"sl":86}],"name":"Test to verifyCertificate","pass":true,"statements":[{"sl":62},{"sl":69},{"sl":76},{"sl":88},{"sl":89},{"sl":90},{"sl":91}]},"test_969":{"methods":[{"sl":45},{"sl":97}],"name":"Verify toString","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":51},{"sl":99}]},"test_970":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with uncompressed ecc point","pass":true,"statements":[{"sl":69}]},"test_973":{"methods":[{"sl":80}],"name":"Verify getEncoded","pass":true,"statements":[{"sl":82},{"sl":83}]},"test_980":{"methods":[{"sl":68}],"name":"Verify serializeTotalSignedTrailerLength calculates signature trailing fields correctly signature trailer field with x_coordinate_only ecc point","pass":true,"statements":[{"sl":69}]},"test_99":{"methods":[{"sl":80}],"name":"Verify serialization","pass":true,"statements":[{"sl":82},{"sl":83}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [868, 450, 162, 808, 292, 345, 963, 952, 401, 253, 501, 915, 66, 379, 969, 669, 709, 846, 682, 530, 28, 159, 315, 679, 959], [868, 450, 162, 808, 292, 345, 963, 952, 401, 253, 501, 915, 66, 379, 969, 669, 709, 846, 682, 530, 28, 159, 315, 679, 959], [868, 450, 162, 808, 292, 345, 963, 952, 401, 253, 501, 915, 66, 379, 969, 669, 709, 846, 682, 530, 28, 159, 315, 679, 959], [868, 450, 162, 808, 292, 345, 963, 952, 401, 253, 501, 915, 66, 379, 969, 669, 709, 846, 682, 530, 28, 159, 315, 679, 959], [162], [], [868, 450, 162, 808, 292, 345, 963, 952, 401, 253, 501, 915, 66, 379, 969, 669, 709, 846, 682, 530, 28, 159, 315, 679, 959], [], [], [], [], [], [], [], [], [], [457, 575, 251, 736, 162, 292, 533, 117, 622, 949, 694, 353, 888, 597, 863, 285, 105, 880, 813, 846, 95, 757, 28, 965], [457, 575, 251, 736, 162, 292, 533, 117, 622, 949, 694, 353, 888, 597, 863, 285, 105, 880, 813, 846, 95, 757, 28, 965], [], [], [], [], [], [868, 457, 251, 980, 450, 466, 736, 162, 808, 292, 533, 970, 963, 253, 501, 353, 915, 888, 66, 779, 379, 880, 669, 709, 846, 682, 786, 757, 530, 28, 159, 965, 315, 679, 959], [868, 457, 251, 980, 450, 466, 736, 162, 808, 292, 533, 970, 963, 253, 501, 353, 915, 888, 66, 779, 379, 880, 669, 709, 846, 682, 786, 757, 530, 28, 159, 965, 315, 679, 959], [], [], [], [], [], [868, 457, 450, 162, 808, 292, 963, 253, 501, 353, 915, 66, 379, 880, 669, 709, 846, 682, 530, 28, 159, 965, 315, 679, 959], [868, 457, 450, 162, 808, 292, 963, 253, 501, 353, 915, 66, 379, 880, 669, 709, 846, 682, 530, 28, 159, 965, 315, 679, 959], [], [], [], [868, 575, 99, 450, 808, 857, 719, 292, 345, 952, 253, 501, 353, 915, 66, 863, 379, 105, 973, 669, 709, 846, 682, 479, 530, 28, 159, 359, 315, 959, 103], [], [868, 575, 99, 450, 808, 857, 719, 292, 345, 952, 253, 501, 353, 915, 66, 863, 379, 105, 973, 669, 709, 846, 682, 479, 530, 28, 159, 359, 315, 959, 103], [868, 575, 99, 450, 808, 857, 719, 292, 345, 952, 253, 501, 353, 915, 66, 863, 379, 105, 973, 669, 709, 846, 682, 479, 530, 28, 159, 359, 315, 959, 103], [], [], [457, 575, 292, 117, 622, 949, 694, 353, 597, 863, 285, 105, 880, 846, 95, 28, 965], [], [457, 575, 292, 117, 622, 949, 694, 353, 597, 863, 285, 105, 880, 846, 95, 28, 965], [457, 575, 292, 117, 622, 949, 694, 353, 597, 863, 285, 105, 880, 846, 95, 28, 965], [457, 575, 292, 117, 622, 949, 694, 353, 597, 863, 285, 105, 880, 846, 95, 28, 965], [457, 575, 292, 117, 622, 949, 694, 353, 597, 863, 285, 105, 880, 846, 95, 28, 965], [], [], [], [], [], [401, 570, 969, 361, 819], [], [401, 570, 969, 361, 819], [], [], [], [], [], []]
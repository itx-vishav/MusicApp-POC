#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(MyNativeModule, NSObject)

RCT_EXTERN_METHOD(showAlert:(NSString *)title message:(NSString *)message)

@end

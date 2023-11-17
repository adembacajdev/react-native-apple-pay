
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNApplePaySpec.h"

@interface ApplePay : NSObject <NativeApplePaySpec>
#else
#import <React/RCTBridgeModule.h>

@interface ApplePay : NSObject <RCTBridgeModule>
#endif

@end

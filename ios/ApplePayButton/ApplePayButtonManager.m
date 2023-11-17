
#import <PassKit/PassKit.h>
#import "ApplePayButtonManager.h"
#import "ApplePayButtonView.h"

@implementation ApplePayButtonManager

RCT_EXPORT_MODULE(ApplePayButton)

RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)

RCT_CUSTOM_VIEW_PROPERTY(buttonType, NSString, ApplePayButtonView)
{
  if (json) {
    [view setButtonType:[RCTConvert NSString:json]];
  }
}

RCT_CUSTOM_VIEW_PROPERTY(cornerRadius, CGFloat, ApplePayButtonView)
{
  if (json) {
    CGFloat valueAsFloat = [json floatValue];
    CGFloat *pointerToFloat = &valueAsFloat;
    [view setCornerRadius:pointerToFloat];
  }
}

RCT_CUSTOM_VIEW_PROPERTY(buttonStyle, NSString, ApplePayButtonView)
{
  if (json) {
    [view setButtonStyle:[RCTConvert NSString:json]];
  }
}

- (UIView *) view
{
  return [ApplePayButtonView new];
}

@end


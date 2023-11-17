#import <React/RCTView.h>
#import <PassKit/PassKit.h>

@interface ApplePayButtonView : RCTView

@property (strong, nonatomic) NSString *buttonStyle;
@property (strong, nonatomic) NSString *buttonType;
@property (nonatomic) CGFloat *cornerRadius;
@property (nonatomic, readonly) PKPaymentButton *button;
@property (nonatomic, copy) RCTBubblingEventBlock onPress;

@end


import Foundation
import PassKit
import UIKit
import PayPalCheckout

@objc(ApplePaySDK)
class ApplePaySDK: NSObject, PKPaymentAuthorizationControllerDelegate {

    @objc func makePayment(_ total: NSNumber, currencyCode: String, merchantId: String, countryCode: String, resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
      let request = PKPaymentRequest()
      request.merchantIdentifier = merchantId
      request.supportedNetworks = [.visa, .masterCard]
      request.merchantCapabilities = .capability3DS
      request.countryCode = countryCode
      request.currencyCode = currencyCode
      request.paymentSummaryItems = [
          PKPaymentSummaryItem(label: "Total", amount: NSDecimalNumber(value: total.floatValue))
      ]

      let paymentController = PKPaymentAuthorizationController(paymentRequest: request)

      paymentController.delegate = self

      paymentController.present(completion: { (presented: Bool) in
          if presented {
              debugPrint("Presented payment controller", presented)
          } else {
              debugPrint("Failed to present payment controller", presented)
          }
      })

        resolve(nil)
    }

    @objc func canMakePayments(_ resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        let canMakePayments = PKPaymentAuthorizationViewController.canMakePayments()
        resolve(canMakePayments)
    }
}

@available(iOS 10.0, *)
extension ApplePaySDK: PKPaymentAuthorizationViewControllerDelegate {
    func paymentAuthorizationController(_ controller: PKPaymentAuthorizationController, didAuthorizePayment payment: PKPayment, completion: @escaping (PKPaymentAuthorizationStatus) -> Void) {
        debugPrint("controller did authorize:", payment)
        completion(PKPaymentAuthorizationStatus.success)
    }

    func paymentAuthorizationControllerDidFinish(_ controller: PKPaymentAuthorizationController) {
        controller.dismiss(completion: {() in
            debugPrint("apple pay ui dismissed")
        })
    }

    func paymentAuthorizationViewControllerDidFinish(_ controller: PKPaymentAuthorizationViewController) {
        debugPrint("controller did finish")

        controller.dismiss(animated: true, completion: nil)
    }

    func paymentAuthorizationViewControllerWillAuthorizePayment(_ controller: PKPaymentAuthorizationViewController) {
        debugPrint("controller will authorize")
    }
}

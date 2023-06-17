import { useEffect, useState } from 'react';

const PaymentSuccessModal = () => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="modal-notification">
      <div className="modal-notification__payment-success">
        <h2 className="modal-notification__title">
          Payment Successful!
        </h2>

        <p className="modal-notification__thanks">
          Thank you for your purchase.
        </p>

        <p className="modal-notification__additional">
          {`Redirecting to the home page in ${countdown} seconds...`}
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;

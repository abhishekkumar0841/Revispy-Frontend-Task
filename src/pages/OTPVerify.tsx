import React, { useState } from "react";

const OTPVerify: React.FC = () => {
  const [otp, setOtp] = useState(Array(8).fill(""));

  const handleChange = (value: string, index: number) => {
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 7) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    console.log("Entered OTP:", otpCode);
  };

  return (
    <div className=" w-full flex py-8 justify-center">
      <div className="border rounded-xl w-[30rem] py-4 px-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Verify your email
        </h2>
        <p className="text-center mb-6 text-gray-600">
          Enter the 8 digit code you have received on dev***@revispy.com
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-10 h-12 border border-gray-300 rounded-md text-center text-xl focus:border-blue-500 focus:outline-none"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default OTPVerify;

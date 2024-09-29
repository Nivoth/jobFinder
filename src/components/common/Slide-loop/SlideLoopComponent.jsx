import React from 'react'

export default function SlideLoopComponent() {
  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-hidden mt-7">
      <div className="flex animate-loop-scroll space-x-2">
        {[
          "./src/assets/logo-scroll/1717751793114_Squeeze Asia.png",
          "./src/assets/logo-scroll/1713842898415_cih.png",
          "./src/assets/logo-scroll/1717753100824_photo_2024-06-07_16-32-45.jpg",
          "./src/assets/logo-scroll/1717753535370_image_2024-06-07_16-43-40.png",
          "./src/assets/logo-scroll/1666683270184_udaya_logo.png",
          "./src/assets/logo-scroll/1666682979823_canadia_logo.png",
          "./src/assets/logo-scroll/1717754323238_photo_2024-06-07_16-56-41.jpg",
          "./src/assets/logo-scroll/1666671587830_fwd_logo.png",
          "./src/assets/logo-scroll/1713840947545_acleda-bank (1).png",
          "./src/assets/logo-scroll/1718101036014_photo_2024-06-11_17-14-31.jpg",
          "./src/assets/logo-scroll/1713840914008_amk (1).png",
          "./src/assets/logo-scroll/1713840745651_wing.png",
          "./src/assets/logo-scroll/1718101251396_photo_2024-06-11_17-18-24.jpg",
          "./src/assets/logo-scroll/1718101535241_photo_2024-06-11_17-24-46.jpg",
          "./src/assets/logo-scroll/1718183050573_photo_2024-06-12_16-03-18 (1).jpg"
        ].map((src, index) => (
          <div
            key={index}
            className="flex bg-white border w-[295px] h-[100px] justify-center rounded-[5px] shadow flex-shrink-0"
          >
            <img
              className="w-[295px] h-full object-contain"
              src={src}
              alt={`Logo ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

import React from 'react';
import img1 from '/src/assets/logo-scroll/1717751793114_Squeeze Asia.png';
import img2 from '/src/assets/logo-scroll/1713842898415_cih.png';
import img3 from '/src/assets/logo-scroll/1717753100824_photo_2024-06-07_16-32-45.jpg';
import img4 from '/src/assets/logo-scroll/1717753535370_image_2024-06-07_16-43-40.png';
import img5 from '/src/assets/logo-scroll/1666683270184_udaya_logo.png';
import img6 from '/src/assets/logo-scroll/1666682979823_canadia_logo.png';
import img7 from '/src/assets/logo-scroll/1717754323238_photo_2024-06-07_16-56-41.jpg';
import img8 from '/src/assets/logo-scroll/1666671587830_fwd_logo.png';
import img9 from '/src/assets/logo-scroll/1713840947545_acleda-bank (1).png';
import img10 from '/src/assets/logo-scroll/1718101036014_photo_2024-06-11_17-14-31.jpg';
import img11 from '/src/assets/logo-scroll/1713840914008_amk (1).png';
import img12 from '/src/assets/logo-scroll/1713840745651_wing.png';
import img13 from '/src/assets/logo-scroll/1718101251396_photo_2024-06-11_17-18-24.jpg';
import img14 from '/src/assets/logo-scroll/1718101535241_photo_2024-06-11_17-24-46.jpg';
import img15 from '/src/assets/logo-scroll/1718183050573_photo_2024-06-12_16-03-18 (1).jpg';

export default function SlideLoopComponent() {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-hidden mt-7">
      <div className="flex animate-loop-scroll space-x-2">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="flex bg-white border w-[295px] h-[100px] justify-center rounded-[5px] shadow flex-shrink-0"
          >
            <img
              className="w-[295px] h-full object-contain"
              src={imgSrc}
              alt={`Logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

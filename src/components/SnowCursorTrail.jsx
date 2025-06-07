import React, { useEffect, useRef } from "react";

const SnowCursorTrail = () => {
  const containerRef = useRef(null);
  let lastTime = 0;

  useEffect(() => {
    // Ẩn con trỏ mặc định
    document.body.style.cursor = "none";

    const createSnowflake = (x, y) => {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake-box";
      snowflake.style.left = `${x}px`;
      snowflake.style.top = `${y}px`;

      containerRef.current?.appendChild(snowflake);

      setTimeout(() => {
        snowflake.remove();
      }, 1200); // Biến mất sau 1.2s
    };

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime > 40) { // Throttle: giới hạn tạo hạt mỗi 40ms
        for (let i = 0; i < 3; i++) {
          const offsetX = (Math.random() - 0.5) * 10;
          const offsetY = (Math.random() - 0.5) * 10;
          createSnowflake(e.clientX + offsetX, e.clientY + offsetY);
        }
        lastTime = now;
      }

      // Cập nhật vị trí chuột bằng CSS variable
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Dọn dẹp sự kiện và khôi phục con trỏ khi component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "default";
      document.body.style.removeProperty('--mouse-x');
      document.body.style.removeProperty('--mouse-y');
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-150" />
  );
};

export default SnowCursorTrail;
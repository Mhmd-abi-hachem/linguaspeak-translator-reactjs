function DotBackground({ children }) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-[#f9f6f6f8] ">
        <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#d4d4d4_1px,transparent_1px)] dark:[background-image:radial-gradient(#404040_1px,transparent_1px)] opacity-30 sm:opacity-50 md:opacity-90 sm:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />
        <div className="absolute inset-0 bg-[#f9f6f6f8] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-90" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}

export default DotBackground;

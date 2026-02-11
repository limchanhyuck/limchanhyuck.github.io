export default function RopeDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <svg
        viewBox="0 0 800 20"
        className="w-full max-w-4xl h-5"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 Q50,0 100,10 T200,10 T300,10 T400,10 T500,10 T600,10 T700,10 T800,10"
          stroke="#A89279"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0,12 Q50,22 100,12 T200,12 T300,12 T400,12 T500,12 T600,12 T700,12 T800,12"
          stroke="#8B7355"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

import Image from 'next/image'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={className}>
      <Image 
        src="/logo.png"
        alt="Logo"
        width={40}
        height={40}
        className="w-auto h-auto"
      />
    </div>
  )
}
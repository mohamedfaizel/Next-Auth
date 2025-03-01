'use client';
import {HeroUIProvider} from "@heroui/react";

interface ProviderProps {
    children: React.ReactNode
}

function Providers({children}:ProviderProps) {
  return (
    <HeroUIProvider>{children}</HeroUIProvider>
  )
}

export default Providers
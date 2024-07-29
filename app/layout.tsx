import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import HP_Footer from "@/components/HP_Footer"
import Provider from "./Provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'VilmaoDocs',
  description: 'Your go-to collaborative document editor',
}

export default function RootLayout({ children }:  {children: React.ReactNode}) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
      variables: { 
        colorPrimary: "#3371FF" ,
        fontSize: '16px'
      },
    }}
    >
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          {children}
          <HP_Footer /> 
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  )
}

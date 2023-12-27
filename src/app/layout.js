'use client'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import ReduxProvider from '@/redux/ReduxProvider'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {
  const path = usePathname();

  return (
    <html lang="en">
    <head>
      <title>Visibility Pack</title>
    </head>
    <body>
      <ThemeProvider
      attribute="class"
      defaultTheme="light"
      breakpoints={["xxl", "xl", "lg", "md", "sm", "xs"]}
      minBreakpoint= "xs">
        <NextUIProvider>
          <ReduxProvider>
            <div className="flex w-screen font-serif">
              {path === "/" ? null : <div> </div>} {children}
            </div>
          </ReduxProvider>
        </NextUIProvider>
      </ThemeProvider>
    </body>
  </html>
  )
}

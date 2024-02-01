import { crimsonText } from '../utils/fonts';
import 'react-tooltip/dist/react-tooltip.css'
import './globals.css'
import '@fontsource/crimson-text';
import { SpeedInsights } from '@vercel/speed-insights/next';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={crimsonText.className}>
          {children}
          <SpeedInsights/>
      </body>
    </html>
  )
}

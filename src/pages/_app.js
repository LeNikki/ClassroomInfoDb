import '@/styles/globals.css'

// const poppins = Poppins ({
//   weight: ['300'],
// subsets: ['latin']
// })
export default function App({ Component, pageProps }) {
  return (
    <main >
    <Component {...pageProps} className='bg-slate-300 h-full'/>
    </main>
  )
 
}

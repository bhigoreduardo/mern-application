import { ClipLoader } from 'react-spinners'

export default function Loading() {
  return (
    <section className="fixed flex items-center justify-center z-20 top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-40">
      <ClipLoader speedMultiplier={1} color="#fff" size={60} />
    </section>
  )
}

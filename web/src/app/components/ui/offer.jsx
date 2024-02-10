export default function Offer() {
  const deadlineAt = [1, 12, 34, 54]

  return (
    <div className="flex flex-col gap-2">
      <span className="uppercase text-center font-semibold text-base">
        a oferta termina em
      </span>
      <ul className="flex items-center justify-center gap-1">
        {deadlineAt.map((item, i) => (
          <li
            key={i}
            className="w-8 h-8 bg-gray-100 text-gray-900 rounded-sm p-1 text-center relative [&:not(:last-of-type)]:relative [&:not(:last-of-type)]:before:absolute [&:not(:last-of-type)]:before:content-[':'] [&:not(:last-of-type)]:before:-right-1"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

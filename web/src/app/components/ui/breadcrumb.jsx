export default function Breadcrumb() {
  const pathlinks = ['Início', 'Masculino', 'Sapatos']

  return (
    <ul className="flex items-center gap-1 text-sm text-gray-900">
      {pathlinks.map((item, i) => (
        <li key={i} className="[&:not(:last-of-type)]:after:content-['/'] [&:not(:last-of-type)]:after:px-1 last-of-type:text-gray-500">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Review() {
  return (
    <div className="flex items-end gap-2">
      <div className="flex items-center text-xs text-yellow-500">
        {Array.from({ length: 3 }).map((_, i) => (
          <i key={i} className="ri-star-fill" />
        ))}
        <i className="ri-star-half-line" />
        <i className="ri-star-line" />
      </div>
      <span className="text-xs text-gray-500">(2.389)</span>
    </div>
  )
}

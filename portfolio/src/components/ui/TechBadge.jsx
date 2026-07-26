export default function TechBadge({ name, color }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium glass border border-blue-500/12 text-slate-400 hover:text-slate-200 hover:border-blue-500/30 transition-all duration-200 cursor-default"
    >
      {name}
    </span>
  )
}

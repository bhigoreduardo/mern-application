import SocialIcons from '../../../ui/icons/social-icon'

export default function ContactNav() {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-semibold text-white text-base uppercase">
        Funcionamento
      </h4>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-400">Seg. à Sex: 8-18h</span>
        <span className="text-sm text-gray-400">Sáb: 8-12h</span>
      </div>
      <h4 className="font-semibold text-white text-base uppercase">Siga nos</h4>
      <div className="flex items-center gap-3">
        <SocialIcons />
      </div>
    </div>
  )
}

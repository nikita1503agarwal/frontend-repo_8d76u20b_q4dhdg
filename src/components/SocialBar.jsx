import { Mail, Linkedin, PhoneCall } from 'lucide-react'

export default function SocialBar(){
  return (
    <div className="flex items-center gap-2">
      <a href="mailto:hello@awaiskhan.dev" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90" aria-label="Email">
        <Mail size={18} />
      </a>
      <a href="https://www.linkedin.com/in/awaiskhan" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90" aria-label="LinkedIn">
        <Linkedin size={18} />
      </a>
      <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90" aria-label="WhatsApp">
        <PhoneCall size={18} />
      </a>
    </div>
  )
}

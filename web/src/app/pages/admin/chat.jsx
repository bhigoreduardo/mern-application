import ChatList from '../../components/ui/chat/list'
import ChatMessage from '../../components/ui/chat'

export default function Chat() {
  return (
    <section className="flex-grow flex flex-col gap-6">
      <div className="flex gap-6">
        <ChatList />
        <ChatMessage isAdmin />
      </div>
    </section>
  )
}

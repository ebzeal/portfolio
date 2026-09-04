'use client'

import Image from 'next/image'
import { FormEvent, useEffect, useRef, useState } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const API_URL = (process.env.NEXT_PUBLIC_CHAT_API_URL || 'http://localhost:8000').replace(/\/$/, '')
const SESSION_KEY = 'digital-twin-session-id'

type ChatbotProps = {
  onActiveChange?: (active: boolean) => void
}

export function Chatbot({ onActiveChange }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi, I’m Sola’s AI assistant. Ask me about his experience, projects, or how he approaches engineering.",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const sessionId = useRef<string | null>(null)
  const messagesContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    sessionId.current = window.localStorage.getItem(SESSION_KEY)
  }, [])

  useEffect(() => {
    const container = messagesContainer.current
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
    }
  }, [messages, isLoading])

  useEffect(() => {
    onActiveChange?.(isFocused || isLoading)
  }, [isFocused, isLoading, onActiveChange])

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = input.trim()
    if (!message || isLoading) return

    setInput('')
    setError('')
    setIsLoading(true)
    setMessages((current) => [...current, { role: 'user', content: message }])

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, session_id: sessionId.current }),
      })

      if (!response.ok) throw new Error('The digital twin is unavailable right now.')

      const data: { response: string; session_id: string } = await response.json()
      sessionId.current = data.session_id
      window.localStorage.setItem(SESSION_KEY, data.session_id)
      setMessages((current) => [...current, { role: 'assistant', content: data.response }])
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <aside
      className="w-full overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/80 shadow-2xl shadow-sky-950/20 backdrop-blur-sm"
      aria-label="Chat with Sola's digital twin"
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false)
        }
      }}
    >
      <div className="flex items-center gap-3 border-b border-slate-700/70 px-5 py-4">
        <div className="relative">
          <Image src="/images/sola-ajayi.png" alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" aria-hidden="true" />
        </div>
        <div>
          <h2 className="font-semibold text-slate-100">Ask me about my work</h2>
          <p className="text-xs text-slate-400">AI-powered · Usually replies instantly</p>
        </div>
      </div>

      <div ref={messagesContainer} className="h-72 space-y-3 overflow-y-auto px-4 py-5" aria-live="polite">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <p className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              message.role === 'user'
                ? 'rounded-br-md bg-sky-500 text-white'
                : 'rounded-bl-md bg-slate-800 text-slate-200'
            }`}>
              {message.content}
            </p>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl rounded-bl-md bg-slate-800 px-4 py-3" aria-label="Digital twin is responding">
              {[0, 1, 2].map((dot) => <span key={dot} className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400" />)}
            </div>
          </div>
        )}
      </div>

      <form onSubmit={sendMessage} className="border-t border-slate-700/70 p-4">
        {error && <p className="mb-2 text-xs text-rose-400" role="alert">{error}</p>}
        <div className="flex items-end gap-2 rounded-xl border border-slate-600 bg-slate-950/60 p-2 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <label htmlFor="digital-twin-message" className="sr-only">Message Sola&apos;s digital twin</label>
          <textarea
            id="digital-twin-message"
            rows={1}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                event.currentTarget.form?.requestSubmit()
              }
            }}
            placeholder="Ask me about Sola..."
            className="max-h-28 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500"
          />
          <button type="submit" disabled={!input.trim() || isLoading} className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-sky-500 text-white transition-colors hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Send message">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m5 12 14-7-4 14-3-6-7-1Z" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] text-slate-500">AI responses may occasionally be inaccurate.</p>
      </form>
    </aside>
  )
}

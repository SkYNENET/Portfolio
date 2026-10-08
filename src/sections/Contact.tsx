import { useState, type FormEvent } from 'react'
import { Mail, Code2, Download, Send } from 'lucide-react'
import { profile } from '../data/profile'
import './Contact.css'

type Fields = { name: string; email: string; message: string }
type Status = 'idle' | 'success' | 'error'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(f: Fields): Partial<Fields> {
  const e: Partial<Fields> = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!emailRe.test(f.email.trim())) e.email = 'Please enter a valid email address.'
  if (f.message.trim().length < 10) e.message = 'Your message should be at least 10 characters.'
  return e
}

export default function Contact() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<Fields>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (k: keyof Fields) => (ev: { target: { value: string } }) =>
    setFields((f) => ({ ...f, [k]: ev.target.value }))

  function onSubmit(ev: FormEvent) {
    ev.preventDefault()
    const errs = validate(fields)
    setErrors(errs)
    if (Object.keys(errs).length) {
      setStatus('error')
      return
    }
    // TODO: replace this mailto fallback with a real backend (Formspree, Resend
    // or a Supabase edge function): POST `fields` as JSON, then set status
    // to 'success' or 'error' based on the response.
    try {
      const subject = encodeURIComponent(`Portfolio contact from ${fields.name.trim()}`)
      const body = encodeURIComponent(`${fields.message.trim()}\n\n${fields.name.trim()}\n${fields.email.trim()}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('success')
      setFields({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Let's work together</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p>{profile.lookingFor}. Feel free to reach out, I'd love to hear from you.</p>
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" /> {profile.email}
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noopener noreferrer">
              <Code2 size={18} aria-hidden="true" /> GitHub
            </a>
            <a className="btn btn-ghost" href={profile.cvUrl} download>
              <Download size={18} aria-hidden="true" /> Download my CV
            </a>
          </div>
          <form className="card contact-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" type="text" autoComplete="name" value={fields.name} onChange={update('name')}
                aria-invalid={!!errors.name} aria-describedby={errors.name ? 'c-name-err' : undefined} />
              {errors.name && <span id="c-name-err" className="field-error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" type="email" autoComplete="email" value={fields.email} onChange={update('email')}
                aria-invalid={!!errors.email} aria-describedby={errors.email ? 'c-email-err' : undefined} />
              {errors.email && <span id="c-email-err" className="field-error">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="c-message">Message</label>
              <textarea id="c-message" rows={5} value={fields.message} onChange={update('message')}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? 'c-message-err' : undefined} />
              {errors.message && <span id="c-message-err" className="field-error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary">
              <Send size={18} aria-hidden="true" /> Send message
            </button>
            <div role="status" aria-live="polite">
              {status === 'success' && (
                <p className="form-status form-success">Your email app should open with the message ready to send.</p>
              )}
              {status === 'error' && (
                <p className="form-status form-fail">
                  Something went wrong. Please check the fields or email me directly at {profile.email}.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

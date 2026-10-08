// All the text of the portfolio lives here. Replace the placeholders.
// `cover` is optional: drop an image in /public/covers and set cover: '/covers/my-game.png'.
// Without it, a soft gradient (`tone`) is used.

export type Kind = 'game' | 'map' | 'web'

export interface Entry {
  name: string
  kind: Kind
  tagline: string
  link: string
  tone: [string, string]
  cover?: string
  meta?: string // e.g. "1.2M visits"
  featured?: boolean
}

export interface Community {
  name: string
  platform: string // Discord, Roblox Group, ...
  members?: string
  link: string
  tone: [string, string]
}

export const profile = {
  name: 'Your Name',
  role: 'Roblox & Full Stack Developer',
  status: 'Open to internship · next year',
  bio: 'I build Roblox games and web applications. This is my library: everything I have shipped, one click away.',
  email: 'you@example.com',
  github: 'https://github.com/your-username',
  cv: '/cv.pdf',
}

export const entries: Entry[] = [
  {
    name: 'Game One',
    kind: 'game',
    tagline: 'One sentence on what players do and what you built.',
    link: 'https://www.roblox.com/',
    tone: ['#ffb36b', '#ff6b8b'],
    meta: 'Luau · DataStore',
    featured: true,
  },
  {
    name: 'Game Two',
    kind: 'game',
    tagline: 'Short pitch of the game.',
    link: 'https://www.roblox.com/',
    tone: ['#7ec8ff', '#6b7bff'],
    meta: 'Luau',
  },
  {
    name: 'Game Three',
    kind: 'game',
    tagline: 'Short pitch of the game.',
    link: 'https://www.roblox.com/',
    tone: ['#9be39b', '#2fb4a0'],
    meta: 'Luau',
  },
  {
    name: 'Map One',
    kind: 'map',
    tagline: 'A map or experience you designed.',
    link: 'https://www.roblox.com/',
    tone: ['#c9a7ff', '#7a5cff'],
    meta: 'Building · Lighting',
  },
  {
    name: 'Map Two',
    kind: 'map',
    tagline: 'A map or experience you designed.',
    link: 'https://www.roblox.com/',
    tone: ['#ffd36b', '#ff9a4d'],
    meta: 'Building',
  },
  {
    name: 'Web Project One',
    kind: 'web',
    tagline: 'A full stack app and its stack.',
    link: 'https://github.com/',
    tone: ['#a8b3c7', '#4a5568'],
    meta: 'React · TypeScript · Supabase',
  },
  {
    name: 'Web Project Two',
    kind: 'web',
    tagline: 'A full stack app and its stack.',
    link: 'https://github.com/',
    tone: ['#8fd3e8', '#3a86a8'],
    meta: 'Next.js · PostgreSQL',
  },
]

export const communities: Community[] = [
  {
    name: 'Community One',
    platform: 'Discord',
    members: '1.2k members',
    link: 'https://discord.com/',
    tone: ['#8c9eff', '#5865f2'],
  },
  {
    name: 'Group Two',
    platform: 'Roblox Group',
    members: '800 members',
    link: 'https://www.roblox.com/',
    tone: ['#ff9aa8', '#ff5a73'],
  },
  {
    name: 'Community Three',
    platform: 'Discord',
    link: 'https://discord.com/',
    tone: ['#8fe0b5', '#2fb36f'],
  },
]

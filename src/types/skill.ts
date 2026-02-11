export interface Skill {
  name: string
  icon: string
  level: number
}

export interface SkillCategory {
  [key: string]: Skill[]
}

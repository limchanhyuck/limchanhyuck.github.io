import type { SkillCategory } from '../types/skill'

export const skills: SkillCategory = {
  Backend: [
    { name: 'Java', icon: 'java', level: 85 },
    { name: 'Spring Boot', icon: 'spring', level: 80 },
    { name: 'Python', icon: 'python', level: 65 },
  ],
  Database: [
    { name: 'MySQL', icon: 'mysql', level: 80 },
    { name: 'PostgreSQL', icon: 'postgresql', level: 70 },
    { name: 'Redis', icon: 'redis', level: 70 },
  ],
  'ORM / Data Access': [
    { name: 'JPA (Hibernate)', icon: 'hibernate', level: 75 },
    { name: 'MyBatis', icon: 'mybatis', level: 75 },
  ],
  Frontend: [
    { name: 'JavaScript', icon: 'javascript', level: 70 },
    { name: 'React', icon: 'react', level: 65 },
  ],
  DevOps: [
    { name: 'Docker', icon: 'docker', level: 80 },
    { name: 'Linux', icon: 'linux', level: 70 },
  ],
}

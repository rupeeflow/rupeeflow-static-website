export type cardData = {
  imgLink: string
  title: string

  buttonlink: string
}

export interface cardProps {
  CardData: cardData
}

export type faqData = {
  question: string
  answer: string
}

export type navlist = {
   id: string
  desc?: string
  label: string
  icon: string
  href: string
  
}
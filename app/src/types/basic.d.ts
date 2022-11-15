import { Attribute } from '@/types/attribute'
import { Activity } from '@/types/activity'
import { Qualification } from '@/types/qualification'

export type Basic = {
  attribute: Attribute
  activities: Activity[]
  qualifications: Qualification[]
}

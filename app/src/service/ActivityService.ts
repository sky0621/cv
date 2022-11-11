import axios from 'axios'
import { Activity } from '@/types/activity'

export class ActivityService {
  getActivitiesInfo(): Promise<Activity[]> {
    return axios.get('data/activities.json').then((res) => res.data)
  }
}

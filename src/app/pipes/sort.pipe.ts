import { Pipe, PipeTransform } from '@angular/core'
import { RandomTask } from '../services/tasks.service'

interface PrioSortedTask {
  prio1: RandomTask[]
  prio2: RandomTask[]
  prio3: RandomTask[]
}

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(list: RandomTask[]): PrioSortedTask {
    let prio1: RandomTask[] = []
    let prio2: RandomTask[] = []
    let prio3: RandomTask[] = []

    list.sort((a, b) => {
      return a.dueDate.getTime() - b.dueDate.getTime()
    })
    list.forEach((i) => {
      if (i.priority === 1) {
        prio1.push(i)
      } else if (i.priority === 2) {
        prio2.push(i)
      } else if (i.priority === 3) {
        prio3.push(i)
      }
    })
    return { prio1, prio2, prio3 }
  }
}

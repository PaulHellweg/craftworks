import { Injectable } from '@angular/core'
import { LoremIpsum } from 'lorem-ipsum'
import { Subject } from 'rxjs'
import * as uuid from 'uuid'
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public task: Subject<Task> = new Subject()

  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  })

  //add random task to localStorage
  addRandomTasks(): void {
    const randomTask: Task = {
      title: this.lorem.generateWords(1),
      description: this.lorem.generateSentences(1),
      priority: 1,
      dueDate: this.getRandomDate(),
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      id: uuid.v4(),
    }
    this.task.next(randomTask)
  }

  //add random date between 01.07.2023 and 01.08.2023
  getRandomDate(): Date {
    const start = new Date(2023, 6, 1)
    const end = new Date(2023, 7, 1)
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
  }
}

export interface Task {
  id: string
  dueDate: Date
  title: string
  description: string
  priority: 1 | 2 | 3
  color: string
}

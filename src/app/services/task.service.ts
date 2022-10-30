import { Injectable } from '@angular/core'
import { LoremIpsum } from 'lorem-ipsum'
import { Subject } from 'rxjs'
import * as uuid from 'uuid'
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public randomTask = new Subject<RandomTask>()

  public startDate: Date = new Date(2023, 6, 1)
  public endDate: Date = new Date(2024, 7, 1)

  private lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  })

  //add random task with described criteria to localStorage and to task subject
  public addRandomTasks(count: number): void {
    const task: RandomTask = {
      title: this.lorem.generateWords(1),
      description: this.lorem.generateSentences(1),
      priority: (count % 3) + 1,
      dueDate: this.getRandomDate(),
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      id: uuid.v4(),
    }
    let tasklist = JSON.parse(localStorage.getItem('tasklist') || '[]')
    tasklist.push(task.id)
    localStorage.setItem('tasklist', JSON.stringify(tasklist))
    localStorage.setItem(task.id, JSON.stringify(task))
    this.randomTask.next(task)
  }

  //add random date between 01.07.2023 and 01.08.2023
  private getRandomDate(): Date {
    return new Date(
      this.startDate.getTime() +
        Math.random() * (this.endDate.getTime() - this.startDate.getTime())
    )
  }
}

export interface RandomTask {
  id: string
  dueDate: Date
  title: string
  description: string
  priority: number // 1-3
  color: string
}

import { Injectable } from '@angular/core'
import { LoremIpsum } from 'lorem-ipsum'
import { Observable } from 'rxjs'
import { StateService } from './state.service'
import * as uuid from 'uuid'

interface TaskState {
  tasks: RandomTask[]
  selectedtaskId: string | null
}

export interface RandomTask {
  id: string
  dueDate: Date
  title: string
  description: string
  priority: number // 1-3
  color: string
}

const initialState: TaskState = {
  tasks: [],
  selectedtaskId: null,
}

@Injectable({
  providedIn: 'root',
})
export class TasksService extends StateService<TaskState> {
  tasks$: Observable<RandomTask[]> = this.select((state) => state.tasks)
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

  public startDate: Date = new Date(2023, 6, 1)
  public endDate: Date = new Date(2024, 7, 1)

  selectedtask$: Observable<RandomTask | undefined> = this.select((state) => {
    return state.tasks.find((item) => item.id === state.selectedtaskId)
  })

  constructor() {
    super(initialState)
    Object.keys(localStorage).forEach((key) => {
      if (key) {
        this.addTask(JSON.parse(localStorage.getItem(key) || ''))
      } else {
        this.addRandomTasks(0)
      }
    })
  }

  addTask(task: RandomTask) {
    localStorage.setItem(task.id, JSON.stringify(task))
    this.setState({ tasks: [...this.state.tasks, task] })
  }

  deleteTask(id: string) {
    localStorage.removeItem(id)
    this.setState({
      tasks: this.state.tasks.filter((item) => item.id !== id),
    })
  }

  updateTask(task: RandomTask) {
    localStorage.setItem(task.id, JSON.stringify(task))
    this.setState({
      tasks: this.state.tasks.map((item) =>
        item.id === task.id ? { ...item, ...task } : item
      ),
    })
  }

  addRandomTasks(count: number): void {
    let newTask = {
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      description: this.lorem.generateSentences(1),
      dueDate: this.getRandomDate(),
      id: uuid.v4(),
      priority: (count % 3) + 1,
      title: this.lorem.generateWords(1),
    }
    setTimeout(() => {
      this.addTask(newTask)
      this.addRandomTasks(++count)
    }, Math.floor(Math.random() * 2000) + 1000)
  }

  //add random date between 01.07.2023 and 01.08.2023
  private getRandomDate(): Date {
    return new Date(
      this.startDate.getTime() +
        Math.random() * (this.endDate.getTime() - this.startDate.getTime())
    )
  }
}

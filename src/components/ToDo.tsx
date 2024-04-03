import React, { memo, useState } from 'react'
import { AnimatePresence, Reorder } from 'framer-motion'

export interface TodoItem {
  id: string
  content: string
  isDone: boolean
}

const Todo = () => {
  const [todoList, setTodoList] = useState<Array<TodoItem>>([
    {
      id: '1',
      content: '吃饭',
      isDone: false
    },
    {
      id: '2',
      content: '睡觉',
      isDone: false
    },
    {
      id: '3',
      content: '打豆豆',
      isDone: false
    }
  ])

  return (
    <Reorder.Group axis="y" values={todoList} onReorder={setTodoList}>
      <AnimatePresence>
        {todoList.map((item) => {
          return (
            <Reorder.Item
              value={item}
              id={item.id}
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="rounded shadow-sm bg-white/30 mt-2 p-2 cursor-pointer hover:shadow transition ease-in-out"
              >
                {item.content}
              </div>
            </Reorder.Item>
          )
        })}
      </AnimatePresence>
    </Reorder.Group>
  )
}

export default memo(Todo)

import React, { memo, useState } from 'react'
import { AnimatePresence, Reorder } from 'framer-motion'

export interface TodoItem {
  id: string
  content: string
}

const Todo = () => {
  const [todoList, setTodoList] = useState<Array<TodoItem>>([
    {
      id: '1',
      content: '吃饭'
    },
    {
      id: '2',
      content: '睡觉'
    },
    {
      id: '3',
      content: '打豆豆'
    }
  ])

  const removeItem = (id: string) => {
    setTodoList(todoList.filter((item) => item.id !== id))
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement
      const value = target.value.trim()
      if (!value) return
      setTodoList([
        ...todoList,
        {
          id: `${new Date().getTime()}`,
          content: value
        }
      ])
      target.value = ''
    }
  }

  return (
    <Reorder.Group axis="y" values={todoList} onReorder={setTodoList}>
      <AnimatePresence>
        {todoList.map((item) => {
          return (
            <Reorder.Item
              drag
              value={item}
              id={item.id}
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="w-[170px] px-2 py-2.5 cursor-pointer  transition ease-in-out border-b border-dashed"
                onDoubleClick={() => removeItem(item.id)}
              >
                {item.content}
              </div>
            </Reorder.Item>
          )
        })}
        <Reorder.Item
          value={null}
          drag={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <input
            className="w-[170px] bg-transparent mt-2.5 cursor-pointer transition ease-in-out outline-none"
            placeholder="来点灵感！"
            onKeyUp={handleKeyUp}
          />
        </Reorder.Item>
      </AnimatePresence>
    </Reorder.Group>
  )
}

export default memo(Todo)

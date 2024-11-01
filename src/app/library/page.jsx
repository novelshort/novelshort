'use client'

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react"

export default function Library() {
  const books = [
    {
      title: "春天的故事",
      author: "张三",
      cover: "https://picsum.photos/200/300",
    },
    // 添加更多书籍...
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">图书馆</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book, index) => (
          <Card shadow="sm" key={index} isPressable>
            <CardBody className="p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={book.title}
                className="w-full object-cover h-[240px]"
                src={book.cover}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{book.title}</b>
              <p className="text-default-500">{book.author}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
} 
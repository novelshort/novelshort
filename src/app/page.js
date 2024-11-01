'use client'

import { Card, CardBody, Image, Button, CardFooter, CardHeader, Link } from "@nextui-org/react"

// 添加静态小说数据
const staticNovels = [
  {
    id: 1,
    title: "The Mystery of the Blue Pearl",
    author: "Sarah Johnson",
    description: "A thrilling adventure story about a lost artifact and the race to find it before it falls into the wrong hands.",
    cover: "https://source.unsplash.com/random/400x600/?book",
    likes: 156
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    author: "Michael Chen",
    description: "A science fiction tale exploring the consequences of time travel and the choices we make.",
    cover: "https://source.unsplash.com/random/400x600/?novel",
    likes: 243
  },
  {
    id: 3,
    title: "The Last Garden",
    author: "Emily Roberts",
    description: "A touching story about family, growth, and the healing power of nature.",
    cover: "https://source.unsplash.com/random/400x600/?story",
    likes: 189
  },
  {
    id: 4,
    title: "Midnight Chronicles",
    author: "David Wilson",
    description: "Dark fantasy meets mystery in this gripping tale of supernatural detective work.",
    cover: "https://source.unsplash.com/random/400x600/?fantasy",
    likes: 321
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the World of NoverShort Stories
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Enjoy Quality Reading Anytime, Anywhere
          </p>
        </div>
      </section>


      {/* Novels Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Popular Stories</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {staticNovels.map((novel) => (
            <Card 
              key={novel.id} 
              className="hover:scale-105 transition-transform duration-200"
              isPressable
              as={Link}
              href={`/novel/${novel.id}`}
            >
              <CardHeader className="p-0">
                <Image
                  src={novel.cover}
                  alt={novel.title}
                  className="w-full h-[200px] object-cover"
                  radius="none"
                />
              </CardHeader>
              <CardBody className="px-4 py-3">
                <h3 className="text-lg font-bold line-clamp-1">{novel.title}</h3>
                <p className="text-sm text-default-500 mb-2">{novel.author}</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {novel.description}
                </p>
              </CardBody>
              <CardFooter className="px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="text-sm text-default-500">{novel.likes} Likes</span>
                </div>
                <span className="text-sm text-primary">Read More →</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>


      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose NovelShorts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardBody>
              <h3 className="text-xl font-semibold mb-4">Massive Content</h3>
              <p className="text-gray-600">
                Thousands of curated short stories across multiple genres
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="text-xl font-semibold mb-4">Personalized Recommendations</h3>
              <p className="text-gray-600">
                Smart recommendations based on your reading preferences
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="text-xl font-semibold mb-4">Read Anywhere</h3>
              <p className="text-gray-600">
                Multi-device sync and offline downloads for reading on the go
              </p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  )
}

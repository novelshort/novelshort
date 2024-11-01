'use client'

import { useParams } from 'next/navigation'
import { Card, CardBody, Image, Divider, Chip, Button, Link } from "@nextui-org/react"

// 模拟小说数据获取函数
const getNovelById = (id) => {
  // 这里模拟从数据库获取数据
  const novels = {
    1: {
      id: 1,
      title: "时光的倒影",
      author: "梦想家",
      cover: "https://picsum.photos/seed/novel1/300/400",
      description: "一个关于时间旅行的奇幻故事，探索命运与选择的永恒主题。",
      likes: 1234,
      publishDate: "2024-03-15",
      category: "奇幻",
      wordCount: "5000",
      content: `
        第一章 时光的涟漪

        城市的钟楼敲响了十二下，马克站在街角，看着手中那个古老的怀表。表面上的指针不同寻常地逆向转动，这是他第一次注意到这个细节。

        "时间，是个奇妙的东西。"身后突然响起一个苍老的声音。马克转身，看到一��白发苍苍的老人正对着他微笑。

        "有时候，它像河流一样向前流淌；有时候，却又像涟漪一样荡漾开来。"老人继续说道，他的眼神中闪烁着神秘的光芒。

        马克低头再次查看怀表，当他抬起头时，老人已经消失不见。街道上的行人仿佛都静止了，唯有远处传来的钟声依然在回响。

        他突然意识到，自己可能卷入了一个比想象中更加复杂的故事......

        第二章 命运的交织

        回到家后，马克将怀表放在书桌上，借着台灯的光仔细端详着它的每一个细节。表面的玻璃有些浑浊，但能清晰地看到内部精密的齿轮结构。

        就在这时，怀表突然发出一阵微弱的蓝光，马克感觉周围的空气开始扭曲，房间里的一切都变得模糊起来......
      `
    },
    // 可以添加更多小说数据...
  }
  return novels[id]
}

export default function NovelReader() {
  const params = useParams()
  const novel = getNovelById(parseInt(params.id))

  if (!novel) {
    return <div className="text-center py-20">小说不存在</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 小说信息卡片 */}
      <Card className="mb-8">
        <CardBody>
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              src={novel.cover}
              alt={novel.title}
              className="w-full md:w-[200px] h-[300px] object-cover"
              radius="lg"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{novel.title}</h1>
                <p className="text-default-500 mb-4">作者：{novel.author}</p>
                <p className="text-gray-600 mb-4">{novel.description}</p>
                <div className="flex gap-2 flex-wrap">
                  <Chip color="primary" variant="flat">{novel.category}</Chip>
                  <Chip variant="flat">{novel.wordCount}字</Chip>
                  <Chip variant="flat">{novel.publishDate}</Chip>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <Button color="primary">
                  收藏本文
                </Button>
                <Button color="default" variant="bordered">
                  分享
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* 阅读进度控制 */}
      <div className="sticky top-0 bg-background z-10 py-4 mb-8 flex justify-between items-center">
        <Button
          as={Link}
          href="/"
          variant="light"
          startContent={
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
        >
          返回首页
        </Button>
        <div className="flex gap-2">
          <Button variant="bordered">调整字体</Button>
          <Button variant="bordered">夜间模式</Button>
        </div>
      </div>

      {/* 小说内容 */}
      <div className="prose prose-lg max-w-none">
        {novel.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed">
            {paragraph.trim()}
          </p>
        ))}
      </div>

      {/* 底部导航 */}
      <div className="mt-12 flex justify-between items-center">
        <Button variant="light" disabled>
          上一章
        </Button>
        <Button variant="light">
          下一章
        </Button>
      </div>
    </div>
  )
} 
"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const galleryItems = [
  { id: 1, title: "Modern Office Complex", src: "/placeholder.svg?height=300&width=400" },
  { id: 2, title: "Residential High-Rise", src: "/placeholder.svg?height=300&width=400" },
  { id: 3, title: "Highway Interchange", src: "/placeholder.svg?height=300&width=400" },
  { id: 4, title: "Public Library", src: "/placeholder.svg?height=300&width=400" },
  { id: 5, title: "Shopping Mall", src: "/placeholder.svg?height=300&width=400" },
  { id: 6, title: "Sports Stadium", src: "/placeholder.svg?height=300&width=400" },
  { id: 7, title: "University Campus", src: "/placeholder.svg?height=300&width=400" },
  { id: 8, title: "Bridge Construction", src: "/placeholder.svg?height=300&width=400" },
  { id: 9, title: "Industrial Park", src: "/placeholder.svg?height=300&width=400" },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-center">Project Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <div className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.title}
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}


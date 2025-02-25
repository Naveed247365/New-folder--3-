import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "City Center Complex",
    description: "A modern multi-use complex featuring offices, retail spaces, and residential units.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Highway Expansion Project",
    description: "Expansion of a major highway, including new bridges and interchanges.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Waterfront Development",
    description: "Revitalization of the city's waterfront with parks, walkways, and commercial spaces.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "School Renovation",
    description: "Comprehensive renovation and expansion of a local high school.",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-center">Our Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-xl text-center">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-center">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


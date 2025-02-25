import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Building Construction",
    description:
      "From residential to commercial buildings, we handle all aspects of construction with precision and quality.",
  },
  {
    title: "Road Development",
    description: "We specialize in constructing durable and efficient road networks, from highways to local streets.",
  },
  {
    title: "Infrastructure Projects",
    description:
      "Our expertise extends to large-scale infrastructure projects, including bridges, dams, and water supply systems.",
  },
  {
    title: "Renovation and Restoration",
    description: "We breathe new life into existing structures through careful renovation and restoration work.",
  },
  {
    title: "Project Management",
    description: "Our experienced team ensures your project is completed on time and within budget.",
  },
  {
    title: "Consultancy Services",
    description: "We offer expert advice on civil engineering projects, from planning to execution.",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl md:text-4xl font-bold text-center">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl text-center">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-center">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


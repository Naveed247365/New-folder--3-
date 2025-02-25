import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-3xl md:text-4xl font-bold">Abdul Ghaffar & Sons <br />Civil Contractor</h1>
        <p className="mb-8 text-lg md:text-xl">Professional Civil Engineering and Contracting Services</p>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-2xl md:text-3xl font-semibold text-center">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {["Building Construction", "Road Development", "Infrastructure Projects"].map((service) => (
            <Card key={service}>
              <CardHeader>
                <CardTitle className="text-xl text-center">{service}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-center">
                  We provide high-quality {service.toLowerCase()} services with a focus on durability and efficiency.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="mb-4 text-2xl md:text-3xl font-semibold">Why Choose Us?</h2>
        <p className="mb-8 text-sm md:text-base">
          With years of experience and a commitment to excellence, we deliver projects on time and within budget.
        </p>
        <Button variant="outline" size="lg" asChild>
          <Link href="/about">Learn More</Link>
        </Button>
      </section>
    </div>
  )
}


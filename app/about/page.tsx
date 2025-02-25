import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold text-center">About <br /> <br /> Abdul Ghaffar & Sons</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Our History</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Founded in 1980, Abdul Ghaffar & Sons has been a leading name in civil contracting for over four decades.
              Our journey began with small residential projects and has grown to encompass major infrastructure
              developments across the country.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are committed to delivering high-quality construction services that contribute to the development of
              our communities. Our mission is to combine innovative techniques with time-tested practices to create
              structures that stand the test of time.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our strength lies in our team of skilled professionals, including experienced engineers, project managers,
              and craftsmen. We invest in continuous training to stay at the forefront of industry advancements.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Quality in every detail</li>
              <li>Safety as our top priority</li>
              <li>Integrity in all our dealings</li>
              <li>Innovation in our approach</li>
              <li>Commitment to sustainability</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


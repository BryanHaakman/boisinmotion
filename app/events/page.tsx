import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  {
    id: 1,
    name: "Community Kickoff 2024",
    date: "2024-02-01",
    time: "6:00 PM",
    location: "Main Hall",
    status: "upcoming",
  },
  {
    id: 2,
    name: "Workshop: Creative Thinking",
    date: "2024-02-08",
    time: "3:00 PM",
    location: "Studio A",
    status: "upcoming",
  },
  {
    id: 3,
    name: "Networking Mixer",
    date: "2024-02-15",
    time: "7:00 PM",
    location: "Lounge",
    status: "upcoming",
  },
  {
    id: 4,
    name: "Monthly Meetup",
    date: "2024-02-22",
    time: "6:30 PM",
    location: "Conference Room",
    status: "upcoming",
  },
  {
    id: 5,
    name: "Year-End Celebration",
    date: "2023-12-31",
    time: "8:00 PM",
    location: "Main Hall",
    status: "past",
  },
]

export default function EventsPage() {
  const upNextEvent = events.find((event) => event.status === "upcoming")

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Join us for workshops, meetups, and community gatherings
          </p>

          {/* Up Next Highlight */}
          {upNextEvent && (
            <Card className="mb-8 border-primary bg-primary/5">
              <CardHeader>
                <div className="text-sm font-semibold text-primary mb-2">UP NEXT</div>
                <CardTitle className="text-3xl">{upNextEvent.name}</CardTitle>
                <CardDescription className="text-base">
                  {upNextEvent.date} at {upNextEvent.time} • {upNextEvent.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Don&apos;t miss our next event! Join us for an amazing experience.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Events Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Events</CardTitle>
              <CardDescription>Browse all upcoming and past events</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow
                      key={event.id}
                      className={event.id === upNextEvent?.id ? "bg-primary/5" : ""}
                    >
                      <TableCell className="font-medium">{event.name}</TableCell>
                      <TableCell>{event.date}</TableCell>
                      <TableCell>{event.time}</TableCell>
                      <TableCell>{event.location}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            event.status === "upcoming"
                              ? "bg-green-50 text-green-700"
                              : "bg-gray-50 text-gray-700"
                          }`}
                        >
                          {event.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

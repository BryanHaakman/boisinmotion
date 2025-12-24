export default function PodcastPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Podcast</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Listen to our latest episodes and conversations
          </p>

          {/* YouTube Playlist Embed */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl bg-muted">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/videoseries?list=PLrAXtmErZgOeiKm4sgNOknGvNjby9efdf"
              title="YouTube Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="mt-8 text-center text-muted-foreground">
            <p>Subscribe to our channel for more content</p>
          </div>
        </div>
      </div>
    </main>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Exclusive merchandise and products
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">Coming Soon</CardTitle>
              <CardDescription className="text-lg">
                We&apos;re working hard to bring you amazing products
              </CardDescription>
            </CardHeader>
            <CardContent className="py-12">
              <div className="text-6xl mb-4">🛍️</div>
              <p className="text-muted-foreground">
                Our shop will be launching soon with exclusive merchandise, 
                apparel, and digital products. Stay tuned!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardPanel, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'eunjae.dev' },
      { name: 'description', content: 'A fresh TanStack Start + Coss UI site.' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col justify-center gap-6">
        <div className="space-y-4 text-center">
          <Badge variant="info" size="lg" className="mx-auto">
            <Sparkles className="size-4" /> Fresh start
          </Badge>
          <div className="space-y-3">
            <h1 className="text-balance font-semibold text-5xl tracking-tight sm:text-6xl">eunjae.dev</h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              Example page powered by TanStack Start, Tailwind CSS, and Coss UI components.
            </p>
          </div>
        </div>

        <Card className="mx-auto w-full max-w-xl overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="size-5 text-info-foreground" /> Ready to build
            </CardTitle>
            <CardDescription>This repo now has the same app foundation as ej web.</CardDescription>
          </CardHeader>
          <CardPanel className="space-y-4">
            <p className="text-sm leading-6 text-muted-foreground">
              Replace this page with posts, projects, notes, or anything else when the new site shape is ready.
            </p>
            <Button render={<a href="https://tanstack.com/start" target="_blank" rel="noreferrer" />}>
              TanStack Start <ArrowUpRight />
            </Button>
          </CardPanel>
        </Card>
      </section>
    </main>
  )
}

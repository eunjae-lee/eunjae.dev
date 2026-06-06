import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Bell, CheckCircle2, Code2, Layers3, Palette, Search, Sparkles, Zap } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center gap-6">
        <div className="space-y-4 text-center">
          <Badge variant="info" size="lg" className="mx-auto gap-1.5">
            <Sparkles className="size-4" /> Coss particles
          </Badge>
          <div className="space-y-3">
            <h1 className="text-balance font-semibold text-5xl tracking-tight sm:text-6xl">eunjae.dev</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A small theme playground for TanStack Start, Tailwind CSS, and Coss UI components.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="size-5 text-primary" /> Primary theme
              </CardTitle>
              <CardDescription>Theme tokens across buttons, switches, and active states.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert variant="success">
                <CheckCircle2 />
                <AlertTitle>Theme tokens are live</AlertTitle>
                <AlertDescription>Primary actions follow the default Coss theme in both color schemes.</AlertDescription>
                <AlertAction>
                  <Button size="sm">Primary action</Button>
                </AlertAction>
              </Alert>
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline" render={<a href="https://coss.com/ui/particles" target="_blank" rel="noreferrer" />}>
                  Browse particles <ArrowUpRight />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="size-5 text-primary" /> Input + switch
              </CardTitle>
              <CardDescription>Form particles using the same border and primary tokens.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input type="search" placeholder="Search components…" />
              <div className="flex items-center justify-between rounded-lg border bg-muted/40 px-3 py-2">
                <div>
                  <p className="text-sm font-medium">Live preview</p>
                  <p className="text-xs text-muted-foreground">Switch thumb uses the primary color token.</p>
                </div>
                <Switch defaultChecked aria-label="Toggle live preview" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="size-5 text-primary" /> Accordion
              </CardTitle>
              <CardDescription>Disclosure particle</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion defaultValue="stack">
                <AccordionItem value="stack">
                  <AccordionTrigger>What is this?</AccordionTrigger>
                  <AccordionContent>A compact Coss UI particle showcase for the new site shell.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="theme">
                  <AccordionTrigger>Where is the theme?</AccordionTrigger>
                  <AccordionContent>Global tokens live in src/styles.css and flow into every component.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers3 className="size-5 text-primary" /> Tabs
              </CardTitle>
              <CardDescription>Segmented content particle</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="stack">
                <TabsList>
                  <TabsTrigger value="stack">Stack</TabsTrigger>
                  <TabsTrigger value="status">Status</TabsTrigger>
                </TabsList>
                <TabsContent value="stack" className="pt-3 text-sm text-muted-foreground">
                  TanStack Start, Tailwind, Base UI, and Coss components.
                </TabsContent>
                <TabsContent value="status" className="pt-3 text-sm text-muted-foreground">
                  The page is ready for quick visual theme checks.
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="size-5 text-primary" /> Badges
              </CardTitle>
              <CardDescription>Status particles</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="success"><CheckCircle2 /> Live</Badge>
              <Badge variant="info"><Layers3 /> Coss</Badge>
              <Badge variant="warning"><Zap /> Demo</Badge>
              <Badge variant="outline">Theme</Badge>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Open dashboard</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}

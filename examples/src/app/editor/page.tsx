import { CodeEditor } from './Editor'
import { YDocProvider } from '@/lib/provider'
import { getOrCreateDoc } from '@/lib/yserv'

type HomeProps = {
  searchParams: Record<string, string>
}

export default async function Home({ searchParams }: HomeProps) {
  const connectionKey = await getOrCreateDoc(searchParams.doc)

  return (
    <YDocProvider connectionKey={connectionKey} setQueryParam='doc'>
      <CodeEditor />
    </YDocProvider>
  )
}
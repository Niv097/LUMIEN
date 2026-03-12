"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the studio component only when needed
const Studio = dynamic(
  () => import('./Studio'),
  { ssr: false }
)

export default function StudioPage() {
  const [mounted, setMounted] = useState(false)
  const [hasCredentials, setHasCredentials] = useState(false)
  
  useEffect(() => {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const valid = projectId && 
                  projectId !== 'your_project_id_here' && 
                  projectId !== 'demo' &&
                  projectId.length > 5
    setHasCredentials(!!valid)
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        background: '#0a0a0a'
      }}>
        Loading...
      </div>
    )
  }

  if (!hasCredentials) {
    return (
      <div style={{ 
        padding: 60, 
        maxWidth: 600, 
        margin: '0 auto',
        color: 'white',
        fontFamily: 'system-ui, sans-serif',
        background: '#0a0a0a',
        minHeight: '100vh'
      }}>
        <h1 style={{ fontSize: 24, marginBottom: 20 }}>Sanity CMS Not Configured</h1>
        <p style={{ marginBottom: 20, lineHeight: 1.6 }}>
          To use the CMS studio, add your Sanity credentials to <code>.env.local</code>:
        </p>
        <pre style={{ 
          background: '#1a1a1a', 
          padding: 20, 
          borderRadius: 8,
          overflow: 'auto',
          fontSize: 14,
          border: '1px solid #333'
        }}>
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token`}
        </pre>
        <p style={{ marginTop: 20, color: '#888' }}>
          1. Go to <a href="https://sanity.io/manage" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>sanity.io/manage</a> to create a project
        </p>
        <p style={{ marginTop: 8, color: '#888' }}>
          2. Add the above variables to your <code>.env.local</code> file
        </p>
        <p style={{ marginTop: 8, color: '#888' }}>
          3. Restart your dev server
        </p>
      </div>
    )
  }

  return <Studio />
}

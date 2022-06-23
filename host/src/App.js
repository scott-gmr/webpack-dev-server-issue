
import React, { lazy, Suspense } from 'react'

const ExampleModule = lazy(() => import('ExampleModule/ExampleModule'))

const App = () => (
  <div>
    <h1>Host</h1>
    <Suspense fallback="Loading ExampleModule...">
      <ExampleModule/>
    </Suspense>
  </div>
)

export default App
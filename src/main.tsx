import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ItemsProvider from './context/ItemContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </DndProvider>
  </StrictMode>,
)

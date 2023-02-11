import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <MainLayout>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Content
      </div>
    </MainLayout>
  )
}

export default App

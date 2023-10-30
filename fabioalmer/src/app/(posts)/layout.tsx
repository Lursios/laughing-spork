export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
          <h1>This is the post layout</h1>
          {children}
        </div>
    )
  }
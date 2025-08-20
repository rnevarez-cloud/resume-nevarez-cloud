import './index.css';

export default function RootLayout({ children }) {
  return (
    <>
    <div className="center">
        {storedCount && <h4>You are the {storedCount} visitor!</h4>}
        <h1>Ricardo Nevarez Jr</h1>
        <nav>
            <a href='/'>Resume</a> | <a href='Projects'>Projects</a> | <a href='Scores'>NYT Game Scores</a>
        </nav> 
    </div> 
      <body>
        <div id="root">{children}</div>
      </body>
    </>
  )
}
import './App.css'

const ownerName = '신도영'

const sections = [
  { href: '#interests', label: '관심사' },
  { href: '#strengths', label: '배움' },
  { href: '#activities', label: '활동과 작품' },
  { href: '#goals', label: '목표' },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="나의 포트폴리오 처음으로">
            <span className="brand-symbol" aria-hidden="true">✳</span> my portfolio<span className="brand-dot">.</span>
          </a>
          <nav aria-label="페이지 메뉴">
            {sections.map((section) => (
              <a key={section.href} href={section.href}>{section.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero page-width" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> 반가워요, 제 이야기를 들려드릴게요</p>
            <h1 id="hero-title">안녕하세요,<br />{ownerName}입니다<span className="title-dot">.</span></h1>
            <p className="hero-description">
              친구의 이야기를 잘 듣고,<br />
              책과 배움으로 관심 분야를 넓혀 가는 {ownerName}입니다.
            </p>
            <a className="hero-link" href="#interests">저를 더 알아보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="book-illustration" aria-hidden="true">
            <div className="book-sun" />
            <div className="book-stack">
              <div className="book book-back"><span /></div>
              <div className="book book-middle"><span /></div>
              <div className="book book-front"><span /></div>
            </div>
            <span className="illustration-spark spark-one">✳</span>
            <span className="illustration-spark spark-two">✦</span>
            <span className="illustration-caption">읽고 · 배우고 · 자라기</span>
          </div>
        </section>

        <section className="content-section page-width" id="interests" aria-labelledby="interests-title">
          <div className="section-heading">
            <p className="eyebrow">01 / 관심사</p>
            <h2 id="interests-title">책과 배움이<br />좋아요<span>.</span></h2>
          </div>
          <article className="content-card interest-card">
            <span className="card-icon" aria-hidden="true">책</span>
            <div>
              <h3>관심사와 취미</h3>
              <p>책을 읽고 새로운 것을 배우며 관심 있는 분야를 알아가는 것을 좋아해요.</p>
              <span className="tag"># 책과 배움</span>
            </div>
          </article>
        </section>

        <section className="content-section learning-section" id="strengths" aria-labelledby="strengths-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">02 / 배우는 중</p>
              <h2 id="strengths-title">잘하는 것과<br />배우고 싶은 것<span>.</span></h2>
            </div>
            <div className="learning-grid">
              <article className="content-card learning-card">
                <span className="card-label">제가 잘하는 것</span>
                <h3>친구 이야기를<br />잘 들어요.</h3>
                <p>친구의 이야기에 귀 기울이는 것이 제가 잘하는 점이에요.</p>
              </article>
              <article className="content-card learning-card learning-card-accent">
                <span className="card-label">새롭게 배우고 싶은 것</span>
                <h3>코딩을<br />배우고 싶어요.</h3>
                <p>새로운 것을 알아 가듯, 코딩도 차근차근 배워 보고 싶어요.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section page-width" id="activities" aria-labelledby="activities-title">
          <div className="section-heading">
            <p className="eyebrow">03 / 경험과 작품</p>
            <h2 id="activities-title">활동과 작품<span>.</span></h2>
            <p className="section-description">기억에 남는 활동이나 작품을 소개하는 공간이에요.</p>
          </div>
          <div className="activity-placeholder">
            <span className="placeholder-mark" aria-hidden="true">＋</span>
            <div>
              <h3>소개할 내용을 준비하고 있어요</h3>
              <p>동아리나 학교 활동의 이름과 이야기를 정리한 뒤 이곳에 추가할게요.</p>
            </div>
          </div>
        </section>

        <section className="goal-section" id="goals" aria-labelledby="goals-title">
          <div className="page-width goal-inner">
            <p className="eyebrow">04 / 앞으로의 목표</p>
            <h2 id="goals-title">관심 있는 분야를<br />더 깊이 배우고 싶어요<span>.</span></h2>
            <p>책과 배움으로 새로운 것을 알아가며, 관심 있는 분야를 꾸준히 탐색해 볼게요.</p>
            <a className="goal-link" href="#home">처음으로 돌아가기 <span aria-hidden="true">↑</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home">my portfolio<span className="brand-dot">.</span></a>
        <p>{ownerName}의 이야기는 계속됩니다.</p>
        <a className="back-top" href="#home">맨 위로 <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

export default App

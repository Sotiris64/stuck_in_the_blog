import styled from 'styled-components'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const Header = styled.header`
  display: flex;
  position: sticky;
  width: 100%;
  flex-grow: 1;
  top: 0;
  max-width: 70em;
  margin: 0 auto;
  padding: 0 2rem;
  justify-content: space-between;
  padding: 2rem;
  color: white;
  font-size: 1.2rem;
  font-family: sans-serif;
  & a {
    color: inherit;
  }
`
const LogoWrapper = styled.div``

const Navbar = styled.nav`
  flex-grow: 1;
  ul {
    display: flex;
    justify-content: space-evenly;
  }
`
// const Controls = styled.div`
//   flex-grow: 1;

//   ul {
//     display: flex;
//     justify-content: space-around;
//   }
// `

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const RandomLinks = styled.div`
  display: flex;
  justify-content: center;
`
const Ps = styled.div``
const SocialMediaIcon = styled.a`
  img {
    width: 4rem;
  }
`

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <Header>
        <LogoWrapper>
          <img src="/favicon.png" alt="logo" />
        </LogoWrapper>

        <Navbar>
          <ul>
            <li>
              <a href="/">latest</a>
            </li>
            <li>
              <a href="/">Posts</a>
            </li>
            <li>
              <a href="/">Galerry</a>
            </li>
          </ul>
        </Navbar>

        {/* <Controls>
          <ul>
            <li>
              <button>HI</button>
            </li>
            <li>
              <button>HI</button>
            </li>
            <li>
              <button>HI</button>
            </li>
          </ul>
        </Controls> */}
      </Header>
      {children}
      <Footer>
        <Ps>Ps</Ps>
        <RandomLinks>
          <SocialMediaIcon href="/">
            <img src="/favicon.png" alt="github icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href="/">
            <img src="/favicon.png" alt="instagram icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href="/">
            <img src="/favicon.png" alt="personal website icon" />
          </SocialMediaIcon>
        </RandomLinks>
      </Footer>
    </>
  )
}

export default BlogLayout

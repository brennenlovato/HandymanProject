import { MainHeader } from "../../../styles/sharedStyle";

const HomeHeader = () => (
  <>
    {/* <h1>Hello World</h1>
    <h1 style={{ color: 'blue', fontsize: '24px' }}>Hello World</h1>
    <h1 style={styles.header}>Hello World</h1>
    <h1 style={styles.header2}>Hello World</h1>
    <MainHeader>Hello World</MainHeader>
    <MainHeader size='sm'>Hello World</MainHeader>
    <MainHeader size='md'>Hello World</MainHeader> */}
    <h1 className="text-center">
      Welcome
      <br />
      To
      <br />
      HandyMan!
    </h1>
  </>
)

export const styles = {
  header: {
    color: 'green',
    background: 'red',
  }, 
  header2: {
    color: 'yellow',
    fontSize: '65px',
  }
}

export default HomeHeader;
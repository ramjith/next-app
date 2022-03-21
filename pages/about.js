import Image from 'next/image'
const images = ['100', '200', '300', '400']
const number = 500;

const about = () => {
    return (<div>
        {images.map(img=> {
          return (<>
          <h1>Hello</h1>
          <Image 
          src={`https://random.imagecdn.app/${number}/${img}`} 
          alt="test" width="600" height="300"/>
          </>)
        })
    }
    </div>)
}

export default about;
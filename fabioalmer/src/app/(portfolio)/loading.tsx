
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div className='animate-slide-left'>
      <h1>Loading...</h1>
    </div>
    
    )
  }


const ImageLoader = ()=> {
  return (
    <div>Please Wait While The Image Is Loading</div>
  )
}


export {ImageLoader};
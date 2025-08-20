const page = async ({params}) => {
   const {productId,reviewsId}=await params
  return (
    <div>
        <h1>product id {productId} review {reviewsId} </h1>
    </div>
  )
}

export default page
import { notFound } from "next/navigation"

const page = async ({params}) => {
   const {productId,reviewsId}=await params


   if(reviewsId > 50){
    notFound()
   }

  return (
    <div>
        <h1>product id {productId} review {reviewsId} </h1>
    </div>
  )
}

export default page
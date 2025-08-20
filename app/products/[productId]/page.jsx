const page = async({params}) => { ///dynamin route
    const productId=await params.productId;
  return (
    <div>
        <h1>product details is {productId}</h1>
    </div>
  )
}

export default page
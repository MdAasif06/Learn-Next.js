const page = async({params}) => {
    const {slug}=await params
    console.log(slug)
    if(slug?.length == 1){
        return(
            <div>
                lecture-1
            </div>
        )
    }
    if(slug?.length == 2){
        return(
            <div>
                lecture-2
            </div>
        )
    }
     if(slug?.length == 3){
        return(
            <div>
                lecture-3
            </div>
        )
    }
     if(slug?.length == 4){
        return(
            <div>
                lecture-4
            </div>
        )
    }
  return (
    <div>
        <h1>leactures</h1>
    </div>
  )
}

export default page
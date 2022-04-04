const BASE_URL = "https://jsonplaceholder.typicode.com"

export const getAllBlog = ()=> async (dispatch)=>{
    let res = await fetch(`${BASE_URL}/posts`)
    let data = await res.json()
    console.log(data)

    try{
        dispatch(getAllBlogSuccess(data))
    }catch(error){
        dispatch(getAllBlogFail(data))
    }
}
export const getAllBlogSuccess = (data)=>{
    return {
        type: 'GET_ALL_BLOG_SUCCES',
        payload : data
    }
}
export const getAllBlogFail = (message)=>{
    return {
        type : 'GET_ALL_BLOG_FAIL',
        payload : message
    }
}
export const getSingleBlog = (id)=> async (dispatch)=>{
    let res = await fetch(`${BASE_URL}/posts/${id}`)
    let data = await res.json()
    try{
        dispatch(getSingleBlogSuccess(data))
    }
    catch (error){
        dispatch(getSingleBlogFail(data))
    }
}

export const getSingleBlogSuccess = (data)=>{
    return{
        type : 'GET_SINGLE_BLOG_SUCCES',
        payload: data
    }
}
export const getSingleBlogFail = (message)=>{
    return{
        type : 'GET_SINGLE_BLOG_FAIL',
        payload : message
    }
}
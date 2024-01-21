import React from 'react'

type Props = {}

const getBlogsByCategory = async (categoryId) => {

}

const Category = ({params}:{params:{category:string}}) => {
  return (
    <div>{params.category.replace('%20'," ")}</div>
  )
}

export default Category
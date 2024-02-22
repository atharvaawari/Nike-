
const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = ()=>{
        if(bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ?'border-violet-600/80': 'border-transparent'} cursor-pointer max-sm:flex-1 `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img 
            src={imgURL.thumbnail} 
            alt="shoe Collection"
            width={127}
            height={103}
            className="object-contain dark:mix-blend-multiply"
            />
        </div>
    </div>
  )
}

export default ShoeCard
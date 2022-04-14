import { useRouter } from 'next/router'

interface SimpleFunction<T,U> {
    (arg: T) : U;
}


const useMultipleIds: SimpleFunction<void, string[]> = () => {
    const router = useRouter()
    const { ids } = router.query
    if (!ids) {
        return []
    }
    const idArr = String(ids).split(',')
    return idArr
}

/*
*  We could use this for passing data between our pages,
*  this allows for bookmarkable urls for searches.
*  We could also use this for sorts, filters and range searches
*/
export default useMultipleIds

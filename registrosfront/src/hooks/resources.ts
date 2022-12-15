import _ from 'lodash'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResources } from '../store/features/ResourcesSlice'
import { RootState } from './../store/index'
import { http } from './../utils/http'
export default function useResources () {
    const orderResourceList = (list) => _.orderBy(list, ['name', 'type'], ['asc', 'asc'])
    const { resourceList: resources, loaded, activeResource } = useSelector((s: RootState) => s.resources)
    const dispatch = useDispatch()

    const populateResources = async () => {
        const resources = await http.get('/resources')
        dispatch(setResources(resources.data.payload))
    }

    useEffect(() => {
        populateResources()
    }, [])

    return {
        resources: orderResourceList(resources),
        resourcesLoaded: loaded,
        resourceTypes: _.uniq(resources.map((r: any) => r.type)),
        activeResources: orderResourceList(resources).filter(r => r.type === activeResource)
    }
}
